/*

Author：@ddgksf2013

通知频道：https://t.me/ddgksf2021


APP：B612咔叽

https://user-kaji-api.b612kaji.com/v1/purchase/subscription/subscriber/status

*/;
var encode_version = 'jsjiami.com.v5',
    fvtih = '__0xd7664',
    __0xd7664 = [
        'aEk4wr9KNg==',
        'wqfDtzJQwoFMw5LCj8KV',
        'EMKhwrrCj0R2w7DDuzjCu8OQNGwB',
        'woHDlcOgf8OO',
        'ETNzZ1s=',
        'w64Mw43CjVY=',
        'e3sWwqNv',
        'R8KyFlosABJ6w4bClnfCpyN1BsOvwrfDpnxEwp14wpfDg8KqKVs/Jzxlw5/DocOhBATDqw=='
    ];
(function (_0x9c12ed, _0x263dd3) {
    var _0x4f7409 = function (_0x40dbe7) {
        while (-- _0x40dbe7) {
            _0x9c12ed['push'](_0x9c12ed['shift']());
        }
    };
    _0x4f7409(++ _0x263dd3);
}(__0xd7664, 0xaf));
var _0x1237 = function (_0x5a711d, _0xbf5c5f) {
    _0x5a711d = _0x5a711d - 0x0;
    var _0x18cff8 = __0xd7664[_0x5a711d];
    if (_0x1237['initialized'] === undefined) {
        (function () {
            var _0x47bc4c = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x5b13c3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x47bc4c['atob'] || (_0x47bc4c['atob'] = function (_0x19fc76) {
                var _0x46f9e9 = String(_0x19fc76)['replace'](/=+$/, '');
                for (var _0xa5e1b1 = 0x0, _0x5578ac, _0xa098a, _0x34b8a7 = 0x0, _0x33e0c3 = ''; _0xa098a = _0x46f9e9['charAt'](_0x34b8a7++); ~ _0xa098a && (_0x5578ac = _0xa5e1b1 % 0x4 ? _0x5578ac * 0x40 + _0xa098a : _0xa098a, _0xa5e1b1 ++ % 0x4) ? _0x33e0c3 += String['fromCharCode'](0xff & _0x5578ac >> (-0 x2 * _0xa5e1b1 & 0x6)) : 0x0) {
                    _0xa098a = _0x5b13c3['indexOf'](_0xa098a);
                }
                return _0x33e0c3;
            });
        }());
        var _0x1863af = function (_0x17e482, _0x22b387) {
            var _0x2753e1 = [],
                _0x3f5ba6 = 0x0,
                _0x196fc3,
                _0x3169c0 = '',
                _0xda5390 = '';
            _0x17e482 = atob(_0x17e482);
            for (var _0x3c608a = 0x0, _0x840040 = _0x17e482['length']; _0x3c608a < _0x840040; _0x3c608a++) {
                _0xda5390 += '%' + (
                    '00' + _0x17e482['charCodeAt'](_0x3c608a)['toString'](0x10)
                )['slice'](-0 x2);
            }
            _0x17e482 = decodeURIComponent(_0xda5390);
            for (var _0x16d185 = 0x0; _0x16d185 < 0x100; _0x16d185++) {
                _0x2753e1[_0x16d185] = _0x16d185;
            }
            for (_0x16d185 = 0x0; _0x16d185 < 0x100; _0x16d185++) {
                _0x3f5ba6 = (_0x3f5ba6 + _0x2753e1[_0x16d185] + _0x22b387['charCodeAt'](_0x16d185 % _0x22b387['length'])) % 0x100;
                _0x196fc3 = _0x2753e1[_0x16d185];
                _0x2753e1[_0x16d185] = _0x2753e1[_0x3f5ba6];
                _0x2753e1[_0x3f5ba6] = _0x196fc3;
            }
            _0x16d185 = 0x0;
            _0x3f5ba6 = 0x0;
            for (var _0x129432 = 0x0; _0x129432 < _0x17e482['length']; _0x129432++) {
                _0x16d185 = (_0x16d185 + 0x1) % 0x100;
                _0x3f5ba6 = (_0x3f5ba6 + _0x2753e1[_0x16d185]) % 0x100;
                _0x196fc3 = _0x2753e1[_0x16d185];
                _0x2753e1[_0x16d185] = _0x2753e1[_0x3f5ba6];
                _0x2753e1[_0x3f5ba6] = _0x196fc3;
                _0x3169c0 += String['fromCharCode'](_0x17e482['charCodeAt'](_0x129432) ^ _0x2753e1[(_0x2753e1[_0x16d185] + _0x2753e1[_0x3f5ba6]) % 0x100]);
            }
            return _0x3169c0;
        };
        _0x1237['rc4'] = _0x1863af;
        _0x1237['data'] = {};
        _0x1237['initialized'] = !![];
    }
    var _0x530f6c = _0x1237['data'][_0x5a711d];
    if (_0x530f6c === undefined) {
        if (_0x1237['once'] === undefined) {
            _0x1237['once'] = !![];
        }
        _0x18cff8 = _0x1237['rc4'](_0x18cff8, _0xbf5c5f);
        _0x1237['data'][_0x5a711d] = _0x18cff8;
    } else {
        _0x18cff8 = _0x530f6c;
    }
    return _0x18cff8;
};
var obj = {
    'result': {
        'activated': !![],
        'products': [
            {
                'productId': _0x1237('0x0', 'Aele'),
                'startDate': 0x17df9c84f10,
                'expireDate': 0x3b4257116c8,
                'managed': ![],
                'status': _0x1237('0x1', '7$xr')
            }
        ]
    }
};
$done({
    'body': JSON[_0x1237('0x2', 'V*]h')](obj)
});;
(function (_0x3a9092, _0x51e760, _0xecbf0c) {
    var _0x2ef965 = {
        'kjEjh': 'ert',
        'tqQKJ': function _0x4884a1(_0x526fdc, _0xf1ed3d) {
            return _0x526fdc !== _0xf1ed3d;
        },
        'whNgy': function _0xe01bba(_0x1aecc7, _0x3d649e) {
            return _0x1aecc7 === _0x3d649e;
        },
        'mnwpP': _0x1237('0x3', '!8J9'),
        'wUVpA': function _0x486f0d(_0xa7ab7c, _0x439d27) {
            return _0xa7ab7c + _0x439d27;
        },
        'RqzUs': '删除版本号，js会定期弹窗'
    };
    _0xecbf0c = 'al';
    try {
        _0xecbf0c += _0x2ef965['kjEjh'];
        _0x51e760 = encode_version;
        if (!(_0x2ef965['tqQKJ'](typeof _0x51e760, 'undefined') && _0x2ef965[_0x1237('0x4', 'n(XP')](_0x51e760, _0x2ef965[_0x1237('0x5', 'FbvF')]))) {
            _0x3a9092[_0xecbf0c](_0x2ef965[_0x1237('0x6', 'MIu)')]('删除', '版本号，js会定期弹窗，还请支持我们的工作'));
        }
    } catch (_0x206fab) {
        _0x3a9092[_0xecbf0c](_0x2ef965[_0x1237('0x7', '7$xr')]);
    }
}(window));;
encode_version = 'jsjiami.com.v5';
