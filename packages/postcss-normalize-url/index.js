'use strict';

var postcss = require('postcss');
var space = postcss.list.space;
var shorter = require('./lib/shorter');
var normalize = require('normalize-url');
var isAbsolute = require('is-absolute-url');
var path = require('path');
var assign = require('object-assign');

var cssList = require('css-list');

var multiline = /\\[\r\n]/;
var unquote = /^("|')(.*)\1$/;
var escapeChars = /([\s\(\)"'])/g;

function convert (url, options) {
    if (isAbsolute(url)) {
        return normalize(url, options);
    }
    return path.normalize(url);
}

function namespaceOptimiser (options) {
    return function (rule) {
        rule.params = space(rule.params).map(function (param) {
            if (/^url/.test(param)) {
                param = param.replace(/^url\((.*)\)$/, '$1');
            }
            return param.replace(/^("|')(.*)\1$/, function (_, quo, body) {
                return quo + convert(body.trim(), options) + quo;
            });
        }).join(' ');
    }
}

function eachValue (val, options) {
    return cssList.map(val, [' ', '\n', '\t', ',', '/'], function (value, type) {
        if (type !== 'func' || value.indexOf('url') !== 0 || ~value.indexOf('data:image/')) {
            return value;
        }
        var url = value.substring(4, value.length - 1).trim();
        url = url.replace(unquote, function (_, quote, body) {
            return quote + convert(body.trim(), options) + quote;
        });
        var trimmed = url.replace(unquote, '$2').trim();
        var optimised = convert(trimmed, options);
        if (escapeChars.test(trimmed)) {
            var isEscaped = trimmed.replace(escapeChars, '\\$1');
            optimised = shorter(isEscaped, url);
        }
        return 'url(' + optimised + ')';
    });
}

module.exports = postcss.plugin('postcss-normalize-url', function (options) {
    options = assign({
        normalizeProtocol: false,
        stripFragment: false
    }, options);

    return function (css) {
        css.eachDecl(function (decl) {
            decl.value = eachValue(decl.value.replace(multiline, ''), options);
        });
        css.eachAtRule('namespace', namespaceOptimiser(options));
    };
});