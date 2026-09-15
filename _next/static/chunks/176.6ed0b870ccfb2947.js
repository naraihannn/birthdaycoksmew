"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [176], {
        1718: (e, t, n) => {
            n.r(t), n.d(t, {
                DeskLamp: () => a
            });
            var i = n(3264);
            class a {
                static create() {
                    let e = new i.YJl,
                        t = new i._4j({
                            color: 1118481,
                            roughness: .35,
                            metalness: .1
                        }),
                        n = new i.Ho_(1.5, 1.55, .4, 64),
                        o = new i.eaF(n, t);
                    o.castShadow = !0, o.receiveShadow = !0, e.add(o);
                    let r = new i.iNn(.5, .1, .25),
                        s = new i.eaF(r, new i._4j({
                            color: 3355443
                        }));
                    s.position.set(0, .21, 1.2), s.castShadow = !0, o.add(s);
                    let l = new i.B6O([new i.Pq0(0, .2, .1), new i.Pq0(0, 2.8, .1), new i.Pq0(.1, 3.6, -1), new i.Pq0(0, 3.5, -1.3)]),
                        c = new i.j6(l, 64, .22, 16, !1),
                        d = new i.eaF(c, t);
                    d.castShadow = !0, d.receiveShadow = !0, e.add(d);
                    let h = new i.YJl,
                        p = new i.Gu$(.35, 32, 16),
                        u = new i.eaF(p, t);
                    u.scale.z = .7, u.castShadow = !0, h.add(u);
                    let m = new i.YJl;
                    h.add(m), m.position.x = -.2;
                    let g = [];
                    g.push(new i.I9Y(.1, 0)), g.push(new i.I9Y(.5, .1)), g.push(new i.I9Y(1.3, 1)), g.push(new i.I9Y(1.35, 1));
                    let x = new i.nzx(g, 48),
                        f = new i.eaF(x, t);
                    f.castShadow = !0, f.receiveShadow = !0, m.add(f);
                    let w = new i._4j({
                            color: 0xfff5e6,
                            roughness: .8,
                            side: i.hsX
                        }),
                        y = new i.eaF(x, w);
                    m.add(y);
                    let v = new i._4j({
                            emissive: 0xffe4b5,
                            emissiveIntensity: 1,
                            color: 0xffe4b5
                        }),
                        b = new i.eaF(new i.Gu$(.4, 16, 16), v);
                    b.position.y = .6, m.add(b);
                    let k = new i.HiM(0xffe4b5, 3.8, 8, 1.2);
                    k.position.copy(b.position), k.castShadow = !0, k.shadow.mapSize.width = 512, k.shadow.mapSize.height = 512, k.shadow.bias = -3e-4, m.add(k);
                    let j = l.getPointAt(1);
                    return h.position.copy(j), h.rotation.set(0, 0, 0), h.rotateX(-Math.PI / 1.4), h.rotateY(Math.PI / 30), e.add(h), a.instances.push({
                        group: e,
                        switchMesh: s,
                        light: k,
                        bulbMat: v,
                        isOn: !0
                    }), e
                }
                static setupInteraction(e, t) {
                    if (this.onClickBound) return;
                    this.camera = e, this.controls = t;
                    let n = new i.tBo,
                        o = new i.I9Y;
                    this.onClickBound = () => {
                        if (this.controls && !1 === this.controls.isLocked || !this.camera) return;
                        o.set(0, 0), n.setFromCamera(o, this.camera);
                        let e = -1,
                            t = 1 / 0;
                        this.instances.forEach((i, a) => {
                            let o = n.intersectObject(i.switchMesh, !0);
                            o.length > 0 && o[0].distance < 2.5 && o[0].distance < t && (e = a, t = o[0].distance)
                        }), -1 !== e && a.toggle(e)
                    }, document.addEventListener("click", this.onClickBound)
                }
                static toggle(e) {
                    let t = this.instances[e];
                    t && (t.isOn = !t.isOn, t.light.intensity = 3.8 * !!t.isOn, t.bulbMat.emissiveIntensity = +!!t.isOn)
                }
                static toggleLamp() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = this.instances[e];
                    t && (t.isOn = !t.isOn, t.light.intensity = 3.8 * !!t.isOn, t.bulbMat.emissiveIntensity = +!!t.isOn, console.log("Desk Lamp ".concat(t.isOn ? "turned ON" : "turned OFF", " via proximity")))
                }
                static toggleByGroup(e) {
                    let t = this.instances.findIndex(t => t.group === e); - 1 !== t && this.toggle(t)
                }
                static getDeskLampState() {
                    var e;
                    return 0 !== this.instances.length && ((null == (e = this.instances[0]) ? void 0 : e.isOn) || !1)
                }
                static dispose() {
                    this.onClickBound && (document.removeEventListener("click", this.onClickBound), this.onClickBound = void 0), this.instances = []
                }
            }
            a.instances = []
        },
        2176: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => A
            });
            var i = n(5155),
                a = n(2115),
                o = n(3264),
                r = n(7431),
                s = n(1381),
                l = n(1386),
                c = n(8154),
                d = n(8446),
                h = n(6555),
                p = n(7813),
                u = n(3381),
                m = n(6001);
            class g {
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .7,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = new o._4j({
                            color: 4863786
                        }),
                        r = new o._4j({
                            color: 0xf0e8d8
                        }),
                        s = new o._4j({
                            color: 0xdcdcdc
                        }),
                        l = new o._4j({
                            color: 0xffffff
                        }),
                        c = new o._4j({
                            color: 8421504
                        }),
                        d = new o.YJl;
                    d.position.copy(t), d.rotation.y = i, d.scale.set(n, n, n), e.add(d);
                    let h = new o.eaF(new o.iNn(4, .5, 5), a);
                    h.position.y = .25, h.castShadow = !0, h.receiveShadow = !0, d.add(h);
                    let p = new o.eaF(new o.iNn(3.8, .5, 4.8, 10, 10, 10), r);
                    p.position.y = .75, p.castShadow = !0, p.receiveShadow = !0, d.add(p);
                    let u = new o.iNn(2, 2, .2, 10, 10, 10),
                        m = new o.eaF(u, s);
                    m.position.set(-1.05, 1, -2.6), m.castShadow = !0, d.add(m);
                    let g = new o.eaF(u, s);
                    g.position.set(1.05, 1, -2.6), g.castShadow = !0, d.add(g);
                    let x = new o.iNn(1.2, .3, .8, 16, 16, 16),
                        f = new o.eaF(x, l);
                    f.position.set(-.8, 1.15, -1.8), f.rotation.y = -.1, f.castShadow = !0, d.add(f);
                    let w = new o.eaF(x, l);
                    w.position.set(.8, 1.15, -1.8), w.rotation.y = .1, w.castShadow = !0, d.add(w);
                    let y = new o.iNn(.8, .25, .4, 16, 16, 16),
                        v = new o.eaF(y, c);
                    return v.position.set(0, 1.1, -1.2), v.rotation.y = .05, v.castShadow = !0, d.add(v), d
                }
            }
            class x {
                static createCheckerboard(e, t, n, i) {
                    let a = Math.floor(n / .8),
                        r = Math.floor(i / .8),
                        s = new o._4j({
                            color: 0xf5f5dc,
                            roughness: .4,
                            metalness: 0
                        }),
                        l = new o._4j({
                            color: 0xd2b48c,
                            roughness: .4,
                            metalness: 0
                        }),
                        c = new o._4j({
                            color: 0xc0c0c0,
                            roughness: .8,
                            metalness: 0
                        }),
                        d = new o.bdM(.78, .78),
                        h = new o.bdM(.8, .8),
                        p = a * r,
                        u = Math.ceil(p / 2),
                        m = Math.floor(p / 2),
                        g = new o.ZLX(d, s, u),
                        x = new o.ZLX(d, l, m),
                        f = new o.ZLX(h, c, p);
                    g.instanceMatrix.setUsage(o.Vnu), x.instanceMatrix.setUsage(o.Vnu), f.instanceMatrix.setUsage(o.Vnu);
                    let w = new o.kn4().makeRotationX(-Math.PI / 2),
                        y = new o.kn4,
                        v = 0,
                        b = 0,
                        k = 0;
                    for (let e = 0; e < a; e++)
                        for (let a = 0; a < r; a++) {
                            let r = t.x - n / 2 + (e + .5) * .8,
                                s = t.z - i / 2 + (a + .5) * .8;
                            y.identity().multiply(w).setPosition(r, .005, s), f.setMatrixAt(k++, y);
                            let l = (e + a) % 2 == 0,
                                c = .02 * Math.random() - .01,
                                d = new o.kn4().makeRotationZ(c),
                                h = y.clone().multiply(d);
                            h.setPosition(r, .01, s), l ? g.setMatrixAt(v++, h) : x.setMatrixAt(b++, h)
                        }
                    g.receiveShadow = !0, x.receiveShadow = !0, f.receiveShadow = !0, e.add(f), e.add(g), e.add(x)
                }
                static createCarpet(e, t) {
                    let n = new o._4j({
                            color: 9109504,
                            roughness: .95,
                            metalness: 0
                        }),
                        i = new o._4j({
                            color: 4915200,
                            roughness: .9,
                            metalness: 0
                        }),
                        a = new o._4j({
                            color: 0xdc143c,
                            roughness: 1,
                            metalness: 0
                        }),
                        r = new o.bdM(3.3, 2.3),
                        s = new o.eaF(r, i);
                    s.rotation.x = -Math.PI / 2, s.position.set(t.x, t.y - .002, t.z), s.receiveShadow = !0, e.add(s);
                    let l = new o.bdM(3, 2),
                        c = new o.eaF(l, n);
                    c.rotation.x = -Math.PI / 2, c.position.set(t.x, t.y, t.z), c.receiveShadow = !0, e.add(c);
                    let d = new o.bdM(2.4, 1.4),
                        h = new o._4j({
                            color: 7012352,
                            roughness: .9,
                            transparent: !0,
                            opacity: .8
                        }),
                        p = new o.eaF(d, h);
                    p.rotation.x = -Math.PI / 2, p.position.set(t.x, t.y + .001, t.z), e.add(p);
                    for (let n = 0; n < 20; n++) {
                        let i = new o.iNn(.01, .15, .005),
                            r = new o.eaF(i, a);
                        r.position.set(t.x - 1.5 + 3 * n / 20, t.y + .002, t.z + 1 + .075), e.add(r);
                        let s = new o.eaF(i, a);
                        s.position.set(t.x - 1.5 + 3 * n / 20, t.y + .002, t.z - 1 - .075), e.add(s)
                    }
                    for (let n = 0; n < Math.floor(12); n++) {
                        let i = new o.iNn(.15, .01, .005),
                            r = new o.eaF(i, a);
                        r.position.set(t.x - 1.5 - .075, t.y + .002, t.z - 1 + 2 * n / 12), e.add(r);
                        let s = new o.eaF(i, a);
                        s.position.set(t.x + 1.5 + .075, t.y + .002, t.z - 1 + 2 * n / 12), e.add(s)
                    }
                }
                static createWoodFloor(e, t, n, i) {
                    let a = new o.bdM(1, 1),
                        r = [new o._4j({
                            color: 7032618,
                            roughness: .65,
                            metalness: .05
                        }), new o._4j({
                            color: 8018483,
                            roughness: .6,
                            metalness: .05
                        }), new o._4j({
                            color: 6112035,
                            roughness: .7,
                            metalness: .05
                        })],
                        s = Math.floor(i / .25),
                        l = s * Math.ceil(n / 1),
                        c = r.map(e => new o.ZLX(a, e, l));
                    c.forEach(e => {
                        e.instanceMatrix.setUsage(o.Vnu)
                    });
                    let d = new o.kn4,
                        h = new o.kn4().makeRotationX(-Math.PI / 2),
                        p = new o.kn4,
                        u = new o.kn4,
                        m = Array(c.length).fill(0);
                    for (let e = 0; e < s; e++) {
                        let a = t.z - i / 2 + (e + .5) * .25,
                            o = t.x - n / 2 + .5 * Math.random();
                        for (; o < t.x + n / 2;) {
                            let e = Math.min(1.4, Math.max(.6, .7999999999999999 * Math.random() + .6)),
                                i = Math.min(o + e / 2, t.x + n / 2 - e / 2),
                                r = Math.floor(Math.random() * c.length),
                                s = c[r],
                                l = (Math.random() - .5) * .02;
                            p.makeRotationY(l), u.makeScale(e, 1, .235), d.identity(), d.multiply(h), d.multiply(p), d.multiply(u), d.setPosition(i, .02, a), s.setMatrixAt(m[r]++, d), o += e + .02
                        }
                    }
                    c.forEach((t, n) => {
                        t.count = m[n], t.instanceMatrix.needsUpdate = !0, t.receiveShadow = !0, e.add(t)
                    })
                }
                static createCssWoodFloor(e, t, n, i) {
                    let a = document.createElement("canvas");
                    a.width = 1024, a.height = 1024;
                    let r = a.getContext("2d"),
                        s = r.createLinearGradient(0, 0, 0, a.height);
                    s.addColorStop(0, "#752D10"), s.addColorStop(1, "#60200A"), r.fillStyle = s, r.fillRect(0, 0, a.width, a.height);
                    for (let e = 0; e < a.height; e += 100) {
                        let t = r.createLinearGradient(0, e, 0, e + 98);
                        t.addColorStop(0, "#82371A"), t.addColorStop(1, "#9A4E2A"), r.fillStyle = t, r.fillRect(0, e, a.width, 98), r.fillStyle = "#1a140f", r.fillRect(0, e + 98, a.width, 2)
                    }
                    let l = r.getImageData(0, 0, a.width, a.height),
                        c = l.data;
                    for (let e = 0; e < c.length; e += 4) {
                        let t = (Math.random() - .5) * 7.6499999999999995;
                        c[e] = Math.min(255, Math.max(0, c[e] + t)), c[e + 1] = Math.min(255, Math.max(0, c[e + 1] + t)), c[e + 2] = Math.min(255, Math.max(0, c[e + 2] + t))
                    }
                    r.putImageData(l, 0, 0);
                    let d = new o.GOR(a);
                    d.wrapS = o.GJx, d.wrapT = o.GJx;
                    let h = Math.max(1, Math.round(n / 2)),
                        p = Math.max(1, Math.round(i / 2));
                    d.repeat.set(h, p), d.colorSpace = o.er$, d.anisotropy = 4;
                    let u = new o._4j({
                            map: d,
                            roughness: .7,
                            metalness: .05
                        }),
                        m = new o.bdM(n, i),
                        g = new o.eaF(m, u);
                    g.rotation.x = -Math.PI / 2, g.position.set(t.x, .02, t.z), g.receiveShadow = !0, e.add(g)
                }
                static createTileCarpet(e, t, n, i, a) {
                    var r, s, l;
                    let c = null != (r = null == a ? void 0 : a.orientation) ? r : "horizontal",
                        d = null != (s = null == a ? void 0 : a.baseColor) ? s : "#ffffff",
                        h = ((e, t) => {
                            let n = '<?xml version="1.0" encoding="UTF-8"?><svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="50" fill="'.concat(e, '"/><g stroke="').concat(t, '" stroke-width="1.5" fill="none"><path d="M0 25h50v25h50v-25h-50V0h-50z"/><path d="M50 0v50 M0 25h100"/></g></svg>');
                            return "data:image/svg+xml,".concat(encodeURIComponent(n))
                        })(d, null != (l = null == a ? void 0 : a.lineColor) ? l : "#000000"),
                        p = new o.Tap().load(h);
                    p.colorSpace = o.er$, p.wrapS = o.GJx, p.wrapT = o.GJx, p.anisotropy = 4;
                    let u = Math.max(1, Math.round(n / .6)),
                        m = Math.max(1, Math.round(i / .3));
                    p.repeat.set(u, m), "horizontal" === c ? (p.center.set(.5, .5), p.rotation = 0) : (p.center.set(.5, .5), p.rotation = Math.PI / 2);
                    let g = new o._4j({
                            color: 0xffffff,
                            map: p,
                            roughness: .95,
                            metalness: 0
                        }),
                        x = new o.bdM(n, i),
                        f = new o.eaF(x, g);
                    f.rotation.x = -Math.PI / 2, "vertical" === c && (f.rotation.y = Math.PI / 2), f.position.copy(new o.Pq0(t.x, t.y + .022, t.z)), f.receiveShadow = !0, e.add(f)
                }
            }
            class f {
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        l = new o.YJl;
                    l.position.copy(t), l.rotation.y = r, l.scale.set(n, n, n), e.add(l);
                    let c = new o._4j({
                            color: 0xffffff,
                            roughness: .8,
                            metalness: .1
                        }),
                        d = new o._4j({
                            color: 8947848,
                            roughness: .4,
                            metalness: .8
                        }),
                        h = new o.eaF(new o.iNn(12, .3, 5.5), c);
                    h.position.y = 7.35, h.castShadow = !0, h.receiveShadow = !0, l.add(h);
                    let p = new o.eaF(new o.iNn(4, 7.2, 5.3), c);
                    p.position.set(4, 3.6, 0), p.castShadow = !0, p.receiveShadow = !0, l.add(p);
                    let u = 2.2666666666666666,
                        m = new o.iNn(3.8, u, .1),
                        g = new o.iNn(1.6, .2, .2);
                    for (let e = 0; e < 3; e++) {
                        let t = new o.YJl,
                            n = new o.eaF(m, c);
                        n.castShadow = !0, n.receiveShadow = !0;
                        let i = new o.eaF(g, d);
                        i.position.z = .15, i.castShadow = !0, t.add(n, i);
                        let a = 7.2 - e * (u + .1) - u / 2 - .1;
                        t.position.set(p.position.x, a, 2.6999999999999997), l.add(t)
                    }
                    let x = new o.ypk;
                    x.moveTo(0, 7.2), x.lineTo(0, 1), x.quadraticCurveTo(0, 0, 1, 0), x.lineTo(4, 0), x.quadraticCurveTo(5, 0, 5, 1), x.lineTo(5, 7.2), x.lineTo(0, 7.2);
                    let f = new o.wAk;
                    f.moveTo(1.8, 7.2), f.lineTo(1.8, 2.8), f.quadraticCurveTo(1.8, 1.8, 2.8, 1.8), f.lineTo(2.2, 1.8), f.quadraticCurveTo(3.2, 1.8, 3.2, 2.8), f.lineTo(3.2, 7.2), f.lineTo(1.8, 7.2), x.holes.push(f);
                    let y = new o.QCA(x, {
                            depth: .3,
                            bevelEnabled: !1
                        }),
                        v = new o.eaF(y, c);
                    v.rotation.y = Math.PI / 2, v.position.set(-6, 0, 2.75), v.castShadow = !0, v.receiveShadow = !0, l.add(v);
                    let b = new o.iNn(3, .3, 3.8499999999999996),
                        k = new o.eaF(b, c),
                        j = .5;
                    k.position.set(j, 2.8, 0), k.castShadow = !0, k.receiveShadow = !0, l.add(k);
                    let M = -k.geometry.parameters.depth / 2 + .75 + .05,
                        S = w(5, 1.8, 2.2, .3, .5);
                    S.position.set(j - .8999999999999999, 3.0999999999999996, M), l.add(S);
                    let C = w(7, 1.6, 2, .2, .4);
                    C.position.set(j + .44999999999999996, 3.0999999999999996, M), l.add(C);
                    let E = function () {
                        let e = new o.YJl,
                            t = new o._4j({
                                color: 9849600
                            }),
                            n = new o._4j({
                                color: 2263842
                            }),
                            i = new o.Ho_(.5, .4, .8, 16),
                            a = new o.eaF(i, t);
                        a.position.y = .4, a.castShadow = !0, e.add(a);
                        for (let t = 0; t < 5; t++) {
                            let t = new o.Gu$(.3, 8, 6),
                                i = new o.eaF(t, n);
                            i.position.set(o.cj9.randFloat(-.2, .2), o.cj9.randFloat(1, 1.5), o.cj9.randFloat(-.2, .2)), i.castShadow = !0, e.add(i)
                        }
                        return e
                    }();
                    if (E.position.set(-4.800000000000001, 7.5, -1.65), l.add(E), i && a) {
                        let e = new s.nB({
                            mass: 0,
                            material: a
                        });
                        e.addShape(new s.az(new s.eB(4 * n / 2, 7.2 * n / 2, 5.3 * n / 2)), new s.eB(p.position.x * n, 3.6 * n, 0)), e.addShape(new s.az(new s.eB(.3 * n / 2, 7.2 * n / 2, 5 * n / 2)), new s.eB(-5.85 * n, 3.6 * n, 0)), e.position.set(t.x, t.y, t.z);
                        let o = new s.PT;
                        o.setFromAxisAngle(new s.eB(0, 1, 0), r), e.quaternion.copy(o), i.addBody(e)
                    }
                    return l
                }
            }

            function w(e, t, n, i, a) {
                let r = new o.YJl,
                    s = 0;
                for (let l = 0; l < e; l++) {
                    let e = o.cj9.randFloat(t, n),
                        l = o.cj9.randFloat(i, a),
                        c = new o.Q1f().setHSL(Math.random(), .6, .5),
                        d = new o.iNn(l, e, 1.5),
                        h = new o._4j({
                            color: c,
                            roughness: .9
                        }),
                        p = new o.eaF(d, h);
                    p.position.set(s + l / 2, e / 2, 0), p.rotation.y = o.cj9.randFloat(-.1, .1), p.castShadow = !0, r.add(p), s += l
                }
                return r.position.x -= s / 2, r
            }
            class y {
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        l = new o.YJl;
                    l.position.copy(t), l.rotation.y = r, l.scale.set(n, n, n), e.add(l);
                    let c = new o._4j({
                            color: 1710618,
                            roughness: .6,
                            metalness: .1
                        }),
                        d = new o._4j({
                            color: 5066061,
                            roughness: .7,
                            metalness: .1
                        }),
                        h = new o._4j({
                            color: 3355443,
                            roughness: .7,
                            metalness: .1
                        }),
                        p = new o._4j({
                            color: 2236962,
                            roughness: .8,
                            metalness: 0
                        }),
                        u = new o.YJl,
                        m = new o.eaF(new o.Ho_(.05, .05, .8, 32), p);
                    m.position.y = .4, m.castShadow = !0, u.add(m);
                    let g = new o.iNn(.05, .05, .7),
                        x = new o.Ho_(.08, .08, .04, 16);
                    for (let e = 0; e < 5; e++) {
                        let t = e / 5 * Math.PI * 2,
                            n = new o.eaF(g, p);
                        n.position.set(.3 * Math.sin(t), .05, .3 * Math.cos(t)), n.rotation.y = t, n.castShadow = !0, u.add(n);
                        let i = new o.eaF(x, p);
                        i.position.set(.65 * Math.sin(t), .05, .65 * Math.cos(t)), i.rotation.x = Math.PI / 2, i.castShadow = !0, u.add(i)
                    }
                    l.add(u);
                    let f = new o.eaF(new o.iNn(1, .2, 1), h);
                    f.position.y = .8, f.castShadow = !0, l.add(f);
                    let w = new o.eaF(new o.iNn(.8, .1, .8), d);
                    w.position.y = .95, w.castShadow = !0, l.add(w);
                    let y = new o.YJl,
                        v = new o.eaF(new o.iNn(1, 1.6, .15), c);
                    v.castShadow = !0, y.add(v);
                    let b = new o.iNn(.2, 1.6, .2),
                        k = new o.eaF(b, d);
                    k.position.x = -.4, k.castShadow = !0, y.add(k);
                    let j = new o.eaF(b, d);
                    j.position.x = .4, j.castShadow = !0, y.add(j);
                    let M = new o.iNn(.6, .25, .05),
                        S = new o.eaF(M, d);
                    S.position.set(0, .3, .1), S.castShadow = !0, y.add(S);
                    let C = new o.eaF(M, d);
                    C.position.set(0, -.1, .1), C.castShadow = !0, y.add(C), y.position.set(0, 1.6, -.45), y.rotation.x = -.1, l.add(y);
                    let E = new o.eaF(new o.iNn(.5, .3, .15), h);
                    E.position.set(0, 2.2, -.3), E.rotation.x = -.1, E.castShadow = !0, l.add(E);
                    let P = new o.eaF(new o.iNn(.7, .4, .2), h);
                    P.position.set(0, 1.2, -.3), P.rotation.x = -.1, P.castShadow = !0, l.add(P);
                    let N = new o.YJl,
                        L = new o.iNn(.1, .5, .1),
                        z = new o.iNn(.15, .08, .6),
                        I = new o.eaF(L, p);
                    I.position.set(-.6, 1.05, 0), I.castShadow = !0, N.add(I);
                    let B = new o.eaF(z, p);
                    B.position.set(-.6, 1.3, 0), B.castShadow = !0, N.add(B);
                    let T = new o.eaF(L, p);
                    T.position.set(.6, 1.05, 0), T.castShadow = !0, N.add(T);
                    let F = new o.eaF(z, p);
                    if (F.position.set(.6, 1.3, 0), F.castShadow = !0, N.add(F), l.add(N), l.position.y = t.y, i && a) {
                        let e = new s.nB({
                            mass: 0,
                            material: a
                        });
                        e.addShape(new s.az(new s.eB(n / 2, .2 * n / 2, n / 2)), new s.eB(0, .8 * n, 0)), e.addShape(new s.az(new s.eB(n / 2, 1.6 * n / 2, .15 * n / 2)), new s.eB(0, 1.6 * n, -.45 * n)), e.addShape(new s.az(new s.eB(.7 * n / 2, .1 * n / 2, .7 * n / 2)), new s.eB(0, .05 * n, 0)), e.position.set(t.x, t.y, t.z);
                        let o = new s.PT;
                        o.setFromAxisAngle(new s.eB(0, 1, 0), r), e.quaternion.copy(o), i.addBody(e)
                    }
                    return l
                }
            }
            class v {
                static drawCalendar(e, t) {
                    let n = t.width,
                        i = t.height,
                        a = new Date,
                        o = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"][a.getMonth()],
                        r = a.getDate(),
                        s = a.getFullYear(),
                        l = a.getMonth();
                    e.fillStyle = "#ffffff", e.fillRect(0, 0, n, i), e.fillStyle = "#cc241d";
                    let c = Math.round(.12 * i);
                    e.fillRect(0, 0, n, c), e.fillStyle = "#ffffff", e.font = "bold ".concat(Math.round(.6 * c), "px Inter, Arial, sans-serif"), e.textAlign = "center", e.textBaseline = "middle", e.fillText(o, n / 2, Math.round(c / 2)), e.fillStyle = "#504945", e.font = "bold ".concat(Math.round(.32 * c), "px Inter, Arial, sans-serif");
                    let d = n / 7,
                        h = c + Math.round(.35 * c);
                    ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].forEach((t, n) => {
                        e.fillText(t, n * d + d / 2, h)
                    });
                    let p = new Date(s, l, 1).getDay(),
                        u = new Date(s, l + 1, 0).getDate(),
                        m = 1;
                    e.font = "".concat(Math.round(.4 * c), "px Inter, Arial, sans-serif");
                    let g = h + Math.round(.5 * c),
                        x = Math.round(.6 * c);
                    for (let t = 0; t < 6; t++)
                        for (let n = 0; n < 7; n++) {
                            if (0 === t && n < p) continue;
                            if (m > u) break;
                            let i = n * d + d / 2,
                                a = g + t * x;
                            m === r ? (e.fillStyle = "#fabd2f", e.beginPath(), e.arc(i, a - Math.round(.15 * x), Math.round(.45 * x), 0, 2 * Math.PI), e.fill(), e.fillStyle = "#282828", e.font = "bold ".concat(Math.round(.4 * c), "px Inter, Arial, sans-serif"), e.fillText(String(m), i, a), e.font = "".concat(Math.round(.4 * c), "px Inter, Arial, sans-serif")) : (e.fillStyle = "#282828", e.fillText(String(m), i, a)), m++
                        }
                }
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .35,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = new o.YJl;
                    a.position.copy(t), a.rotation.y = i, a.scale.set(n, n, n), e.add(a);
                    let r = new o._4j({
                            color: 6047804,
                            roughness: .5,
                            metalness: .1
                        }),
                        s = new o.eaF(new o.iNn(2.5, 3.2, .1), r);
                    s.castShadow = !0, s.receiveShadow = !0, a.add(s);
                    let l = document.createElement("canvas");
                    l.width = 512, l.height = Math.round(655.36);
                    let c = l.getContext("2d");
                    v.drawCalendar(c, l);
                    let d = new o.GOR(l);
                    d.colorSpace = o.er$;
                    let h = new o.eaF(new o.bdM(2.4, 3.1), new o.V9B({
                        map: d,
                        toneMapped: !1
                    }));
                    h.position.z = .051000000000000004, a.add(h);
                    let p = new Date,
                        u = "".concat(p.getFullYear(), "-").concat(p.getMonth() + 1, "-").concat(p.getDate());
                    return v.instances.push({
                        canvas: l,
                        ctx: c,
                        texture: d,
                        lastYMD: u
                    }), a
                }
                static update() {
                    if (0 === v.instances.length) return;
                    let e = new Date,
                        t = "".concat(e.getFullYear(), "-").concat(e.getMonth() + 1, "-").concat(e.getDate());
                    for (let e of v.instances) e.lastYMD !== t && (v.drawCalendar(e.ctx, e.canvas), e.texture.needsUpdate = !0, e.lastYMD = t)
                }
                static dispose() {
                    v.instances = []
                }
            }
            v.instances = [];
            class b {
                static create(e, t, n) {
                    var i, a, r;
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.PI / 2,
                        l = arguments.length > 4 ? arguments[4] : void 0,
                        c = new o.YJl;
                    c.position.copy(t), c.scale.set(n, n, n), c.rotation.y = s, e.add(c);
                    let d = 0,
                        h = 16.15;
                    if ((null == l ? void 0 : l.fitWidth) && (null == l ? void 0 : l.fitHeight)) {
                        let e = null != (i = l.margin) ? i : 0,
                            t = l.fitWidth * (1 - e) / (l.fitHeight * (1 - e) / 13.6);
                        t > h && (d = Math.ceil((t - h) / 8.1), h += 8.1 * d)
                    }
                    let p = new o._4j({
                            color: 9071163,
                            roughness: .6,
                            metalness: .08
                        }),
                        u = 1 / 0,
                        m = -1 / 0;
                    for (let e = 0; e < 3; e++) {
                        let t = 4.55 * e + 2.25 - 6.8,
                            n = new o.iNn(8.05, 4.5, .15),
                            i = new o.eaF(n, p);
                        i.position.set(0, t, 0), i.castShadow = !0, i.receiveShadow = !0, c.add(i), u = Math.min(u, -4.025), m = Math.max(m, 4.025);
                        let a = 0 === d ? 2 : 4,
                            r = new o.iNn(a, 4.5, .15),
                            s = new o.eaF(r, p),
                            l = -4.075 - a / 2;
                        s.position.set(l, t, 0), s.castShadow = !0, s.receiveShadow = !0, c.add(s), u = Math.min(u, l - a / 2), m = Math.max(m, l + a / 2);
                        let h = 0 === d ? 2 : 4,
                            g = new o.iNn(h, 4.5, .15),
                            x = new o.eaF(g, p),
                            f = 4.075 + h / 2;
                        x.position.set(f, t, 0), x.castShadow = !0, x.receiveShadow = !0, c.add(x), u = Math.min(u, f - h / 2), m = Math.max(m, f + h / 2);
                        let w = l,
                            y = a,
                            v = f,
                            b = h;
                        for (let e = 1; e <= d; e++) {
                            let n = e === d ? 2 : 4,
                                i = w - ((y + n) / 2 + .05),
                                a = new o.iNn(n, 4.5, .15),
                                r = new o.eaF(a, p);
                            r.position.set(i, t, 0), r.castShadow = !0, r.receiveShadow = !0, c.add(r), u = Math.min(u, i - n / 2), w = i, y = n;
                            let s = v + ((b + n) / 2 + .05),
                                l = new o.iNn(n, 4.5, .15),
                                h = new o.eaF(l, p);
                            h.position.set(s, t, 0), h.castShadow = !0, h.receiveShadow = !0, c.add(h), m = Math.max(m, s + n / 2), v = s, b = n
                        }
                    }
                    let g = new o._4j({
                            color: 2236962
                        }),
                        x = Math.max(.1, m - u);
                    for (let e = 1; e < 3; e++) {
                        let t = new o.eaF(new o.iNn(x, .05, .15 + .02), g),
                            n = 4.5 * e + (e - 1) * .05 - 6.8 + .025;
                        t.position.set(0, n, .001), c.add(t)
                    }
                    let f = new o._4j({
                            color: 1118481,
                            side: o.$EB
                        }),
                        w = new o.eaF(new o.bdM(x, 13.6), f);
                    if (w.position.z = .01, w.receiveShadow = !0, c.add(w), null == l ? void 0 : l.fitHeight) {
                        let e = null != (a = l.margin) ? a : 0,
                            t = l.fitHeight * (1 - e) / 13.6;
                        c.scale.set(t, t, t)
                    } else if (null == l ? void 0 : l.fitWidth) {
                        let e = null != (r = l.margin) ? r : 0,
                            t = l.fitWidth * (1 - e) / x;
                        c.scale.set(t, t, t)
                    }
                    return c
                }
            }
            class k {
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = new o.YJl;
                    a.position.copy(t), a.rotation.y = i, a.scale.set(n, n, n), e.add(a);
                    let r = new o._4j({
                            color: 3815994,
                            roughness: .6,
                            metalness: .3
                        }),
                        s = new o.Ho_(1.2, 1.2, .2, 64);
                    s.rotateX(Math.PI / 2);
                    let l = new o.eaF(s, r);
                    l.castShadow = !0, l.receiveShadow = !0, a.add(l);
                    let c = document.createElement("canvas");
                    c.width = 256, c.height = 256;
                    let d = c.getContext("2d"),
                        h = new o.GOR(c);
                    h.colorSpace = o.er$;
                    let p = new o.V9B({
                            map: h,
                            toneMapped: !1
                        }),
                        u = new o.eaF(new o.tcD(1.18, 64), p);
                    return u.position.z = .101, a.add(u), this.instances.push({
                        canvas: c,
                        ctx: d,
                        texture: h
                    }), this.redrawInstance({
                        canvas: c,
                        ctx: d,
                        texture: h
                    }), a
                }
                static redrawInstance(e) {
                    let {
                        canvas: t,
                        ctx: n,
                        texture: i
                    } = e, a = t.width, o = a / 2;
                    n.clearRect(0, 0, a, a), n.fillStyle = "#f4f4f4", n.beginPath(), n.arc(o, o, o, 0, 2 * Math.PI), n.fill(), n.fillStyle = "#000000", n.textAlign = "center", n.textBaseline = "middle", n.font = "bold 32px Inter, Arial, sans-serif";
                    for (let e = 1; e <= 12; e++) {
                        let t = e / 12 * Math.PI * 2 - Math.PI / 2,
                            i = o + Math.cos(t) * (o - 35),
                            a = o + Math.sin(t) * (o - 35);
                        n.fillText(e.toString(), i, a)
                    }
                    let r = new Date,
                        s = r.getHours() % 12,
                        l = r.getMinutes(),
                        c = r.getSeconds();
                    n.lineCap = "round";
                    let d = (s + l / 60) / 12 * Math.PI * 2 - Math.PI / 2;
                    n.strokeStyle = "#000000", n.lineWidth = 12, n.beginPath(), n.moveTo(o, o), n.lineTo(o + .5 * o * Math.cos(d), o + .5 * o * Math.sin(d)), n.stroke();
                    let h = (l + c / 60) / 60 * Math.PI * 2 - Math.PI / 2;
                    n.lineWidth = 8, n.beginPath(), n.moveTo(o, o), n.lineTo(o + .75 * o * Math.cos(h), o + .75 * o * Math.sin(h)), n.stroke();
                    let p = c / 60 * Math.PI * 2 - Math.PI / 2;
                    n.strokeStyle = "#cc241d", n.lineWidth = 4, n.beginPath(), n.moveTo(o, o), n.lineTo(o + .85 * o * Math.cos(p), o + .85 * o * Math.sin(p)), n.stroke(), n.beginPath(), n.arc(o, o, 10, 0, 2 * Math.PI), n.fillStyle = "#000000", n.fill(), i.needsUpdate = !0
                }
                static update() {
                    for (let e of this.instances) this.redrawInstance(e)
                }
                static dispose() {
                    this.instances = []
                }
            }
            k.instances = [];
            var j = n(2335),
                M = n(1718);
            class S {
                setupEventListeners() {
                    window.addEventListener("keydown", this.onKeyDownBound), window.addEventListener("keyup", this.onKeyUpBound)
                }
                setupCollisionDetection() {
                    this.playerBody.addEventListener("collide", e => {
                        let t = new s.eB;
                        e.contact.ni && (e.contact.ni.negate(t), t.y > .5 && (this.canJump = !0))
                    })
                }
                updateMovement(e) {
                    if (!this.controls) return void console.warn("PlayerController: Controls not initialized");
                    if (!this.playerBody) return void console.error("PlayerController: Player body not initialized");
                    try {
                        if (this.isMobileInputActive) {
                            let t = Math.min(3, Math.max(0, 60 * e)),
                                n = this.mobileInput.look.x,
                                i = this.mobileInput.look.y;
                            if (0 !== n || 0 !== i) {
                                let e = new o.O9p(0, 0, 0, "YXZ");
                                e.setFromQuaternion(this.camera.quaternion);
                                let a = o.cj9.clamp(n * t, -this.maxYawPerFrame * t, this.maxYawPerFrame * t),
                                    r = o.cj9.clamp(i * t, -this.maxPitchPerFrame * t, this.maxPitchPerFrame * t);
                                e.y -= a, e.x -= r, e.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, e.x)), this.camera.quaternion.setFromEuler(e), this.mobileInput.look.x = 0, this.mobileInput.look.y = 0
                            }
                        }
                        try {
                            this.controls.getDirection(this.playerDirection)
                        } catch (t) {
                            let e = new o.Pq0(0, 0, -1).applyQuaternion(this.camera.quaternion);
                            this.playerDirection.copy(e)
                        }
                        if (this.playerDirection.y = 0, 0 === this.playerDirection.lengthSq() && (this.playerDirection.set(0, 0, -1), this.playerDirection.applyQuaternion(this.camera.quaternion), this.playerDirection.y = 0), this.playerDirection.normalize(), this.right.crossVectors(this.playerDirection, this.camera.up).normalize(), this.inputVelocity.set(0, 0, 0), this.inputEnabled && (this.moveForward && this.inputVelocity.add(this.playerDirection), this.moveBackward && this.inputVelocity.sub(this.playerDirection), this.moveLeft && this.inputVelocity.sub(this.right), this.moveRight && this.inputVelocity.add(this.right), this.isMobileInputActive)) {
                            let e = new o.Pq0;
                            e.add(this.playerDirection.clone().multiplyScalar(this.mobileInput.movement.y)), e.add(this.right.clone().multiplyScalar(this.mobileInput.movement.x)), this.inputVelocity.add(e), this.mobileInput.jump && this.canJump && this.playerBody && (this.playerBody.velocity.y = 10, this.canJump = !1, this.mobileInput.jump = !1)
                        }
                        if (this.inputVelocity.lengthSq() > 0) {
                            if (this.inputVelocity.normalize().multiplyScalar(this.moveSpeed), !isNaN(this.inputVelocity.x) && !isNaN(this.inputVelocity.z)) {
                                var t, n;
                                null == (t = (n = this.playerBody).wakeUp) || t.call(n), this.playerBody.velocity.x = this.inputVelocity.x, this.playerBody.velocity.z = this.inputVelocity.z
                            }
                        } else this.playerBody.velocity.x = 0, this.playerBody.velocity.z = 0;
                        let i = this.playerBody.position;
                        !i || isNaN(i.x) || isNaN(i.y) || isNaN(i.z) || (this.camera.position.copy(i), this.camera.position.y += .8, this.detectAndRecoverFromStuck(i)), this.updateFootstepLoop(e)
                    } catch (e) {
                        console.error("PlayerController: Error in updateMovement:", e), this.resetMovementState()
                    }
                }
                updateFootstepLoop(e) {
                    var t, n, i, a;
                    if (!this.audioListener || !this.loopAudio) return;
                    if (!(null == (t = this.controls) ? void 0 : t.isLocked)) {
                        if (this.loopCurrentVolume > 0 && (this.loopCurrentVolume = Math.max(0, this.loopCurrentVolume - this.loopFadePerSecond * e), this.loopAudio.setVolume(this.loopCurrentVolume), 0 === this.loopCurrentVolume && this.loopAudio.isPlaying)) try {
                            this.loopAudio.stop()
                        } catch (e) {}
                        return
                    }
                    let o = this.playerBody.velocity.x || 0,
                        r = this.playerBody.velocity.z || 0,
                        s = Math.sqrt(o * o + r * r),
                        l = this.moveForward || this.moveBackward || this.moveLeft || this.moveRight,
                        c = this.canJump;
                    if (l && c && s > .2) {
                        if (!this.loopAudio.isPlaying) {
                            try {
                                null == (a = this.audioListener) || null == (i = a.context) || null == (n = i.resume) || n.call(i)
                            } catch (e) {}
                            try {
                                this.loopAudio.play()
                            } catch (e) {}
                        }
                        this.loopCurrentVolume < this.loopTargetVolume && (this.loopCurrentVolume = Math.min(this.loopTargetVolume, this.loopCurrentVolume + this.loopFadePerSecond * e), this.loopAudio.setVolume(this.loopCurrentVolume))
                    } else if (this.loopCurrentVolume > 0 && (this.loopCurrentVolume = Math.max(0, this.loopCurrentVolume - this.loopFadePerSecond * e), this.loopAudio.setVolume(this.loopCurrentVolume), 0 === this.loopCurrentVolume && this.loopAudio.isPlaying)) try {
                        this.loopAudio.stop()
                    } catch (e) {}
                }
                setFootstepLoopBuffer(e) {
                    if (this.audioListener) {
                        if (!this.loopAudio) {
                            let e = new o.fP5(this.audioListener);
                            e.setLoop(!0), e.setVolume(0);
                            try {
                                this.camera.add(e)
                            } catch (e) {}
                            this.loopAudio = e
                        }
                        this.loopAudio.setBuffer(e)
                    }
                }
                detectAndRecoverFromStuck(e) {
                    let t = new o.Pq0(e.x, e.y, e.z),
                        n = t.distanceTo(this.lastPosition);
                    if ((this.moveForward || this.moveBackward || this.moveLeft || this.moveRight) && n < .005) {
                        if (this.stuckCounter++, this.stuckCounter > 15) {
                            if (this.stuckCounter < 40) this.playerBody.velocity.x = (Math.random() - .5) * 6, this.playerBody.velocity.z = (Math.random() - .5) * 6, this.playerBody.velocity.y = 1.5;
                            else if (this.stuckCounter < 60) {
                                let e = Math.random() * Math.PI * 2;
                                this.playerBody.position.x += .4 * Math.cos(e), this.playerBody.position.z += .4 * Math.sin(e), this.playerBody.velocity.x = 0, this.playerBody.velocity.z = 0
                            } else {
                                this.playerBody.position.set(0, 2, 8), this.playerBody.velocity.set(0, 0, 0), this.stuckCounter = 0, console.warn("PlayerController: Emergency unstuck");
                                return
                            }
                            this.stuckCounter >= 40 && (this.stuckCounter = 0)
                        }
                    } else this.stuckCounter = 0;
                    this.lastPosition.copy(t)
                }
                resetMovementState() {
                    this.moveForward = !1, this.moveBackward = !1, this.moveLeft = !1, this.moveRight = !1, this.playerBody && (this.playerBody.velocity.x = 0, this.playerBody.velocity.z = 0)
                }
                forceUnstuck() {
                    if (!this.playerBody) return;
                    let e = 0 + (Math.random() - .5) * 2,
                        t = 8 + (Math.random() - .5) * 2;
                    this.playerBody.position.set(e, 2, t), this.playerBody.velocity.set(0, 0, 0), this.stuckCounter = 0, console.log("PlayerController: Manual unstuck")
                }
                getMovementState() {
                    return {
                        moveForward: this.moveForward,
                        moveBackward: this.moveBackward,
                        moveLeft: this.moveLeft,
                        moveRight: this.moveRight,
                        canJump: this.canJump
                    }
                }
                reinitialize(e, t, n, i) {
                    this.playerBody = e, this.camera = t, this.controls = n, this.world = i, this.resetMovementState(), this.canJump = !1, this.stuckCounter = 0, this.lastPosition.set(0, 0, 0)
                }
                dispose() {
                    this.resetMovementState(), window.removeEventListener("keydown", this.onKeyDownBound), window.removeEventListener("keyup", this.onKeyUpBound), this.playerBody = null, this.camera = null, this.controls = null, this.world = null
                }
                setInputEnabled(e) {
                    this.inputEnabled = e, e || this.resetMovementState()
                }
                setMobileInput(e) {
                    if (this.mobileInput = {
                            ...e
                        }, this.isMobileInputActive = !0, this.mobileLookTarget.set(e.look.x, e.look.y), (Math.abs(e.movement.x) > .1 || Math.abs(e.movement.y) > .1) && this.playerBody) {
                        var t, n;
                        null == (t = (n = this.playerBody).wakeUp) || t.call(n)
                    }
                }
                setMobileInputActive(e) {
                    this.isMobileInputActive = e, e || (this.mobileInput = {
                        movement: {
                            x: 0,
                            y: 0
                        },
                        look: {
                            x: 0,
                            y: 0
                        },
                        jump: !1
                    })
                }
                constructor(e, t, n, i, a) {
                    if (this.moveForward = !1, this.moveBackward = !1, this.moveLeft = !1, this.moveRight = !1, this.canJump = !1, this.loopTargetVolume = .3, this.loopCurrentVolume = 0, this.loopFadePerSecond = 3, this.lastPosition = new o.Pq0, this.stuckCounter = 0, this.lastMovementTime = 0, this.inputVelocity = new o.Pq0, this.playerDirection = new o.Pq0, this.right = new o.Pq0, this.moveSpeed = 7, this.inputEnabled = !0, this.mobileInput = {
                            movement: {
                                x: 0,
                                y: 0
                            },
                            look: {
                                x: 0,
                                y: 0
                            },
                            jump: !1
                        }, this.isMobileInputActive = !1, this.mobileLookTarget = new o.I9Y(0, 0), this.mobileLookCurrent = new o.I9Y(0, 0), this.lookSmoothing = 0, this.maxYawPerFrame = .12, this.maxPitchPerFrame = .09, this.lookStopThreshold = 8e-4, this.onKeyDown = e => {
                            var t, n, i, a, o, r, s, l, c, d, h, p, u, m, g, x, f, w, y, v, b;
                            if (this.controls && this.inputEnabled) {
                                try {
                                    null == (i = this.audioListener) || null == (n = i.context) || null == (t = n.resume) || t.call(n)
                                } catch (e) {}
                                switch (e.code) {
                                case "KeyW":
                                    this.moveForward = !0, null == (o = this.playerBody) || null == (a = o.wakeUp) || a.call(o);
                                    break;
                                case "KeyA":
                                    this.moveLeft = !0, null == (s = this.playerBody) || null == (r = s.wakeUp) || r.call(s);
                                    break;
                                case "KeyS":
                                    this.moveBackward = !0, null == (c = this.playerBody) || null == (l = c.wakeUp) || l.call(c);
                                    break;
                                case "KeyD":
                                    this.moveRight = !0, null == (h = this.playerBody) || null == (d = h.wakeUp) || d.call(h);
                                    break;
                                case "Space":
                                    e.preventDefault(), this.canJump && this.playerBody && (this.playerBody.velocity.y = 10, this.canJump = !1), null == (u = this.playerBody) || null == (p = u.wakeUp) || p.call(u);
                                    break;
                                case "KeyR":
                                    this.forceUnstuck();
                                    break;
                                default:
                                    ("w" === e.key || "W" === e.key) && (this.moveForward = !0, null == (g = this.playerBody) || null == (m = g.wakeUp) || m.call(g)), ("a" === e.key || "A" === e.key) && (this.moveLeft = !0, null == (f = this.playerBody) || null == (x = f.wakeUp) || x.call(f)), ("s" === e.key || "S" === e.key) && (this.moveBackward = !0, null == (y = this.playerBody) || null == (w = y.wakeUp) || w.call(y)), ("d" === e.key || "D" === e.key) && (this.moveRight = !0, null == (b = this.playerBody) || null == (v = b.wakeUp) || v.call(b))
                                }
                            }
                        }, this.onKeyUp = e => {
                            if (this.inputEnabled) {
                                switch (e.code) {
                                case "KeyW":
                                    this.moveForward = !1;
                                    break;
                                case "KeyA":
                                    this.moveLeft = !1;
                                    break;
                                case "KeyS":
                                    this.moveBackward = !1;
                                    break;
                                case "KeyD":
                                    this.moveRight = !1
                                }("w" === e.key || "W" === e.key) && (this.moveForward = !1), ("a" === e.key || "A" === e.key) && (this.moveLeft = !1), ("s" === e.key || "S" === e.key) && (this.moveBackward = !1), ("d" === e.key || "D" === e.key) && (this.moveRight = !1)
                            }
                        }, this.playerBody = e, this.camera = t, this.controls = n, this.world = i, (null == a ? void 0 : a.listener) && (this.audioListener = a.listener, a.loopBuffer)) {
                        let e = new o.fP5(this.audioListener);
                        e.setBuffer(a.loopBuffer), e.setLoop(!0), e.setVolume(0), this.loopAudio = e;
                        try {
                            this.camera.add(e)
                        } catch (e) {}
                    }
                    this.onKeyDownBound = this.onKeyDown.bind(this), this.onKeyUpBound = this.onKeyUp.bind(this), this.setupEventListeners(), this.setupCollisionDetection()
                }
            }
            let C = e => {
                    let {
                        onClose: t
                    } = e, [n, o] = (0, a.useState)(null), [r, s] = (0, a.useState)(10), [l, c] = (0, a.useState)(1), [d, h] = (0, a.useState)(2), [p, u] = (0, a.useState)(3), m = (0, a.useRef)("normal"), g = (0, a.useRef)("normal"), x = (0, a.useRef)("normal"), [f, w] = (0, a.useState)("start"), [y, v] = (0, a.useState)("library"), [b, k] = (0, a.useState)(0), [j, M] = (0, a.useState)(1.6), [S, C] = (0, a.useState)("closed"), [E, P] = (0, a.useState)("normal"), [N, L] = (0, a.useState)("closed"), [z, I] = (0, a.useState)(null), B = (0, a.useRef)(null), [T, F] = (0, a.useState)(.8), [D, A] = (0, a.useState)({
                        w: Math.round(1152),
                        h: Math.round(720)
                    });
                    (0, a.useEffect)(() => {
                        console.log("\uD83C\uDFB5 Current song changed:", z)
                    }, [z]);
                    let [R, O] = (0, a.useState)(!1), _ = (0, a.useRef)(null), V = e => {
                        s(t => {
                            let n = t + 1;
                            return "safari" === e ? c(n) : "photos" === e ? h(n) : u(n), n
                        }), o(e)
                    }, q = [{
                        id: 1,
                        title: "Lagu Pertama",
                        artist: "The Weeknd",
                        duration: "3:24",
                        file: "/music/lagu1.mp3"
                    }, {
                        id: 2,
                        title: "Lagu Kedua",
                        artist: "The Weeknd",
                        duration: "4:15",
                        file: "/music/lagu2.mp3"
                    }, {
                        id: 3,
                        title: "Lagu Ketiga",
                        artist: "The Weeknd",
                        duration: "3:45",
                        file: "/music/lagu3.mp3"
                    }, {
                        id: 4,
                        title: "Lagu Keempat",
                        artist: "The Weeknd",
                        duration: "4:02",
                        file: "/music/lagu4.mp3"
                    }, {
                        id: 5,
                        title: "Lagu Kelima",
                        artist: "The Weeknd",
                        duration: "3:38",
                        file: "/music/lagu5.mp3"
                    }], U = e => {
                        var t;
                        let n = window.__spotifyPlayer__,
                            i = _.current || (null == n ? void 0 : n.audio) || null;
                        if (!i) return void console.error("❌ No audio object available");
                        let a = (null == n ? void 0 : n.currentSong) || z,
                            o = null != (t = null == n ? void 0 : n.isPlaying) ? t : R;
                        if ((null == a ? void 0 : a.id) === e.id) return void(o ? i.pause() : i.play().then(() => {
                            try {
                                window.dispatchEvent(new Event("spotifyPlay"))
                            } catch (e) {}
                        }).catch(e => console.error("❌ Audio resume error:", e)));
                        i.src = e.file, n && (n.currentSong = e), I(e), i.play().then(() => {
                            n && (n.isPlaying = !0), O(!0);
                            try {
                                window.dispatchEvent(new Event("spotifyPlay"))
                            } catch (e) {}
                        }).catch(e => {
                            console.error("❌ Audio play error:", e), O(!1)
                        })
                    };
                    (0, a.useEffect)(() => {
                        var e;
                        let t = window;
                        t.__spotifyPlayer__ || (t.__spotifyPlayer__ = {
                            audio: new Audio,
                            currentSong: null,
                            isPlaying: !1
                        });
                        let n = t.__spotifyPlayer__;
                        _.current = n.audio, I(null != (e = n.currentSong) ? e : null), O(!!n.isPlaying);
                        let i = () => {
                                n.isPlaying = !0, O(!0);
                                try {
                                    window.dispatchEvent(new Event("spotifyPlay"))
                                } catch (e) {}
                            },
                            a = () => {
                                n.isPlaying = !1, O(!1);
                                try {
                                    window.dispatchEvent(new Event("spotifyPause"))
                                } catch (e) {}
                            },
                            o = () => {
                                n.isPlaying = !1, O(!1), n.currentSong = null, I(null);
                                try {
                                    window.dispatchEvent(new Event("spotifyPause"))
                                } catch (e) {}
                            },
                            r = () => {
                                O(!1)
                            };
                        return n.audio.addEventListener("play", i), n.audio.addEventListener("pause", a), n.audio.addEventListener("ended", o), n.audio.addEventListener("error", r), () => {
                            n.audio.removeEventListener("play", i), n.audio.removeEventListener("pause", a), n.audio.removeEventListener("ended", o), n.audio.removeEventListener("error", r)
                        }
                    }, []), (0, a.useEffect)(() => {
                        let e = () => {
                            try {
                                let e = Math.round(900),
                                    t = window.innerWidth,
                                    n = window.innerHeight,
                                    i = (() => {
                                        try {
                                            var e, t;
                                            let n = navigator.userAgent || "";
                                            if (!/iPhone/i.test(n)) return !1;
                                            let i = window.devicePixelRatio || 1,
                                                a = (null == (e = window.screen) ? void 0 : e.width) || window.innerWidth,
                                                o = (null == (t = window.screen) ? void 0 : t.height) || window.innerHeight,
                                                r = Math.round(a * i),
                                                s = Math.round(o * i),
                                                l = (e, t, n) => Math.abs(e - t) <= n,
                                                c = l(r, 1170, 30) && l(s, 2532, 60) || l(r, 2532, 60) && l(s, 1170, 30);
                                            return i >= 2.9 && i <= 3.1 && c
                                        } catch (e) {
                                            return !1
                                        }
                                    })(),
                                    a = Math.max(12, Math.round(t * (i ? .03 : .04))),
                                    o = Math.max(12, Math.round(n * (i ? .02 : .05))),
                                    r = (t - 2 * a) / 1440,
                                    s = (n - 2 * o) / e,
                                    l = Math.min(r, s);
                                if (i) {
                                    let e = Math.min(s, 1.08 * r);
                                    l = Math.max(.36, Math.min(.8, e))
                                } else l = Math.max(.36, Math.min(.8, l));
                                F(l), A({
                                    w: Math.round(1440 * l),
                                    h: Math.round(e * l)
                                })
                            } catch (e) {}
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                        }
                    }, []);
                    let W = Array.from({
                            length: 12
                        }, (e, t) => "/images/foto".concat(t + 1, ".jpg")),
                        [H, G] = (0, a.useState)(new Date);
                    (0, a.useEffect)(() => {
                        let e = setInterval(() => {
                            G(new Date)
                        }, 1e3);
                        return () => clearInterval(e)
                    }, []), (0, a.useEffect)(() => {
                        "viewer" === y && M(1.6)
                    }, [y]), (0, a.useEffect)(() => {
                        let e = e => {
                            "viewer" === y && ("Escape" === e.key ? v("library") : "ArrowRight" === e.key ? k(e => (e + 1) % W.length) : "ArrowLeft" === e.key && k(e => (e - 1 + W.length) % W.length))
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [y, W.length]);
                    let Y = e => {
                            "close" === e ? C("closed") : "minimize" === e ? C("minimized") : "maximize" === e && C(e => {
                                let t = "maximized" === e ? "normal" : "maximized";
                                return m.current = t, t
                            })
                        },
                        K = e => {
                            "close" === e ? P("closed") : "minimize" === e ? P("minimized") : "maximize" === e && P(e => {
                                let t = "maximized" === e ? "normal" : "maximized";
                                return g.current = t, t
                            })
                        },
                        J = e => {
                            "safari" === e ? (C(e => "closed" === e || "minimized" === e ? m.current || "normal" : e), V("safari")) : "photos" === e && (P(e => "closed" === e || "minimized" === e ? g.current || "normal" : e), V("photos"))
                        };
                    return (0, i.jsxs)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "#06182c",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2500,
                            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
                            userSelect: "none",
                            overflow: "hidden"
                        },
                        onClick: e => {
                            e.target === e.currentTarget && t()
                        },
                        children: [(0, i.jsx)("style", {
                            children: "\n    :root {\n      --desktop-w: 1440px;\n      --menubar-h: 24px;\n      --dock-h: 92px;\n      --dock-radius: 18px;\n      --win-radius: 14px;\n      --titlebar-h: 44px;\n      --traffic: 12px;\n      --shadow: 0 20px 60px rgba(0,0,0,.25);\n      --text: #0b0c0f;\n      --text-dim: #3b3f45;\n      --white: #fff;\n      --glass: rgba(255,255,255,.32);\n      --glass-strong: rgba(255,255,255,.55);\n      --stroke: rgba(0,0,0,.08);\n      --accent: #007aff;\n    }\n\n    .screen {\n      position: relative;\n      width: var(--desktop-w);\n      height: calc(var(--desktop-w) * 0.625);\n      border-radius: 24px;\n      overflow: hidden;\n      box-shadow: var(--shadow);\n      background:\n        radial-gradient(1200px 900px at 70% 0%, rgba(255,255,255,.25), rgba(255,255,255,0) 60%),\n        url('https://source.unsplash.com/1440x900/?macos,big-sur') center/cover no-repeat,\n        linear-gradient(135deg, #0b3fae 0%, #ed5b7f 35%, #fbd07b 65%, #3db5f0 100%);\n      transform: scale(0.8);\n      transform-origin: center center;\n    }\n\n    .menubar {\n      position: absolute;\n      inset: 0 0 auto 0;\n      height: var(--menubar-h);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 14px;\n      background: rgba(255,255,255,.55);\n      backdrop-filter: saturate(180%) blur(20px);\n      -webkit-backdrop-filter: saturate(180%) blur(20px);\n      border-bottom: 1px solid var(--stroke);\n      font-size: 12px;\n      letter-spacing: .1px;\n      z-index: 100;\n    }\n\n    .left, .right {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n    }\n\n    .apple-logo {\n      width: 14px;\n      height: 14px;\n      -webkit-mask: url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg') center/contain no-repeat;\n      mask: url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg') center/contain no-repeat;\n      background: #111;\n    }\n    .apple-logo::before, .apple-logo::after { display: none; }\n\n    .clock {\n      font-variant-numeric: tabular-nums;\n      opacity: .9;\n    }\n\n    .traffic {\n      display: flex;\n      gap: 8px;\n      align-items: center;\n    }\n\n    .dot {\n      width: var(--traffic);\n      height: var(--traffic);\n      border-radius: 50%;\n      border: 1px solid rgba(0,0,0,.15);\n      cursor: pointer;\n      position: relative;\n    }\n\n    .close { background: #ff5f57; }\n    .min { background: #febc2e; }\n    .zoom { background: #28c840; }\n\n    .safari {\n      position: absolute;\n      left: 140px;\n      top: 64px;\n      width: 980px;\n      height: 600px;\n      border-radius: var(--win-radius);\n      overflow: hidden;\n      box-shadow: var(--shadow);\n      transition: all .22s ease;\n      z-index: 4;\n    }\n\n    .safari.minimized {\n      left: 50% !important;\n      top: calc(100% - var(--dock-h) - 34px) !important;\n      transform: translateX(-50%) scale(.2);\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    .safari.maximized {\n      left: 24px !important;\n      top: calc(var(--menubar-h) + 10px) !important;\n      width: calc(100% - 48px) !important;\n      height: calc(100% - var(--dock-h) - 64px) !important;\n    }\n\n    .safari.closed {\n      opacity: 0;\n      pointer-events: none;\n      transform: scale(.98);\n    }\n\n    .safari .titlebar {\n      height: var(--titlebar-h);\n      display: grid;\n      grid-template-columns: 240px 1fr 140px;\n      align-items: center;\n      background: linear-gradient(#f7f7f7,#ececec);\n      border-bottom: 1px solid #dcdcdc;\n      cursor: grab;\n      user-select: none;\n      position: relative;\n      z-index: 2;\n      padding: 0 8px;\n    }\n\n    .safari .toolbar-left {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding-left: 14px;\n    }\n\n    .safari .nav {\n      display: flex;\n      align-items: center;\n      gap: 6px;\n      margin-left: 16px;\n    }\n\n    .safari .navbtn {\n      width: 26px;\n      height: 22px;\n      border-radius: 6px;\n      background: rgba(0,0,0,.06);\n      border: 1px solid rgba(0,0,0,.1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n    }\n\n    .safari .navbtn.disabled {\n      opacity: .35;\n      pointer-events: none;\n    }\n\n    .safari .toolbar-center {\n      display: flex;\n      align-items: center;\n    }\n\n    .address {\n      margin: 0 12px;\n      height: 30px;\n      border-radius: 14px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 0 12px;\n      background: rgba(0,0,0,.06);\n      border: 1px solid rgba(0,0,0,.1);\n      font-size: 13px;\n      color: #666;\n      width: 100%;\n      box-shadow: inset 0 1px 0 rgba(255,255,255,.7);\n    }\n\n    .address .glass {\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: center/cover no-repeat;\n      filter: saturate(0) brightness(.8);\n    }\n\n    .safari .content {\n      position: absolute;\n      inset: var(--titlebar-h) 0 0 0;\n      background: linear-gradient(180deg, rgba(255,255,255,.66), rgba(255,255,255,.4));\n      backdrop-filter: blur(20px);\n      -webkit-backdrop-filter: blur(20px);\n      overflow-y: auto;\n      overflow-x: hidden;\n      z-index: 1;\n    }\n\n    .pages {\n      position: absolute;\n      inset: 0;\n    }\n\n    .page {\n      position: absolute;\n      inset: 0;\n      opacity: 0;\n      transform: translateX(40px);\n      transition: opacity .2s ease, transform .2s ease;\n      pointer-events: none;\n    }\n\n    .page.active {\n      opacity: 1;\n      transform: none;\n      pointer-events: auto;\n      z-index: 1;\n    }\n\n    .sp {\n      padding: 26px 32px 40px;\n      color: #1c1d20;\n    }\n\n    h2 {\n      margin: 6px 0 12px;\n      font-weight: 700;\n      font-size: 18px;\n    }\n\n    .favorites {\n      display: grid;\n      grid-template-columns: repeat(9, 1fr);\n      gap: 18px;\n      margin-top: 6px;\n    }\n\n    .favwrap {\n      width: 78px;\n      text-align: center;\n      margin: 0 auto;\n    }\n\n    .fav {\n      height: 72px;\n      border-radius: 12px;\n      background: rgba(255,255,255,.85);\n      border: 1px solid var(--stroke);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 8px 20px rgba(0,0,0,.06);\n      position: relative;\n      cursor: pointer;\n    }\n\n    .fav::before {\n      content: \"\";\n      width: 38px;\n      height: 38px;\n      background: none;\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n      border-radius: 8px;\n      filter: drop-shadow(0 2px 4px rgba(0,0,0,.15));\n    }\n\n    .fav.apple::before { background: url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg') center/contain no-repeat; }\n    .fav.slack::before { background: url('https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'); background-size: cover; }\n    .fav.code::before { background: url('https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'); background-size: cover; }\n    .fav.sketch::before { background: url('https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg'); background-size: cover; }\n    .fav.figma::before { background: url('https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'); background-size: cover; }\n    .fav.google::before { background: url('https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'); background-size: cover; }\n    /* Revert to previous Dribbble implementation */\n    .fav.dribbble::before { background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2048px-Dribbble_Text_Logo_Script.svg.png'); background-size: cover; }\n    .fav.linear::before { background: url('/logo.png'); background-size: contain; }\n    /* Specific size tweaks for Apple and Dribbble so icons are not oversized */\n    .fav.apple::before, .fav.dribbble::before { width: 30px; height: 30px; }\n    .fav.pinterest::before { background: url('https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'); background-size: cover; }\n\n    .favcap {\n      font-size: 10px;\n      color: #7b8492;\n      margin-top: 4px;\n      text-align: center;\n    }\n\n    .privacy {\n      margin: 16px 0 12px;\n      height: 44px;\n      border-radius: 12px;\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 0 14px;\n      font-size: 14px;\n      background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.6));\n      border: 1px solid var(--stroke);\n    }\n\n    .siri {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 12px;\n    }\n\n    .card {\n      border-radius: 12px;\n      background: rgba(255,255,255,.85);\n      border: 1px solid var(--stroke);\n      padding: 10px 12px;\n      font-size: 12px;\n      color: #59606a;\n      box-shadow: 0 8px 20px rgba(0,0,0,.06);\n    }\n\n    .photoswin {\n      position: absolute;\n      left: 96px;\n      top: 86px;\n      width: 1180px;\n      height: 640px;\n      border-radius: var(--win-radius);\n      overflow: hidden;\n      box-shadow: var(--shadow);\n      background: #f7f7f9;\n      display: grid;\n      grid-template-rows: var(--titlebar-h) 1fr;\n      z-index: 5;\n      transition: all .22s ease;\n      will-change: left, top, width, height, transform, opacity, border-radius;\n    }\n\n    .photoswin.minimized {\n      left: 50% !important;\n      top: calc(100% - var(--dock-h) - 34px) !important;\n      transform: translateX(-50%) scale(.2);\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    .photoswin.maximized {\n      left: 24px !important;\n      top: calc(var(--menubar-h) + 10px) !important;\n      width: calc(100% - 48px) !important;\n      height: calc(100% - var(--dock-h) - 64px) !important;\n    }\n\n    .photoswin.closed {\n      opacity: 0;\n      pointer-events: none;\n      transform: scale(.98);\n    }\n\n    .photoswin .titlebar {\n      height: var(--titlebar-h);\n      background: linear-gradient(#f7f7f7,#ececec);\n      border-bottom: 1px solid #dcdcdc;\n      display: grid;\n      grid-template-columns: 220px 1fr 230px;\n      align-items: center;\n      padding: 0 10px;\n      cursor: grab;\n      user-select: none;\n    }\n\n    .photoswin .toolbar-left {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    }\n\n    .photoswin .toolbar-center {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n    }\n\n    .photoswin .seg {\n      display: inline-flex;\n      gap: 8px;\n    }\n\n    .photoswin .seg .tab {\n      padding: 4px 10px;\n      border-radius: 8px;\n      font-size: 12px;\n      border: 1px solid #cfd3da;\n      background: linear-gradient(#fdfdfd,#f2f2f2);\n      color: #3a3f45;\n      cursor: pointer;\n    }\n\n    .photoswin .seg .tab.active {\n      background: #0a84ff;\n      border-color: #0a84ff;\n      color: #fff;\n    }\n\n    .photoswin .body {\n      display: grid;\n      grid-template-columns: 224px 1fr;\n      height: 100%;\n      min-height: 0;\n      background: linear-gradient(180deg, rgba(255,255,255,.8), rgba(255,255,255,.55));\n    }\n\n    .photoswin .sidebar {\n      border-right: 1px solid #e6e6ea;\n      padding: 14px 8px;\n      overflow: auto;\n      background: linear-gradient(180deg,#f7f8fa 0%,#f2f3f6 100%);\n    }\n\n    .photoswin .sidegroup {\n      margin: 8px 0 14px;\n    }\n\n    .photoswin .sidegroup h4 {\n      margin: 10px 8px 6px;\n      font-size: 12px;\n      color: #6c7280;\n      font-weight: 600;\n      letter-spacing: .2px;\n    }\n\n    .photoswin .sidegroup .item {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 6px 10px;\n      border-radius: 8px;\n      font-size: 13px;\n      color: #2e3138;\n      line-height: 1;\n      cursor: default;\n    }\n\n    .photoswin .sidegroup .item.active {\n      background: rgba(10,132,255,.14);\n    }\n\n    .photoswin .sidegroup .item:hover {\n      background: rgba(10,132,255,.08);\n    }\n\n    .photoswin .content {\n      padding: 14px 16px calc(28px + var(--dock-h));\n      overflow: auto;\n      overscroll-behavior: contain;\n      height: 100%;\n      min-height: 0;\n    }\n\n    .day-head {\n      display: flex;\n      align-items: baseline;\n      gap: 12px;\n      margin: 6px 2px 10px;\n    }\n\n    .day-title {\n      font-size: 22px;\n      font-weight: 700;\n      letter-spacing: .2px;\n    }\n\n    .day-sub {\n      color: #6b7380;\n      font-size: 13px;\n    }\n\n    .mosaic {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-auto-rows: 64px;\n      gap: 6px;\n    }\n\n    .tile {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 8px;\n      background: #d9dfe7;\n      cursor: zoom-in;\n    }\n\n    .tile.hero { grid-column: 1 / span 6; grid-row: 1 / span 5; }\n    .tile.tall { grid-column: 7 / span 3; grid-row: 1 / span 4; }\n    .tile.sq.a { grid-column: 10 / span 3; grid-row: 1 / span 2; }\n    .tile.sq.b { grid-column: 10 / span 3; grid-row: 3 / span 2; }\n    .tile.wide { grid-column: 7 / span 6; grid-row: 5 / span 2; }\n    .tile.sq.c { grid-column: 1 / span 3; grid-row: 6 / span 2; }\n    .tile.sq.d { grid-column: 4 / span 3; grid-row: 6 / span 2; }\n    .tile.sq.e { grid-column: 1 / span 2; grid-row: 8 / span 2; }\n    .tile.sq.f { grid-column: 3 / span 2; grid-row: 8 / span 2; }\n    .tile.sq.g { grid-column: 5 / span 2; grid-row: 8 / span 2; }\n    .tile.sq.h { grid-column: 7 / span 3; grid-row: 7 / span 2; }\n    .tile.sq.i { grid-column: 10 / span 3; grid-row: 7 / span 2; }\n\n    .viewer {\n      position: absolute;\n      inset: var(--titlebar-h) 0 0 0;\n      display: none;\n      grid-template-rows: 52px 1fr;\n      background: #1b1f24;\n      color: #e5e7eb;\n      z-index: 30;\n    }\n\n    .viewer.show {\n      display: grid;\n    }\n\n    .viewer .vtop {\n      display: grid;\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding: 8px 12px;\n      background: #2a2f35;\n      border-bottom: 1px solid rgba(255,255,255,.06);\n    }\n\n    .viewer .vleft, .viewer .vright {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .viewer .vright {\n      justify-content: flex-end;\n    }\n\n    .viewer .vcenter {\n      text-align: center;\n      line-height: 1.2;\n    }\n\n    .viewer .vtitle {\n      font-size: 13px;\n      font-weight: 600;\n      letter-spacing: .2px;\n    }\n\n    .viewer .vcount {\n      font-size: 11px;\n      opacity: .75;\n    }\n\n    .viewer .vbtn {\n      min-width: 28px;\n      height: 28px;\n      padding: 0 10px;\n      border-radius: 7px;\n      background: rgba(255,255,255,.08);\n      border: 1px solid rgba(255,255,255,.12);\n      color: #e5e7eb;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n    }\n\n    .viewer .vbtn.primary {\n      background: #0a84ff;\n      border-color: #0a84ff;\n      color: #fff;\n      font-weight: 600;\n    }\n\n    .viewer .vstage {\n      position: relative;\n      background: #0f1216;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n    }\n\n    .viewer-img {\n      max-width: calc(100% - 200px);\n      max-height: calc(100% - 150px);\n      border-radius: 10px;\n      box-shadow: 0 20px 60px rgba(0,0,0,.55);\n      transition: transform .2s ease;\n    }\n\n    .viewer .nav {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 56px;\n      height: 56px;\n      border-radius: 50%;\n      background: rgba(255,255,255,.15);\n      border: 1px solid rgba(255,255,255,.18);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      font-size: 20px;\n      color: white;\n    }\n\n    .viewer .nav:hover {\n      background: rgba(255,255,255,.22);\n    }\n\n    .viewer .nav.prev {\n      left: 26px;\n    }\n\n    .viewer .nav.next {\n      right: 26px;\n    }\n\n    .dock {\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      bottom: 18px;\n      height: var(--dock-h);\n      padding: 14px 18px;\n      display: flex;\n      align-items: end;\n      gap: 14px;\n      border-radius: var(--dock-radius);\n      background: rgba(255,255,255,.28);\n      border: 1px solid rgba(255,255,255,.6);\n      backdrop-filter: saturate(180%) blur(22px);\n      -webkit-backdrop-filter: saturate(180%) blur(22px);\n      box-shadow: 0 20px 50px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.6);\n      z-index: 50;\n    }\n\n    .dock::before {\n      content: \"\";\n      position: absolute;\n      inset: 0;\n      border-radius: inherit;\n      background: linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,0) 55%);\n      pointer-events: none;\n      mix-blend-mode: screen;\n    }\n\n    .dock .divider {\n      width: 1px;\n      height: 60px;\n      background: linear-gradient(180deg, rgba(0,0,0,.15), rgba(255,255,255,.7), rgba(0,0,0,.15));\n      margin: 0 6px;\n    }\n\n    .dock-item {\n      width: 64px;\n      height: 64px;\n      border-radius: 14px;\n      position: relative;\n      transform-origin: bottom center;\n      transition: transform .16s ease;\n      cursor: pointer;\n    }\n\n    .dock-item:hover {\n      transform: scale(1.18) translateY(-4px);\n    }\n\n    .dock-item:active {\n      transform: scale(1.08) translateY(-2px);\n    }\n\n    .dock-item img {\n      display: block;\n      width: 64px;\n      height: 64px;\n      border-radius: 14px;\n    }\n\n    /* Only show these 6 icons (like earlier state) */\n    .dock .dock-item { display: none; }\n    .dock .finder, .dock .safari-ic, .dock .photos, .dock .spotify, .dock .settings, .dock .netflix { display: block; }\n\n    /* Active-app indicator (dot) */\n    .dock .dock-item::after {\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      bottom: -6px;\n      width: 10px;\n      height: 6px;\n      background: rgba(255,255,255,.9);\n      border-radius: 10px;\n      box-shadow: 0 2px 6px rgba(0,0,0,.25);\n      display: none;\n    }\n\n    .dock .dock-item.open::after {\n      display: block;\n    }\n\n    /* Special styling for Spotify icon to ensure visibility */\n    .dock-item.spotify {\n      background: #1db954;\n      border-radius: 14px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .dock-item.spotify .spotify-svg {\n      width: 40px;\n      height: 40px;\n      fill: #ffffff;\n    }\n\n    /* Spotify Window Styling */\n    .spotifywin {\n      position: fixed;\n      top: 60px;\n      left: 100px;\n      width: 1200px;\n      max-width: 96vw;\n      height: 720px;\n      border-radius: 12px;\n      overflow: hidden;\n      background: var(--panel);\n      box-shadow: 0 24px 60px rgba(0,0,0,.55), inset 0 0 0 1px #000;\n      z-index: 1000;\n      --bg: #0b0b0b;\n      --panel: #121212;\n      --panel-2: #181818;\n      --muted: #a7a7a7;\n      --border: #2a2a2a;\n      --green: #1db954;\n      --hover: #222;\n      color: #fff;\n      font: 14px/1.35 \"Inter\",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;\n      letter-spacing: .1px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      transition: all .22s ease;\n      will-change: left, top, width, height, transform, opacity, border-radius;\n    }\n\n    .spotifywin.minimized {\n      transform: scale(0.1);\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    .spotifywin.maximized {\n      left: 24px !important;\n      top: calc(var(--menubar-h) + 10px) !important;\n      width: calc(100% - 48px) !important;\n      height: calc(100% - var(--dock-h) - 64px) !important;\n      border-radius: 12px;\n    }\n\n    .spotifywin .titlebar {\n      height: 44px;\n      background: linear-gradient(180deg,#1b1b1b 0%, #121212 100%);\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 0 12px;\n      border-bottom: 1px solid #000;\n      position: relative;\n    }\n\n    .spotifywin .traffic {\n      display: flex;\n      gap: 8px;\n    }\n\n    .spotifywin .dot {\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      box-shadow: inset 0 0 0 1px rgba(0,0,0,.35);\n      cursor: pointer;\n    }\n\n    .spotifywin .dot.red {\n      background: #ff5f57;\n    }\n\n    .spotifywin .dot.yellow {\n      background: #febc2e;\n    }\n\n    .spotifywin .dot.green {\n      background: #28c840;\n    }\n\n    .spotifywin .app {\n      display: flex;\n      height: calc(100% - 44px);\n    }\n\n    /* Spotify Sidebar */\n    .spotifywin .sidebar {\n      width: 240px;\n      background: var(--panel-2);\n      border-right: 1px solid #0f0f0f;\n      padding: 14px 12px 12px 14px;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n\n    .spotifywin .nav-group {\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n    }\n\n    .spotifywin .heading {\n      font-size: 11px;\n      text-transform: uppercase;\n      letter-spacing: .14em;\n      color: var(--muted);\n      margin: 8px 10px;\n    }\n\n    .spotifywin .nav-item {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 8px 10px;\n      border-radius: 6px;\n      color: #e6e6e6;\n      cursor: default;\n    }\n\n    .spotifywin .nav-item svg {\n      width: 18px;\n      height: 18px;\n      flex: 0 0 18px;\n      opacity: .9;\n    }\n\n    .spotifywin .nav-item.active,\n    .spotifywin .nav-item:hover {\n      background: #232323;\n    }\n\n    .spotifywin .playlist-thumb {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 8px 10px;\n      border-radius: 6px;\n      cursor: default;\n    }\n\n    .spotifywin .thumb {\n      width: 42px;\n      height: 42px;\n      background: #3152ff;\n      border-radius: 2px;\n      display: grid;\n      place-items: center;\n      font-weight: 700;\n    }\n\n    .spotifywin .divider {\n      height: 1px;\n      background: #0f0f0f;\n      margin: 4px 0;\n    }\n\n    /* Spotify Main */\n    .spotifywin .main {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      min-width: 0;\n    }\n\n    .spotifywin .toolbar {\n      display: grid;\n      grid-template-columns: 120px 1fr 520px;\n      align-items: center;\n      gap: 14px;\n      padding: 12px 18px;\n      border-bottom: 1px solid var(--border);\n      background: linear-gradient(180deg,#161616 0%, #121212 100%);\n    }\n\n    .spotifywin .back {\n      display: flex;\n      gap: 8px;\n    }\n\n    .spotifywin .circle-btn {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      background: #0e0e0e;\n      display: grid;\n      place-items: center;\n      border: 1px solid #000;\n      cursor: pointer;\n    }\n\n    .spotifywin .circle-btn svg {\n      width: 16px;\n      height: 16px;\n    }\n\n    .spotifywin .search {\n      background: #222;\n      border: 1px solid #000;\n      height: 30px;\n      border-radius: 999px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      padding: 0 12px;\n      max-width: 460px;\n    }\n\n    .spotifywin .search svg {\n      width: 14px;\n      height: 14px;\n      opacity: .8;\n    }\n\n    .spotifywin .search input {\n      background: transparent;\n      border: 0;\n      outline: 0;\n      color: #fff;\n      width: 100%;\n      font-size: 13px;\n    }\n\n    .spotifywin .profile {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      justify-content: center;\n      gap: 6px;\n      min-width: 0;\n    }\n\n    .spotifywin .user {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      white-space: nowrap;\n      margin-left: 8px;\n    }\n\n    .spotifywin .user .avatar {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      border: 1.6px solid #fff;\n      display: grid;\n      place-items: center;\n    }\n\n    .spotifywin .user .avatar svg {\n      width: 16px;\n      height: 16px;\n    }\n\n    .spotifywin .user .name {\n      max-width: 260px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .spotifywin .user .caret {\n      width: 14px;\n      height: 14px;\n      opacity: .9;\n    }\n\n    .spotifywin .page-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 8px 20px 0;\n    }\n\n    .spotifywin .page-title {\n      font-size: 28px;\n      font-weight: 800;\n      letter-spacing: -.02em;\n      text-transform: uppercase;\n    }\n\n    .spotifywin .page-actions {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n\n    .spotifywin .btn {\n      height: 34px;\n      padding: 0 16px;\n      border-radius: 20px;\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      font-weight: 600;\n      border: 1px solid #2e2e2e;\n      background: #1a1a1a;\n      color: #fff;\n      cursor: pointer;\n      font-size: 14px;\n    }\n\n    .spotifywin .btn.play {\n      background: var(--green);\n      color: #fff;\n      border-color: #1aa34a;\n      padding: 0 22px;\n    }\n\n    .spotifywin .btn.follow {\n      background: transparent;\n      border-color: #fff;\n      color: #fff;\n    }\n\n    .spotifywin .ellipsis {\n      width: 34px;\n      height: 34px;\n      border-radius: 50%;\n      background: transparent;\n      display: grid;\n      place-items: center;\n      border: 1.6px solid #fff;\n      cursor: pointer;\n    }\n\n    .spotifywin .dot-row {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 6px;\n    }\n\n    .spotifywin .dot-row i {\n      width: 3px;\n      height: 3px;\n      background: #fff;\n      display: block;\n      border-radius: 50%;\n    }\n\n    .spotifywin .tabs {\n      display: flex;\n      gap: 24px;\n      padding: 10px 20px 6px;\n      font-weight: 600;\n      font-size: 12.5px;\n      letter-spacing: .08em;\n      text-transform: uppercase;\n      color: #cfcfcf;\n      border-bottom: 1px solid var(--border);\n    }\n\n    .spotifywin .tab {\n      padding-bottom: 8px;\n      border-bottom: 2px solid transparent;\n      cursor: pointer;\n    }\n\n    .spotifywin .tab.active {\n      color: #fff;\n      border-color: #fff;\n    }\n\n    .spotifywin .content {\n      flex: 1;\n      overflow: auto;\n    }\n\n    .spotifywin .section {\n      padding: 18px 20px 10px;\n    }\n\n    .spotifywin .section.albums {\n      background: transparent;\n    }\n\n    .spotifywin .album-row {\n      display: grid;\n      grid-template-columns: 168px 1fr;\n      align-items: center;\n      gap: 22px;\n      margin-bottom: 0;\n    }\n\n    .spotifywin .cover {\n      width: 168px;\n      height: 168px;\n      background: linear-gradient(140deg,#6b0404,#210000 70%);\n      border-radius: 4px;\n      box-shadow: 0 4px 16px rgba(0,0,0,.4);\n    }\n\n    .spotifywin .album-info {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .spotifywin .album-year {\n      font-size: 12px;\n      color: var(--muted);\n      letter-spacing: .08em;\n      margin-bottom: 4px;\n    }\n\n    .spotifywin .album-title {\n      font-size: 36px;\n      font-weight: 800;\n      letter-spacing: -.01em;\n      line-height: 1.1;\n      margin: 0 0 6px;\n    }\n\n    .spotifywin .album-actions {\n      display: flex;\n      gap: 10px;\n      margin-top: 12px;\n      align-items: center;\n    }\n\n    .spotifywin .icon-btn {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: transparent;\n      border: 1.6px solid #fff;\n      color: #fff;\n      cursor: pointer;\n    }\n\n    .spotifywin .icon-btn.love svg {\n      width: 16px;\n      height: 16px;\n      stroke: #fff;\n      fill: none;\n      stroke-width: 1.8;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n    }\n\n    .spotifywin .icon-btn.more svg {\n      width: 16px;\n      height: 16px;\n      display: block;\n    }\n\n    .spotifywin .icon-btn:hover {\n      background: transparent;\n    }\n\n    /* Table */\n    .spotifywin .table {\n      margin-top: 0;\n      border-top: 1px solid var(--border);\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n    }\n\n    .spotifywin .thead,\n    .spotifywin .row {\n      display: grid !important;\n      grid-template-columns: 36px 28px 1fr 84px 44px !important;\n      align-items: center !important;\n      gap: 16px !important;\n      padding: 16px 12px !important;\n      margin: 0 !important;\n      box-sizing: border-box !important;\n    }\n\n    .spotifywin .thead {\n      color: #bdbdbd;\n      font-size: 12px;\n    }\n\n    .spotifywin .row {\n      color: #e9e9e9;\n      border-radius: 4px;\n      cursor: pointer;\n      font-size: 16px;\n      line-height: 1.4;\n      min-height: 56px;\n      margin-bottom: 4px;\n    }\n\n    .spotifywin .row span {\n      font-weight: 500;\n      font-size: 16px;\n      letter-spacing: 0.01em;\n    }\n\n    .spotifywin .row:hover {\n      background: var(--hover);\n    }\n\n    .spotifywin .muted {\n      color: var(--muted);\n      font-size: 15px;\n      font-weight: 400;\n    }\n\n    .spotifywin .like svg {\n      width: 16px;\n      height: 16px;\n      opacity: .9;\n    }\n\n    .spotifywin .clock {\n      opacity: .75;\n    }\n\n    .spotifywin .bars {\n      display: flex;\n      gap: 2px;\n      justify-self: end;\n    }\n\n    .spotifywin .bars span {\n      width: 2px;\n      height: 10px;\n      background: #6b6b6b;\n      border-radius: 1px;\n    }\n\n    .spotifywin .eq {\n      display: inline-grid;\n      grid-auto-flow: column;\n      gap: 2px;\n    }\n\n    .spotifywin .eq span {\n      width: 2px;\n      height: 10px;\n      background: var(--green);\n      border-radius: 1px;\n      animation: eq-animation 1s ease-in-out infinite alternate;\n    }\n\n    .spotifywin .eq span:nth-child(1) {\n      animation-delay: 0s;\n    }\n\n    .spotifywin .eq span:nth-child(2) {\n      animation-delay: 0.1s;\n    }\n\n    .spotifywin .eq span:nth-child(3) {\n      animation-delay: 0.2s;\n    }\n\n    .spotifywin .eq span:nth-child(4) {\n      animation-delay: 0.3s;\n    }\n\n    @keyframes eq-animation {\n      0% {\n        height: 4px;\n      }\n      50% {\n        height: 10px;\n      }\n      100% {\n        height: 6px;\n      }\n    }\n\n    .spotifywin .row.playing {\n      background: var(--hover);\n      color: var(--green);\n    }\n\n    .spotifywin .row.playing .muted {\n      color: var(--green);\n    }\n\n    /* Player */\n    .spotifywin .player {\n      height: 64px;\n      background: var(--panel-2);\n      border-top: 1px solid #0f0f0f;\n      display: grid;\n      grid-template-columns: 280px 1fr 320px;\n      align-items: center;\n      padding: 0 16px;\n      gap: 8px;\n    }\n\n    .spotifywin .player .now {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n    }\n\n    .spotifywin .player .now .thumb {\n      width: 42px;\n      height: 42px;\n      background: linear-gradient(140deg,#6b0404,#210000 70%);\n      border-radius: 2px;\n    }\n\n    .spotifywin .player .title {\n      font-weight: 600;\n    }\n\n    .spotifywin .player .artist {\n      color: var(--muted);\n      font-size: 12px;\n    }\n\n    .spotifywin .player .controls {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 12px;\n    }\n\n    .spotifywin .player .btn-ctl {\n      width: 32px;\n      height: 32px;\n      border-radius: 50%;\n      display: grid;\n      place-items: center;\n      cursor: pointer;\n    }\n\n    .spotifywin .player .play {\n      width: 36px;\n      height: 36px;\n      background: #e6e6e6;\n      color: #000;\n      border-radius: 50%;\n    }\n\n    .spotifywin .player .progress {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin-top: 4px;\n    }\n\n    .spotifywin .player .bar {\n      height: 4px;\n      flex: 1;\n      background: var(--border);\n      border-radius: 999px;\n      overflow: hidden;\n    }\n\n    .spotifywin .player .bar > span {\n      display: block;\n      height: 100%;\n      background: #cfcfcf;\n    }\n\n    .spotifywin .player .right {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      gap: 12px;\n    }\n\n    .spotifywin .player .vol {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      width: 160px;\n    }\n\n    .spotifywin .player .vol .bar {\n      height: 4px;\n    }\n\n    @media (max-width: 1500px) {\n      .screen {\n        transform: scale(.7);\n        transform-origin: center center;\n      }\n    }\n\n    @media (max-width: 1300px) {\n      .screen {\n        transform: scale(.6);\n        transform-origin: center center;\n      }\n    }\n\n    @media (max-width: 1150px) {\n      .screen {\n        transform: scale(.5);\n        transform-origin: center center;\n      }\n    }\n\n    /* Exit Button */\n    .exit-btn {\n      position: fixed;\n      top: 24px;\n      right: 24px;\n      width: 44px;\n      height: 44px;\n      border: none;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.7);\n      color: white;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 9999;\n      transition: all 0.2s ease;\n      backdrop-filter: blur(10px);\n      -webkit-backdrop-filter: blur(10px);\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    }\n\n    .exit-btn:hover {\n      background: rgba(255, 59, 48, 0.8);\n      transform: scale(1.05);\n    }\n\n    .exit-btn:active {\n      transform: scale(0.95);\n    }\n\n    .exit-btn svg {\n      transition: transform 0.2s ease;\n    }\n\n    .exit-btn:hover svg {\n      transform: rotate(90deg);\n    }\n  "
                        }), (0, i.jsx)("div", {
                            style: {
                                width: D.w,
                                height: D.h,
                                position: "relative"
                            },
                            children: (0, i.jsxs)("div", {
                                className: "screen",
                                ref: B,
                                style: {
                                    transform: "scale(".concat(T, ")"),
                                    transformOrigin: "top left",
                                    width: 1440,
                                    height: 900
                                },
                                children: [(0, i.jsxs)("div", {
                                    className: "menubar",
                                    children: [(0, i.jsxs)("div", {
                                        className: "left",
                                        children: [(0, i.jsx)("div", {
                                            className: "apple-logo",
                                            "aria-hidden": "true"
                                        }), (0, i.jsx)("strong", {
                                            children: "safari" === n ? "Safari" : "photos" === n ? "Photos" : "Finder"
                                        }), (0, i.jsx)("span", {
                                            children: "File"
                                        }), (0, i.jsx)("span", {
                                            children: "Edit"
                                        }), (0, i.jsx)("span", {
                                            children: "View"
                                        }), (0, i.jsx)("span", {
                                            children: "Go"
                                        }), (0, i.jsx)("span", {
                                            children: "Window"
                                        }), (0, i.jsx)("span", {
                                            children: "Help"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "right",
                                        children: [(0, i.jsxs)("span", {
                                            className: "clock",
                                            children: [H.toLocaleDateString("en-US", {
                                                weekday: "short"
                                            }), "\xa0", H.toLocaleTimeString("en-US", {
                                                hour: "numeric",
                                                minute: "2-digit",
                                                hour12: !1
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "status-icons",
                                            "aria-label": "Status"
                                        })]
                                    })]
                                }), (0, i.jsxs)("section", {
                                    className: "safari ".concat(S),
                                    "aria-label": "Safari window",
                                    style: {
                                        zIndex: l
                                    },
                                    onMouseDown: () => V("safari"),
                                    children: [(0, i.jsxs)("div", {
                                        className: "titlebar",
                                        children: [(0, i.jsxs)("div", {
                                            className: "toolbar-left",
                                            children: [(0, i.jsxs)("div", {
                                                className: "traffic",
                                                children: [(0, i.jsx)("div", {
                                                    className: "dot close",
                                                    title: "Close",
                                                    onClick: () => Y("close")
                                                }), (0, i.jsx)("div", {
                                                    className: "dot min",
                                                    title: "Minimize",
                                                    onClick: () => Y("minimize")
                                                }), (0, i.jsx)("div", {
                                                    className: "dot zoom",
                                                    title: "Zoom",
                                                    onClick: () => Y("maximize")
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "nav",
                                                children: [(0, i.jsx)("button", {
                                                    className: "navbtn back ".concat("start" === f ? "disabled" : ""),
                                                    "aria-label": "Back",
                                                    title: "Back",
                                                    onClick: () => w("start"),
                                                    children: "⟵"
                                                }), (0, i.jsx)("button", {
                                                    className: "navbtn forward",
                                                    "aria-label": "Forward",
                                                    title: "Forward",
                                                    onClick: () => w("site"),
                                                    children: "⟶"
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "toolbar-center",
                                            children: (0, i.jsxs)("div", {
                                                className: "address",
                                                children: [(0, i.jsx)("span", {
                                                    className: "glass"
                                                }), (0, i.jsx)("span", {
                                                    className: "placeholder",
                                                    children: "Search or enter website name"
                                                })]
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "toolbar-right",
                                            children: [(0, i.jsx)("div", {
                                                className: "toolicon",
                                                title: "Share"
                                            }), (0, i.jsx)("div", {
                                                className: "toolicon",
                                                title: "Tabs"
                                            }), (0, i.jsx)("div", {
                                                className: "toolicon",
                                                title: "New Tab"
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "content",
                                        children: (0, i.jsxs)("div", {
                                            className: "pages",
                                            children: [(0, i.jsx)("div", {
                                                className: "page start ".concat("start" === f ? "active" : ""),
                                                children: (0, i.jsxs)("div", {
                                                    className: "sp",
                                                    children: [(0, i.jsx)("h2", {
                                                        children: "Favorites"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "favorites",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav linear",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "heytml.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav slack",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "slack.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav code",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "javascript.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav sketch",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "sketch.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav figma",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "figma.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav google",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "google.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav dribbble",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "dribbble.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav apple",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "apple.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "favwrap",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "fav pinterest",
                                                                onClick: () => w("site")
                                                            }), (0, i.jsx)("div", {
                                                                className: "favcap",
                                                                children: "pinterest.com"
                                                            })]
                                                        })]
                                                    }), (0, i.jsx)("h2", {
                                                        children: "Privacy Report"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "privacy",
                                                        children: ["\uD83D\uDD12 In the last seven days, Safari has prevented ", (0, i.jsx)("strong", {
                                                            children: "13"
                                                        }), " trackers from profiling you."]
                                                    }), (0, i.jsx)("h2", {
                                                        children: "Siri Suggestions"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "siri",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["Design resources & HIG for Apple platforms.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "developer.apple.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["UI kits and community components for Figma.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "figma.com/community"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["Design inspiration and shots from creators.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "dribbble.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["Vector design tool for macOS & iOS.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "sketch.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["React component library and examples.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "github.com"
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "card",
                                                            children: ["Issue tracking & product roadmaps.", (0, i.jsx)("br", {}), (0, i.jsx)("small", {
                                                                children: "heytml.com"
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "page site ".concat("site" === f ? "active" : ""),
                                                children: (0, i.jsxs)("div", {
                                                    className: "sp",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "card",
                                                        style: {
                                                            height: "180px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: 600,
                                                            fontSize: "18px",
                                                            background: "linear-gradient(135deg,#4b6cb7,#182848)",
                                                            color: "white"
                                                        },
                                                        children: "Example.com — Article Hero"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "card",
                                                        style: {
                                                            height: "auto",
                                                            padding: "16px",
                                                            lineHeight: 1.5
                                                        },
                                                        children: [(0, i.jsx)("strong", {
                                                            children: "Second Page"
                                                        }), (0, i.jsx)("br", {}), "This is a placeholder content to demonstrate the visual of navigating to the next page. Use the Back button to return to Start Page."]
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, i.jsxs)("section", {
                                    className: "photoswin ".concat(E),
                                    "aria-label": "Photos window",
                                    style: {
                                        zIndex: d
                                    },
                                    onMouseDown: () => V("photos"),
                                    children: [(0, i.jsxs)("div", {
                                        className: "titlebar",
                                        children: [(0, i.jsx)("div", {
                                            className: "toolbar-left",
                                            children: (0, i.jsxs)("div", {
                                                className: "traffic",
                                                children: [(0, i.jsx)("div", {
                                                    className: "dot close",
                                                    title: "Close",
                                                    onClick: () => K("close")
                                                }), (0, i.jsx)("div", {
                                                    className: "dot min",
                                                    title: "Minimize",
                                                    onClick: () => K("minimize")
                                                }), (0, i.jsx)("div", {
                                                    className: "dot zoom",
                                                    title: "Zoom",
                                                    onClick: () => K("maximize")
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "toolbar-center",
                                            children: (0, i.jsxs)("div", {
                                                className: "seg",
                                                children: [(0, i.jsx)("button", {
                                                    className: "tab",
                                                    children: "Years"
                                                }), (0, i.jsx)("button", {
                                                    className: "tab",
                                                    children: "Months"
                                                }), (0, i.jsx)("button", {
                                                    className: "tab active",
                                                    children: "Days"
                                                }), (0, i.jsx)("button", {
                                                    className: "tab",
                                                    children: "All Photos"
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "toolbar-right"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "body",
                                        children: [(0, i.jsxs)("aside", {
                                            className: "sidebar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "sidegroup",
                                                children: [(0, i.jsx)("h4", {
                                                    children: "Photos"
                                                }), (0, i.jsxs)("div", {
                                                    className: "item active",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            width: "16px",
                                                            height: "16px",
                                                            stroke: "#0a84ff",
                                                            strokeWidth: "1.8",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        },
                                                        children: [(0, i.jsx)("rect", {
                                                            x: "4",
                                                            y: "6",
                                                            width: "16",
                                                            height: "12",
                                                            rx: "2"
                                                        }), (0, i.jsx)("circle", {
                                                            cx: "9",
                                                            cy: "11",
                                                            r: "2"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M12 16l3-3 5 5"
                                                        })]
                                                    }), "Library"]
                                                }), (0, i.jsxs)("div", {
                                                    className: "item",
                                                    children: [(0, i.jsx)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            width: "16px",
                                                            height: "16px",
                                                            stroke: "#0a84ff",
                                                            strokeWidth: "1.8",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        },
                                                        children: (0, i.jsx)("path", {
                                                            d: "M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6L3.3 9.4l6-.9z"
                                                        })
                                                    }), "Favorites"]
                                                }), (0, i.jsxs)("div", {
                                                    className: "item",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            width: "16px",
                                                            height: "16px",
                                                            stroke: "#0a84ff",
                                                            strokeWidth: "1.8",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        },
                                                        children: [(0, i.jsx)("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "8"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M12 8v5l3 2"
                                                        })]
                                                    }), "Recently Saved"]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "sidegroup",
                                                children: [(0, i.jsx)("h4", {
                                                    children: "Collections"
                                                }), (0, i.jsxs)("div", {
                                                    className: "item",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            width: "16px",
                                                            height: "16px",
                                                            stroke: "#0a84ff",
                                                            strokeWidth: "1.8",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        },
                                                        children: [(0, i.jsx)("rect", {
                                                            x: "3",
                                                            y: "6",
                                                            width: "18",
                                                            height: "14",
                                                            rx: "2"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M3 10h18M8 3v4M16 3v4"
                                                        })]
                                                    }), "Days"]
                                                }), (0, i.jsxs)("div", {
                                                    className: "item",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            width: "16px",
                                                            height: "16px",
                                                            stroke: "#0a84ff",
                                                            strokeWidth: "1.8",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        },
                                                        children: [(0, i.jsx)("path", {
                                                            d: "M7 15c-2.7 0-5 1.3-5 3.5V20h10v-1.5C12 16.3 9.7 15 7 15z"
                                                        }), (0, i.jsx)("circle", {
                                                            cx: "7",
                                                            cy: "9",
                                                            r: "4"
                                                        })]
                                                    }), "People & Pets"]
                                                })]
                                            })]
                                        }), (0, i.jsxs)("main", {
                                            className: "content",
                                            children: [(0, i.jsxs)("header", {
                                                className: "day-head",
                                                children: [(0, i.jsx)("div", {
                                                    className: "day-title",
                                                    children: "Mar 17"
                                                }), (0, i.jsx)("div", {
                                                    className: "day-sub",
                                                    children: "Antelope Valley California Poppy Reserve"
                                                })]
                                            }), (0, i.jsx)("section", {
                                                className: "mosaic",
                                                "aria-label": "Day grid",
                                                children: W.map((e, t) => (0, i.jsx)("img", {
                                                    className: ["tile hero", "tile tall", "tile sq a", "tile sq b", "tile wide", "tile sq c", "tile sq d", "tile sq e", "tile sq f", "tile sq g", "tile sq h", "tile sq i"][t] || "tile",
                                                    src: e,
                                                    alt: "",
                                                    onClick: () => {
                                                        k(t), v("viewer")
                                                    }
                                                }, t))
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "viewer ".concat("viewer" === y ? "show" : ""),
                                        role: "dialog",
                                        "aria-modal": "true",
                                        children: [(0, i.jsxs)("div", {
                                            className: "vtop",
                                            children: [(0, i.jsxs)("div", {
                                                className: "vleft",
                                                children: [(0, i.jsx)("button", {
                                                    className: "vbtn vback",
                                                    title: "Back",
                                                    onClick: () => v("library"),
                                                    children: "⟵"
                                                }), (0, i.jsx)("button", {
                                                    className: "vbtn vzoom-out",
                                                    title: "Zoom Out",
                                                    onClick: () => M(Math.max(1, j - .25)),
                                                    children: "−"
                                                }), (0, i.jsx)("button", {
                                                    className: "vbtn vzoom-in",
                                                    title: "Zoom In",
                                                    onClick: () => M(Math.min(3, j + .25)),
                                                    children: "+"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "vcenter",
                                                children: [(0, i.jsx)("div", {
                                                    className: "vtitle",
                                                    children: "16 August 2025 at 20.16.28"
                                                }), (0, i.jsxs)("div", {
                                                    className: "vcount",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "vindex",
                                                        children: b + 1
                                                    }), " of ", (0, i.jsx)("span", {
                                                        className: "vtotal",
                                                        children: W.length
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "vright",
                                                children: [(0, i.jsx)("button", {
                                                    className: "vbtn",
                                                    title: "Share",
                                                    children: "⇪"
                                                }), (0, i.jsx)("button", {
                                                    className: "vbtn",
                                                    title: "Favorite",
                                                    children: "♥"
                                                }), (0, i.jsx)("button", {
                                                    className: "vbtn",
                                                    title: "Info",
                                                    children: "i"
                                                }), (0, i.jsx)("button", {
                                                    className: "vbtn primary",
                                                    title: "Edit",
                                                    children: "Edit"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "vstage",
                                            children: [(0, i.jsx)("button", {
                                                className: "nav prev",
                                                "aria-label": "Previous",
                                                onClick: () => k(e => (e - 1 + W.length) % W.length),
                                                children: "‹"
                                            }), (0, i.jsx)("img", {
                                                className: "viewer-img",
                                                src: W[b],
                                                alt: "Photo preview",
                                                style: {
                                                    transform: "scale(".concat(j, ")")
                                                }
                                            }), (0, i.jsx)("button", {
                                                className: "nav next",
                                                "aria-label": "Next",
                                                onClick: () => k(e => (e + 1) % W.length),
                                                children: "›"
                                            })]
                                        })]
                                    })]
                                }), "closed" !== N && (0, i.jsxs)("section", {
                                    className: "spotifywin ".concat(N),
                                    "aria-label": "Spotify window",
                                    style: {
                                        zIndex: p
                                    },
                                    onMouseDown: () => V("spotify"),
                                    children: [(0, i.jsx)("div", {
                                        className: "titlebar",
                                        children: (0, i.jsxs)("div", {
                                            className: "traffic",
                                            children: [(0, i.jsx)("div", {
                                                className: "dot red",
                                                onClick: () => {
                                                    L("closed")
                                                }
                                            }), (0, i.jsx)("div", {
                                                className: "dot yellow",
                                                onClick: () => {
                                                    L("minimized")
                                                }
                                            }), (0, i.jsx)("div", {
                                                className: "dot green",
                                                onClick: () => {
                                                    L(e => {
                                                        let t = "maximized" === e ? "normal" : "maximized";
                                                        return x.current = t, t
                                                    })
                                                }
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "app",
                                        children: [(0, i.jsxs)("aside", {
                                            className: "sidebar",
                                            children: [(0, i.jsxs)("div", {
                                                className: "nav-group",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "nav-item active",
                                                    children: [(0, i.jsx)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.7",
                                                        children: (0, i.jsx)("path", {
                                                            d: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z"
                                                        })
                                                    }), (0, i.jsx)("span", {
                                                        children: "Home"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "nav-item",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.7",
                                                        children: [(0, i.jsx)("circle", {
                                                            cx: "11",
                                                            cy: "11",
                                                            r: "7"
                                                        }), (0, i.jsx)("path", {
                                                            d: "m20 20-3.6-3.6"
                                                        })]
                                                    }), (0, i.jsx)("span", {
                                                        children: "Browse"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "nav-item",
                                                    children: [(0, i.jsx)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.7",
                                                        children: (0, i.jsx)("path", {
                                                            d: "M4 7v10l8-5 8 5V7L12 12 4 7Z"
                                                        })
                                                    }), (0, i.jsx)("span", {
                                                        children: "Radio"
                                                    })]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "divider"
                                            }), (0, i.jsx)("div", {
                                                className: "heading",
                                                children: "Your Library"
                                            }), (0, i.jsxs)("div", {
                                                className: "nav-group",
                                                children: [(0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Made For You"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Recently Played"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Liked Songs"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Albums"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Artists"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "nav-item",
                                                    children: (0, i.jsx)("span", {
                                                        children: "Podcasts"
                                                    })
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "divider"
                                            }), (0, i.jsx)("div", {
                                                className: "nav-item",
                                                children: (0, i.jsx)("span", {
                                                    children: "＋ New Playlist"
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "playlist-thumb",
                                                children: [(0, i.jsx)("div", {
                                                    className: "thumb",
                                                    children: "Z"
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)("div", {
                                                        className: "title",
                                                        style: {
                                                            fontWeight: 700
                                                        },
                                                        children: z ? z.title : "Select a song"
                                                    }), (0, i.jsx)("div", {
                                                        className: "artist",
                                                        children: z ? z.artist : "No artist"
                                                    })]
                                                })]
                                            })]
                                        }), (0, i.jsxs)("main", {
                                            className: "main",
                                            children: [(0, i.jsxs)("div", {
                                                className: "toolbar",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "back",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "circle-btn",
                                                        children: (0, i.jsx)("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: (0, i.jsx)("path", {
                                                                d: "m15 18-6-6 6-6"
                                                            })
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "circle-btn",
                                                        children: (0, i.jsx)("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: (0, i.jsx)("path", {
                                                                d: "m9 6 6 6-6 6"
                                                            })
                                                        })
                                                    })]
                                                }), (0, i.jsxs)("label", {
                                                    className: "search",
                                                    children: [(0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.8",
                                                        children: [(0, i.jsx)("circle", {
                                                            cx: "11",
                                                            cy: "11",
                                                            r: "7"
                                                        }), (0, i.jsx)("path", {
                                                            d: "m21 21-4.3-4.3"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        placeholder: "Search"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "profile",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "user",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "avatar",
                                                            "aria-hidden": "true",
                                                            children: (0, i.jsxs)("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                children: [(0, i.jsx)("circle", {
                                                                    cx: "12",
                                                                    cy: "8",
                                                                    r: "3.2"
                                                                }), (0, i.jsx)("path", {
                                                                    d: "M5 19a7 7 0 0 1 14 0"
                                                                })]
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            className: "name",
                                                            children: "User HeyTML"
                                                        }), (0, i.jsx)("svg", {
                                                            className: "caret",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: (0, i.jsx)("path", {
                                                                d: "m6 9 6 6 6-6"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "page-header",
                                                children: [(0, i.jsx)("div", {
                                                    className: "page-title",
                                                    children: "MY PLAYLIST"
                                                }), (0, i.jsxs)("div", {
                                                    className: "page-actions",
                                                    children: [(0, i.jsx)("button", {
                                                        className: "btn play",
                                                        onClick: () => {
                                                            var e;
                                                            let t = window.__spotifyPlayer__,
                                                                n = _.current || (null == t ? void 0 : t.audio) || null;
                                                            if (n) {
                                                                if (!((null == t ? void 0 : t.currentSong) || z)) return void U(q[0]);
                                                                (null != (e = null == t ? void 0 : t.isPlaying) ? e : R) ? n.pause(): n.play().catch(e => console.error("❌ Audio resume error:", e))
                                                            }
                                                        },
                                                        children: R ? "PAUSE" : "PLAY"
                                                    }), (0, i.jsx)("button", {
                                                        className: "btn follow",
                                                        children: "FOLLOW"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ellipsis",
                                                        title: "More",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "dot-row",
                                                            children: [(0, i.jsx)("i", {}), (0, i.jsx)("i", {}), (0, i.jsx)("i", {})]
                                                        })
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "tabs",
                                                children: [(0, i.jsx)("div", {
                                                    className: "tab active",
                                                    children: "Overview"
                                                }), (0, i.jsx)("div", {
                                                    className: "tab",
                                                    children: "Fans Also Like"
                                                }), (0, i.jsx)("div", {
                                                    className: "tab",
                                                    children: "About"
                                                }), (0, i.jsx)("div", {
                                                    className: "tab",
                                                    children: "Concerts"
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "content",
                                                children: (0, i.jsxs)("div", {
                                                    className: "section albums",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "album-row",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "cover",
                                                            "aria-hidden": "true"
                                                        }), (0, i.jsxs)("div", {
                                                            className: "album-info",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "album-year",
                                                                children: "2025"
                                                            }), (0, i.jsx)("div", {
                                                                className: "album-title",
                                                                children: "Our Memories"
                                                            }), (0, i.jsxs)("div", {
                                                                className: "album-actions",
                                                                children: [(0, i.jsx)("button", {
                                                                    className: "icon-btn love",
                                                                    "aria-label": "Like",
                                                                    children: (0, i.jsx)("svg", {
                                                                        viewBox: "0 0 24 24",
                                                                        children: (0, i.jsx)("path", {
                                                                            d: "M12 20.5s-7.5-4.8-7.5-10.3A4.9 4.9 0 0 1 12 5.8a4.9 4.9 0 0 1 7.5 4.4C19.5 15.7 12 20.5 12 20.5Z"
                                                                        })
                                                                    })
                                                                }), (0, i.jsx)("button", {
                                                                    className: "icon-btn more",
                                                                    "aria-label": "More",
                                                                    children: (0, i.jsxs)("svg", {
                                                                        viewBox: "0 0 16 16",
                                                                        "aria-hidden": "true",
                                                                        children: [(0, i.jsx)("circle", {
                                                                            cx: "4",
                                                                            cy: "8",
                                                                            r: "1.6",
                                                                            fill: "#fff"
                                                                        }), (0, i.jsx)("circle", {
                                                                            cx: "8",
                                                                            cy: "8",
                                                                            r: "1.6",
                                                                            fill: "#fff"
                                                                        }), (0, i.jsx)("circle", {
                                                                            cx: "12",
                                                                            cy: "8",
                                                                            r: "1.6",
                                                                            fill: "#fff"
                                                                        })]
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "table",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "thead",
                                                            children: [(0, i.jsx)("div", {
                                                                children: "#"
                                                            }), (0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                                                children: "Title"
                                                            }), (0, i.jsx)("div", {
                                                                className: "clock",
                                                                children: (0, i.jsxs)("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.8",
                                                                    children: [(0, i.jsx)("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "9"
                                                                    }), (0, i.jsx)("path", {
                                                                        d: "M12 7v6l3 2"
                                                                    })]
                                                                })
                                                            }), (0, i.jsx)("div", {})]
                                                        }), q.map(e => (0, i.jsxs)("div", {
                                                            className: "row ".concat((null == z ? void 0 : z.id) === e.id && R ? "playing" : ""),
                                                            onClick: () => U(e),
                                                            children: [(0, i.jsx)("div", {
                                                                className: "muted",
                                                                children: e.id
                                                            }), (0, i.jsx)("div", {
                                                                className: "like",
                                                                children: (0, i.jsx)("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.8",
                                                                    children: (0, i.jsx)("path", {
                                                                        d: "M12 21s-7-4.4-7-10.1A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.9C19 16.6 12 21 12 21Z"
                                                                    })
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                children: (0, i.jsx)("span", {
                                                                    children: e.title
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "muted",
                                                                children: e.duration
                                                            }), (0, i.jsx)("div", {
                                                                className: "bars",
                                                                children: (null == z ? void 0 : z.id) === e.id && R ? (0, i.jsxs)("div", {
                                                                    className: "eq",
                                                                    children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                                                                }) : (0, i.jsxs)("div", {
                                                                    style: {
                                                                        opacity: .5
                                                                    },
                                                                    children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                                                                })
                                                            })]
                                                        }, e.id))]
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "player",
                                        style: {
                                            display: z ? "grid" : "none"
                                        },
                                        children: [(0, i.jsxs)("div", {
                                            className: "now",
                                            children: [(0, i.jsx)("div", {
                                                className: "thumb"
                                            }), (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("div", {
                                                    className: "title",
                                                    children: z ? z.title : "No song selected"
                                                }), (0, i.jsx)("div", {
                                                    className: "artist",
                                                    children: z ? z.artist : "Select a song to play"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            children: [(0, i.jsxs)("div", {
                                                className: "controls",
                                                children: [(0, i.jsx)("div", {
                                                    className: "btn-ctl",
                                                    children: (0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "20",
                                                        height: "20",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [(0, i.jsx)("path", {
                                                            d: "M4 4l7 8-7 8"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M13 4l7 8-7 8"
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "btn-ctl",
                                                    children: (0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [(0, i.jsx)("path", {
                                                            d: "M5 12h14"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M12 5l-7 7 7 7"
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "play btn-ctl",
                                                    onClick: () => {
                                                        let e = window.__spotifyPlayer__,
                                                            t = _.current || (null == e ? void 0 : e.audio) || null;
                                                        if (t)
                                                            if (z || (null == e ? void 0 : e.currentSong)) {
                                                                var n;
                                                                (null != (n = null == e ? void 0 : e.isPlaying) ? n : R) ? t.pause(): t.play().catch(e => console.error("❌ Audio resume error:", e))
                                                            } else U(q[0])
                                                    },
                                                    children: (0, i.jsx)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "currentColor",
                                                        children: R ? (0, i.jsx)("path", {
                                                            d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                                                        }) : (0, i.jsx)("path", {
                                                            d: "M8 5v14l11-7z"
                                                        })
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "btn-ctl",
                                                    children: (0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [(0, i.jsx)("path", {
                                                            d: "M19 12H5"
                                                        }), (0, i.jsx)("path", {
                                                            d: "m12 19 7-7-7-7"
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "btn-ctl",
                                                    children: (0, i.jsxs)("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "20",
                                                        height: "20",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [(0, i.jsx)("path", {
                                                            d: "M20 20l-7-8 7-8"
                                                        }), (0, i.jsx)("path", {
                                                            d: "M11 20 4 12l7-8"
                                                        })]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "progress",
                                                children: [(0, i.jsx)("span", {
                                                    className: "muted",
                                                    style: {
                                                        fontSize: "12px"
                                                    },
                                                    children: "0:00"
                                                }), (0, i.jsx)("div", {
                                                    className: "bar",
                                                    children: (0, i.jsx)("span", {
                                                        style: {
                                                            width: "32%"
                                                        }
                                                    })
                                                }), (0, i.jsx)("span", {
                                                    className: "muted",
                                                    style: {
                                                        fontSize: "12px"
                                                    },
                                                    children: "2:07"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "right",
                                            children: [(0, i.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "18",
                                                height: "18",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                children: (0, i.jsx)("path", {
                                                    d: "M9 18V6l8 6-8 6z"
                                                })
                                            }), (0, i.jsxs)("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "18",
                                                height: "18",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                children: [(0, i.jsx)("path", {
                                                    d: "M4 10v4"
                                                }), (0, i.jsx)("path", {
                                                    d: "M8 6v12"
                                                }), (0, i.jsx)("path", {
                                                    d: "M12 14v4"
                                                }), (0, i.jsx)("path", {
                                                    d: "M16 4v14"
                                                }), (0, i.jsx)("path", {
                                                    d: "M20 8v10"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "vol",
                                                children: [(0, i.jsxs)("svg", {
                                                    viewBox: "0 0 24 24",
                                                    width: "18",
                                                    height: "18",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.8",
                                                    children: [(0, i.jsx)("path", {
                                                        d: "M11 5 6 9H3v6h3l5 4V5z"
                                                    }), (0, i.jsx)("path", {
                                                        d: "M15.54 8.46a5 5 0 0 1 0 7.07"
                                                    }), (0, i.jsx)("path", {
                                                        d: "M19.07 5a9 9 0 0 1 0 14"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "bar",
                                                    children: (0, i.jsx)("span", {
                                                        style: {
                                                            width: "60%"
                                                        }
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsxs)("footer", {
                                    className: "dock",
                                    "aria-label": "Dock",
                                    children: [(0, i.jsx)("div", {
                                        className: "dock-item finder ".concat("finder" === n ? "open" : ""),
                                        onClick: () => o("finder"),
                                        children: (0, i.jsx)("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png",
                                            alt: "Finder",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "dock-item safari-ic ".concat("closed" !== S ? "open" : ""),
                                        onClick: () => J("safari"),
                                        children: (0, i.jsx)("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Safari_2020_logo.svg",
                                            alt: "Safari",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "dock-item photos ".concat("closed" !== E ? "open" : ""),
                                        onClick: () => J("photos"),
                                        children: (0, i.jsx)("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Foto_%28iOS%29.png",
                                            alt: "Photos",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "dock-item spotify ".concat("closed" !== N ? "open" : ""),
                                        onClick: () => {
                                            L(e => "closed" === e || "minimized" === e ? x.current || "normal" : e), V("spotify")
                                        },
                                        children: (0, i.jsx)("svg", {
                                            className: "spotify-svg",
                                            viewBox: "0 0 496 512",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, i.jsx)("path", {
                                                d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "dock-item settings",
                                        children: (0, i.jsx)("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Settings_%28iOS%29.png?20200720144621",
                                            alt: "Settings",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "divider",
                                        "aria-hidden": "true"
                                    }), (0, i.jsx)("div", {
                                        className: "dock-item netflix",
                                        children: (0, i.jsx)("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
                                            alt: "Netflix",
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("button", {
                            className: "exit-btn",
                            onClick: () => {
                                t()
                            },
                            title: "Exit macOS Desktop",
                            "aria-label": "Exit macOS Desktop",
                            children: (0, i.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, i.jsx)("path", {
                                    d: "M18 6L6 18M6 6l12 12"
                                })
                            })
                        })]
                    })
                },
                E = e => {
                    var t, n, o, r, s;
                    let {
                        isOpen: l,
                        onClose: c,
                        content: d,
                        options: h
                    } = e, p = null != (t = null == h ? void 0 : h.paragraphFontSizeMm) ? t : 6, u = null != (n = null == h ? void 0 : h.titleFontSizeMm) ? n : 8.2, m = null != (o = null == h ? void 0 : h.subtitleFontSizeMm) ? o : 5.6, g = null != (r = null == h ? void 0 : h.animationStepSec) ? r : .07, x = null != (s = null == h ? void 0 : h.overlayOpacity) ? s : .82, [f, w] = (0, a.useState)(!1), y = (0, a.useRef)(null), v = (0, a.useRef)(null), [b, k] = (0, a.useState)(.98);
                    (0, a.useEffect)(() => () => {
                        y.current && window.clearTimeout(y.current)
                    }, []), (0, a.useEffect)(() => {
                        if (!l) return;
                        let e = () => {
                            try {
                                let e = v.current;
                                if (!e) return;
                                let t = e.style.transform;
                                e.style.transform = "scale(1)";
                                let n = e.getBoundingClientRect(),
                                    i = window.innerWidth,
                                    a = window.innerHeight,
                                    o = Math.max(16, Math.round(.06 * i)),
                                    r = Math.max(16, Math.round(.08 * a)),
                                    s = Math.min((i - 2 * o) / n.width, (a - 2 * r) / n.height);
                                s = Math.min(.98, Math.max(.5, s)), k(s), e.style.transform = t
                            } catch (e) {}
                        };
                        return requestAnimationFrame(e), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                        }
                    }, [l]);
                    let j = () => {
                        document.querySelectorAll(".typer").forEach(e => {
                            let t = e.getAttribute("data-original") || e.textContent || "";
                            e.setAttribute("data-original", t), e.innerHTML = "", e.textContent = t
                        }), w(!1), y.current && (window.clearTimeout(y.current), y.current = null)
                    };
                    return ((0, a.useEffect)(() => {
                        if (!l) return;
                        let e = {
                                ".": 6,
                                ",": 3,
                                "!": 6,
                                "?": 6,
                                "—": 6,
                                "-": 2,
                                ":": 3,
                                ";": 3
                            },
                            t = Array.from(document.querySelectorAll('[data-page="left"] .typer')),
                            n = Array.from(document.querySelectorAll('[data-page="right"] .typer')),
                            i = t => {
                                let n = 0;
                                return t.forEach(t => {
                                    let i = t.getAttribute("data-original") || t.textContent || "";
                                    t.setAttribute("data-original", i), t.innerHTML = "";
                                    let a = (e => {
                                        try {
                                            let t = window.Intl;
                                            if (t && t.Segmenter) {
                                                let n = new t.Segmenter("id", {
                                                    granularity: "grapheme"
                                                });
                                                return Array.from(n.segment(e), e => e.segment)
                                            }
                                        } catch (e) {}
                                        return Array.from(e)
                                    })(i);
                                    for (let i = 0; i < a.length; i++) {
                                        let o = a[i],
                                            r = document.createElement("span");
                                        r.className = "char", r.textContent = o;
                                        let s = n + .02 * Math.random();
                                        r.style.animation = "writeChar 0.16s forwards", r.style.animationDelay = s + "s", t.appendChild(r), n += g, e[o] && (n += g * e[o])
                                    }
                                    n += 4 * g
                                }), n
                            },
                            a = Math.max(i(t), i(n));
                        return w(!0), y.current && window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                            try {
                                j()
                            } catch (e) {}
                        }, (a + .35) * 1e3), () => {
                            y.current && window.clearTimeout(y.current)
                        }
                    }, [l, g]), l) ? (0, i.jsxs)("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(145deg, rgba(12,18,28,".concat(x, ") 0%, rgba(18,24,36,").concat(x, ") 100%)"),
                            backdropFilter: "blur(6px)",
                            zIndex: 2e3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"'
                        },
                        onClick: e => {
                            e.target === e.currentTarget && c()
                        },
                        children: [(0, i.jsx)("style", {
                            children: "\n				@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&family=Shadows+Into+Light&display=swap');\n				.handwritten { font-family: 'Caveat','Patrick Hand','Shadows Into Light', cursive; }\n				.typer { white-space: pre-wrap; }\n				.typer .char { opacity: 0; display: inline-block; transform: translateY(1mm) rotate(-0.2deg) scale(0.98); will-change: transform, opacity; }\n				@keyframes writeChar { to { opacity: 1; transform: none; } }\n			"
                        }), (0, i.jsx)("button", {
                            onClick: c,
                            title: "Exit Book",
                            "aria-label": "Exit Book",
                            style: {
                                position: "fixed",
                                top: 24,
                                right: 24,
                                width: 44,
                                height: 44,
                                borderRadius: 22,
                                border: "none",
                                background: "rgba(0,0,0,0.7)",
                                color: "#fff",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                transition: "all .2s ease",
                                zIndex: 2100
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.background = "rgba(255,59,48,0.8)", e.currentTarget.style.transform = "scale(1.05)"
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.background = "rgba(0,0,0,0.7)", e.currentTarget.style.transform = "scale(1)"
                            },
                            children: (0, i.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, i.jsx)("path", {
                                    d: "M18 6L6 18M6 6l12 12"
                                })
                            })
                        }), f && (0, i.jsx)("button", {
                            onClick: j,
                            title: "Skip typing",
                            "aria-label": "Skip typing",
                            style: {
                                position: "fixed",
                                top: 24,
                                right: 80,
                                height: 36,
                                padding: "0 14px",
                                borderRadius: 18,
                                border: "1px solid rgba(255,255,255,0.28)",
                                background: "rgba(255,255,255,0.14)",
                                color: "#eaeaea",
                                fontWeight: 600,
                                letterSpacing: .2,
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                transition: "all .2s ease",
                                zIndex: 2100
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.22)", e.currentTarget.style.transform = "translateY(-1px)"
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.14)", e.currentTarget.style.transform = "translateY(0)"
                            },
                            children: "Skip"
                        }), (0, i.jsxs)("div", {
                            ref: v,
                            style: {
                                position: "relative",
                                width: "260mm",
                                height: "190mm",
                                background: "transparent",
                                borderRadius: "5mm",
                                display: "grid",
                                gridTemplateColumns: "1fr 9mm 1fr",
                                transformStyle: "preserve-3d",
                                perspective: "1500px",
                                transform: "scale(".concat(b, ")"),
                                transformOrigin: "center center"
                            },
                            children: [(0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: "calc(50% - 4.5mm)",
                                    background: "linear-gradient(180deg, #fcfcfb, #f7f7f5)",
                                    boxShadow: "0 14px 35px rgba(0,0,0,0.16), 0 5px 15px rgba(0,0,0,0.10)",
                                    borderRadius: "5mm",
                                    border: "1px solid #e5e7eb",
                                    zIndex: 0,
                                    transformOrigin: "right center"
                                }
                            }), (0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    width: "calc(50% - 4.5mm)",
                                    background: "linear-gradient(180deg, #fcfcfb, #f7f7f5)",
                                    boxShadow: "0 14px 35px rgba(0,0,0,0.16), 0 5px 15px rgba(0,0,0,0.10)",
                                    borderRadius: "5mm",
                                    border: "1px solid #e5e7eb",
                                    zIndex: 0,
                                    transformOrigin: "left center"
                                }
                            }), (0, i.jsxs)("div", {
                                "data-page": "left",
                                style: {
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "#ffffff",
                                    backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 calc(6mm - 0.25mm), rgba(0,0,0,0.08) calc(6mm - 0.25mm) 6mm)",
                                    backgroundSize: "100% 6mm",
                                    backgroundPosition: "0 14mm",
                                    zIndex: 3,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.18), 0 5px 15px rgba(0,0,0,0.10)",
                                    transform: "rotateY(6deg)",
                                    transformOrigin: "right center"
                                },
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        width: "7mm",
                                        background: "repeating-linear-gradient(to bottom, #e9e9e9 0 0.9mm, #f6f6f6 0.9mm 1.8mm)",
                                        opacity: .65,
                                        borderRight: "1px solid #e5e5e5",
                                        zIndex: 1
                                    }
                                }), (0, i.jsxs)("div", {
                                    style: {
                                        position: "absolute",
                                        inset: "14mm",
                                        color: "#1f2937",
                                        lineHeight: "6.6mm",
                                        fontSize: "".concat(p, "mm"),
                                        letterSpacing: "0.12mm",
                                        transform: "rotate(-0.2deg)"
                                    },
                                    className: "handwritten",
                                    children: [(0, i.jsx)("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: "".concat(u, "mm"),
                                            margin: "0 0 calc(6mm/2) 0"
                                        },
                                        className: "typer",
                                        children: d.left.title
                                    }), d.left.subtitle && (0, i.jsx)("div", {
                                        style: {
                                            fontSize: "".concat(m, "mm"),
                                            color: "#374151",
                                            margin: "0 0 6mm 0"
                                        },
                                        className: "typer",
                                        children: d.left.subtitle
                                    }), d.left.paragraphs.map((e, t) => (0, i.jsx)("p", {
                                        className: "typer",
                                        children: e
                                    }, t))]
                                })]
                            }), (0, i.jsx)("div", {
                                style: {
                                    gridColumn: 2,
                                    position: "relative",
                                    background: "linear-gradient(90deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 18%, rgba(255,255,255,0.0) 50%, rgba(0,0,0,0.06) 82%, rgba(0,0,0,0.22) 100%)",
                                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.25)",
                                    borderLeft: "1px solid #e6e6e6",
                                    borderRight: "1px solid #e6e6e6",
                                    zIndex: 2
                                },
                                children: (0, i.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        left: "50%",
                                        top: 0,
                                        bottom: 0,
                                        width: "2px",
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.05))",
                                        transform: "translateX(-50%)"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                "data-page": "right",
                                style: {
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "#ffffff",
                                    backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 calc(6mm - 0.25mm), rgba(0,0,0,0.08) calc(6mm - 0.25mm) 6mm)",
                                    backgroundSize: "100% 6mm",
                                    backgroundPosition: "0 14mm",
                                    zIndex: 3,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.18), 0 5px 15px rgba(0,0,0,0.10)",
                                    transform: "rotateY(-6deg)",
                                    transformOrigin: "left center"
                                },
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        bottom: 0,
                                        right: 0,
                                        width: "7mm",
                                        background: "repeating-linear-gradient(to bottom, #e9e9e9 0 0.9mm, #f6f6f6 0.9mm 1.8mm)",
                                        opacity: .65,
                                        borderLeft: "1px solid #e5e5e5",
                                        zIndex: 1
                                    }
                                }), (0, i.jsxs)("div", {
                                    style: {
                                        position: "absolute",
                                        inset: "14mm",
                                        color: "#1f2937",
                                        lineHeight: "6.6mm",
                                        fontSize: "".concat(p, "mm"),
                                        letterSpacing: "0.12mm",
                                        transform: "rotate(-0.2deg)"
                                    },
                                    className: "handwritten",
                                    children: [(0, i.jsx)("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: "".concat(u, "mm"),
                                            margin: "0 0 calc(6mm/2) 0"
                                        },
                                        className: "typer",
                                        children: d.right.title
                                    }), (0, i.jsx)("ul", {
                                        style: {
                                            listStyle: "none",
                                            margin: "0 0 6mm 0",
                                            padding: 0
                                        },
                                        children: d.right.checklist.map((e, t) => (0, i.jsxs)("li", {
                                            className: "typer",
                                            style: {
                                                margin: 0
                                            },
                                            children: ["☐ ", e]
                                        }, t))
                                    }), d.right.notesLabel && (0, i.jsx)("p", {
                                        className: "typer",
                                        children: d.right.notesLabel
                                    })]
                                })]
                            })]
                        })]
                    }) : null
                },
                P = {
                    left: {
                        title: "Happy Birthday, sayang ✨",
                        subtitle: "17 Agustus 2025",
                        paragraphs: ["happy level‑up day! semoga tahun ini kamu makin sehat, makin hepi, makin cuan, dan semua goal kejar‑kejar \uD83D\uDCAB", "makasih udah jadi partner paling sabar, lucu, dan ngertiin. i'm so proud of you — let's grow bareng, no skip‑skip ✨", "doa aku: hari‑hari kamu ringan, ketemu orang baik, rezeki lancar, dan kita makin kompak (iyalah \uD83D\uDE1D)", "ps: wishlist tahun ini — short trip bareng, masak menu favorit, dan maraton film sampai ketiduran \uD83D\uDE34\uD83C\uDFAC"]
                    },
                    right: {
                        title: "Rencana Bareng Kita \uD83D\uDC96",
                        checklist: ["Brunch di cafe baru (OOTD wajib)", "Jalan sore + foto polaroid (target 10 foto)", "Dinner simple + dessert cake kecil \uD83C\uDF82", "Movie night / karaoke — pilih mood nanti", "Quality time: HP off 2 jam, fokus kita", "Plan trip: tentuin tanggal & budget"],
                        notesLabel: "ide random yang muncul: __________________________"
                    }
                },
                N = e => {
                    let {
                        onControlsChange: t,
                        isVisible: n
                    } = e, [o, r] = (0, a.useState)({
                        x: 0,
                        y: 0
                    }), [s, l] = (0, a.useState)(!1), [c, d] = (0, a.useState)(!1), h = (0, a.useRef)(null), p = (0, a.useRef)(null), u = (0, a.useRef)(!1);
                    (0, a.useRef)(!1);
                    let m = (0, a.useRef)({
                            x: 0,
                            y: 0
                        }),
                        g = (0, a.useRef)(null),
                        x = (0, a.useRef)(null),
                        f = (0, a.useRef)(null),
                        w = (0, a.useRef)(null),
                        y = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        let e = () => {
                            try {
                                let e = navigator.userAgent || "",
                                    t = /iPhone/i.test(e),
                                    n = window.devicePixelRatio || 1,
                                    i = Math.round(screen.width * n),
                                    a = Math.round(screen.height * n),
                                    o = (e, t, n) => Math.abs(e - t) <= n,
                                    r = o(i, 1170, 30) && o(a, 2532, 60) || o(i, 2532, 60) && o(a, 1170, 30);
                                d(t && n >= 2.9 && n <= 3.1 && r)
                            } catch (e) {}
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                        }
                    }, []);
                    let v = c ? .02 : .015,
                        b = (0, a.useRef)({
                            x: 0,
                            y: 0
                        }),
                        k = (0, a.useRef)({
                            x: 0,
                            y: 0
                        }),
                        j = (0, a.useRef)(null),
                        M = (0, a.useRef)({
                            x: 0,
                            y: 0
                        }),
                        S = (0, a.useRef)(!1);
                    (0, a.useEffect)(() => {
                        M.current = o
                    }, [o]), (0, a.useEffect)(() => {
                        S.current = s
                    }, [s]);
                    let C = (0, a.useCallback)(e => {
                            e.preventDefault();
                            let t = e.changedTouches[0] || e.touches[0];
                            f.current = t.identifier, x.current = {
                                x: t.clientX,
                                y: t.clientY
                            }, k.current = {
                                x: 0,
                                y: 0
                            }, w.current = {
                                x: t.clientX,
                                y: t.clientY,
                                t: Date.now()
                            }, y.current = window.setTimeout(() => {
                                if (console.log("\uD83D\uDCF1 Long press detected - sending TV power toggle"), document.querySelector("canvas")) {
                                    let e = new CustomEvent("tvPowerToggle", {
                                        detail: {
                                            x: t.clientX,
                                            y: t.clientY
                                        }
                                    });
                                    document.dispatchEvent(e)
                                }
                            }, 1500)
                        }, []),
                        E = (0, a.useCallback)(e => {
                            e.preventDefault();
                            let t = f.current;
                            if (null === t) return;
                            let n = Array.from(e.touches).find(e => e.identifier === t);
                            if (!n) return;
                            let i = x.current;
                            if (!i) {
                                x.current = {
                                    x: n.clientX,
                                    y: n.clientY
                                };
                                return
                            }
                            let a = n.clientX - i.x,
                                o = n.clientY - i.y;
                            x.current = {
                                x: n.clientX,
                                y: n.clientY
                            };
                            let r = Math.hypot(a, o);
                            if (r < .9) return;
                            let s = v * (1 + .7 * Math.min(1, r / 16)),
                                l = a * s,
                                c = o * s,
                                d = (e, t) => Math.max(-t, Math.min(t, e));
                            l = d(l, 1.2), c = d(c, 1.2);
                            let h = r < 10 ? .28 : .55;
                            k.current.x += h * (l - k.current.x), k.current.y += h * (c - k.current.y), b.current.x += k.current.x, b.current.y += k.current.y
                        }, [v]),
                        P = (0, a.useCallback)(e => {
                            e.preventDefault(), y.current && (clearTimeout(y.current), y.current = null);
                            try {
                                let e = w.current,
                                    t = x.current;
                                if (e && t) {
                                    let n = t.x - e.x,
                                        i = t.y - e.y,
                                        a = Math.hypot(n, i),
                                        o = Date.now() - e.t;
                                    console.log("\uD83D\uDCF1 Touch end - distance: ".concat(a.toFixed(2), "px, time: ").concat(o, "ms")), a < 20 && o < 400 && o < 1400 ? (console.log("\uD83D\uDCF1 Short tap detected! Forwarding to canvas..."), setTimeout(() => {
                                        let e = document.querySelector("canvas");
                                        if (e) {
                                            console.log("\uD83C\uDFAF Canvas found:", e.tagName, e.width, e.height), console.log("\uD83C\uDFAF Creating synthetic click event at:", t.x, t.y);
                                            let n = new MouseEvent("click", {
                                                bubbles: !0,
                                                cancelable: !0,
                                                view: window,
                                                clientX: t.x,
                                                clientY: t.y,
                                                button: 0,
                                                buttons: 1
                                            });
                                            console.log("\uD83D\uDCCB Event properties:", {
                                                type: n.type,
                                                bubbles: n.bubbles,
                                                cancelable: n.cancelable,
                                                clientX: n.clientX,
                                                clientY: n.clientY,
                                                target: n.target
                                            });
                                            try {
                                                Object.defineProperty(n, "target", {
                                                    value: e,
                                                    writable: !1
                                                })
                                            } catch (e) {}
                                            console.log("\uD83D\uDE80 Dispatching click to canvas (single dispatch)..."), e.dispatchEvent(n), console.log("✅ Dispatch completed")
                                        } else console.warn("❌ Canvas element not found for tap forwarding"), console.log("\uD83D\uDCCB Available elements:", document.querySelectorAll("*").length)
                                    }, 50)) : o >= 1400 ? console.log("\uD83D\uDCF1 Long press completed - power toggle should have been sent") : console.log("\uD83D\uDCF1 Not a tap - too much movement or too long")
                                }
                            } catch (e) {
                                console.error("❌ Error in tap forwarding:", e)
                            }
                            x.current = null, k.current = {
                                x: 0,
                                y: 0
                            }, w.current = null;
                            try {
                                let t = f.current;
                                null !== t && (Array.from(e.touches).some(e => e.identifier === t) || (f.current = null))
                            } catch (e) {}
                        }, []);
                    (0, a.useEffect)(() => {
                        if (!n) return;
                        let e = () => {
                            let n = b.current.x,
                                i = b.current.y;
                            b.current.x = 0, b.current.y = 0;
                            try {
                                t({
                                    movement: M.current,
                                    look: {
                                        x: n,
                                        y: i
                                    },
                                    jump: S.current
                                })
                            } catch (e) {}
                            j.current = requestAnimationFrame(e)
                        };
                        return j.current = requestAnimationFrame(e), () => {
                            j.current && cancelAnimationFrame(j.current), j.current = null
                        }
                    }, [n, t]);
                    let N = (0, a.useCallback)(e => {
                            if (e.preventDefault(), !h.current) return;
                            u.current = !0;
                            let t = h.current.getBoundingClientRect();
                            m.current = {
                                x: t.left + t.width / 2,
                                y: t.top + t.height / 2
                            };
                            let n = e.changedTouches[0] || e.touches[0];
                            g.current = n.identifier;
                            let i = n.clientX - m.current.x,
                                a = n.clientY - m.current.y,
                                o = Math.sqrt(i * i + a * a),
                                s = Math.min(t.width, t.height) / 2 - 10;
                            o <= s && r({
                                x: Math.max(-1, Math.min(1, i / s)),
                                y: Math.max(-1, Math.min(1, -a / s))
                            })
                        }, []),
                        L = (0, a.useCallback)(e => {
                            if (e.preventDefault(), !u.current || !h.current) return;
                            let t = g.current;
                            if (null === t) return;
                            let n = Array.from(e.touches).find(e => e.identifier === t);
                            if (!n) return;
                            let i = n.clientX - m.current.x,
                                a = n.clientY - m.current.y,
                                o = Math.sqrt(i * i + a * a),
                                s = Math.min(h.current.getBoundingClientRect().width, h.current.getBoundingClientRect().height) / 2 - 10;
                            o <= s && r({
                                x: Math.max(-1, Math.min(1, i / s)),
                                y: Math.max(-1, Math.min(1, -a / s))
                            })
                        }, []),
                        z = (0, a.useCallback)(e => {
                            e.preventDefault();
                            try {
                                let t = g.current;
                                if (null !== t && Array.from(e.touches).some(e => e.identifier === t)) return
                            } catch (e) {}
                            u.current = !1, g.current = null, r({
                                x: 0,
                                y: 0
                            })
                        }, []),
                        I = (0, a.useCallback)(e => {
                            l(!0)
                        }, []),
                        B = (0, a.useCallback)(e => {
                            l(!1)
                        }, []);
                    return n ? (0, i.jsxs)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            pointerEvents: "none",
                            zIndex: 100,
                            userSelect: "none",
                            touchAction: "none"
                        },
                        children: [(0, i.jsxs)("div", {
                            ref: h,
                            onTouchStart: N,
                            onTouchMove: L,
                            onTouchEnd: z,
                            style: {
                                position: "absolute",
                                left: c ? "clamp(40px, 6vw, 48px)" : "clamp(16px, 3vw, 24px)",
                                bottom: "clamp(16px, 3vh, 24px)",
                                width: c ? "clamp(150px, 24vw, 170px)" : "clamp(100px, 15vw, 120px)",
                                height: c ? "clamp(150px, 24vw, 170px)" : "clamp(100px, 15vw, 120px)",
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                                border: "2px solid rgba(255,255,255,0.3)",
                                pointerEvents: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                                backdropFilter: "blur(10px)"
                            },
                            children: [(0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    top: 15,
                                    fontSize: c ? 22 : 16,
                                    opacity: .7
                                },
                                children: "▲"
                            }), (0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    bottom: 15,
                                    fontSize: c ? 22 : 16,
                                    opacity: .7
                                },
                                children: "▼"
                            }), (0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    left: 15,
                                    fontSize: c ? 22 : 16,
                                    opacity: .7
                                },
                                children: "◀"
                            }), (0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    right: 15,
                                    fontSize: c ? 22 : 16,
                                    opacity: .7
                                },
                                children: "▶"
                            }), (0, i.jsx)("div", {
                                style: {
                                    width: c ? 12 : 8,
                                    height: c ? 12 : 8,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.6)",
                                    position: "absolute"
                                }
                            })]
                        }), (0, i.jsx)("div", {
                            onTouchStart: I,
                            onTouchEnd: B,
                            style: {
                                position: "absolute",
                                right: c ? "clamp(44px, 7vw, 56px)" : "clamp(16px, 3vw, 24px)",
                                bottom: c ? "clamp(44px, 7vh, 56px)" : "clamp(16px, 3vh, 24px)",
                                width: c ? "clamp(76px, 12vw, 86px)" : "clamp(50px, 8vw, 60px)",
                                height: c ? "clamp(76px, 12vw, 86px)" : "clamp(50px, 8vw, 60px)",
                                borderRadius: "50%",
                                background: s ? "linear-gradient(135deg, #4ade80, #22c55e)" : "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                                border: "2px solid rgba(255,255,255,0.3)",
                                pointerEvents: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
                                backdropFilter: "blur(10px)",
                                transform: s ? "scale(0.95)" : "scale(1)",
                                transition: "all 0.1s ease",
                                zIndex: 60
                            },
                            children: (0, i.jsx)("span", {
                                style: {
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#fff",
                                    opacity: .9
                                },
                                children: "JUMP"
                            })
                        }), (0, i.jsx)("div", {
                            ref: p,
                            onTouchStart: C,
                            onTouchMove: E,
                            onTouchEnd: P,
                            style: {
                                position: "absolute",
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: "48vw",
                                pointerEvents: "auto",
                                zIndex: 50,
                                touchAction: "none"
                            }
                        })]
                    }) : null
                },
                L = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = (0, a.useRef)(Math.max(0, Math.min(1, null != (e = t.volume) ? e : .7))),
                        i = (0, a.useRef)(null),
                        o = (0, a.useRef)(null),
                        r = (0, a.useRef)({
                            click: null,
                            hover: null
                        }),
                        s = (0, a.useRef)(!1),
                        l = (0, a.useCallback)(() => {
                            if (!s.current) try {
                                let e = window.AudioContext || window.webkitAudioContext;
                                if (!e) return;
                                let t = new e;
                                if ("suspended" === t.state) return;
                                let a = t.createGain();
                                a.gain.value = n.current, a.connect(t.destination), i.current = t, o.current = a, s.current = !0
                            } catch (e) {
                                console.warn("AudioContext creation failed:", e)
                            }
                        }, []),
                        c = (0, a.useCallback)(async e => {
                            try {
                                let t = await fetch(e, {
                                    cache: "force-cache"
                                });
                                if (!t.ok) return null;
                                let n = await t.arrayBuffer(),
                                    a = i.current;
                                return await new Promise((e, t) => {
                                    try {
                                        a.decodeAudioData(n.slice(0), e, t)
                                    } catch (e) {
                                        t(e)
                                    }
                                })
                            } catch (e) {
                                return null
                            }
                        }, []),
                        d = (0, a.useCallback)(async () => {
                            if (l(), !i.current) return;
                            let e = [];
                            t.clickUrl && !r.current.click && e.push(c(t.clickUrl).then(e => {
                                r.current.click = e
                            })), t.hoverUrl && !r.current.hover && e.push(c(t.hoverUrl).then(e => {
                                r.current.hover = e
                            }));
                            try {
                                await Promise.all(e)
                            } catch (e) {}
                        }, [c, l, t.clickUrl, t.hoverUrl]);
                    (0, a.useEffect)(() => {
                        let e = async () => {
                            try {
                                if (!s.current) {
                                    let e = window.AudioContext || window.webkitAudioContext;
                                    if (!e) return;
                                    let a = new e;
                                    "suspended" === a.state && await a.resume();
                                    let r = a.createGain();
                                    r.gain.value = n.current, r.connect(a.destination), i.current = a, o.current = r, s.current = !0, !1 !== t.prefetch && setTimeout(() => d(), 100)
                                }
                            } catch (e) {
                                console.warn("Audio initialization failed:", e)
                            }
                            document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", e), document.removeEventListener("click", e), document.removeEventListener("touchstart", e)
                        };
                        return document.addEventListener("pointerdown", e, {
                            once: !0
                        }), document.addEventListener("keydown", e, {
                            once: !0
                        }), document.addEventListener("click", e, {
                            once: !0
                        }), document.addEventListener("touchstart", e, {
                            once: !0
                        }), () => {
                            document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", e), document.removeEventListener("click", e), document.removeEventListener("touchstart", e)
                        }
                    }, [d, t.prefetch]);
                    let h = (0, a.useCallback)(function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                a = arguments.length > 2 ? arguments[2] : void 0,
                                r = i.current,
                                s = o.current;
                            if (r && s && e) try {
                                let i = r.createBufferSource();
                                i.buffer = e;
                                let o = r.createGain();
                                o.gain.value = 1e-4, o.connect(s), i.connect(o);
                                let l = r.currentTime,
                                    c = Math.max(1e-4, Math.min(1, n.current * t));
                                o.gain.setValueAtTime(1e-4, l), o.gain.linearRampToValueAtTime(c, l + .01);
                                let d = i.buffer.duration,
                                    h = a ? Math.min(d, a / 1e3) : d;
                                o.gain.exponentialRampToValueAtTime(1e-4, l + h), i.start(l), i.stop(l + h)
                            } catch (e) {}
                        }, []),
                        p = (0, a.useCallback)(function (e, t) {
                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            try {
                                if (!i.current || !o.current) return;
                                let r = i.current,
                                    s = o.current;
                                if ("suspended" === r.state) return void r.resume().catch(() => {});
                                if ("running" !== r.state) return;
                                let l = r.createOscillator(),
                                    c = r.createGain();
                                l.type = "sine", l.frequency.value = e, c.gain.value = 1e-4, c.connect(s), l.connect(c);
                                let d = r.currentTime,
                                    h = Math.max(1e-4, Math.min(1, n.current * a));
                                c.gain.setValueAtTime(1e-4, d), c.gain.linearRampToValueAtTime(h, d + .01), c.gain.exponentialRampToValueAtTime(1e-4, d + t), l.start(d), l.stop(d + t)
                            } catch (e) {
                                console.debug("Audio playback failed (expected on first load):", e)
                            }
                        }, []),
                        u = (0, a.useCallback)(() => {
                            let e = r.current.click;
                            if (e) return void h(e, .9, 220);
                            p(800, .15, .8)
                        }, [p, h]),
                        m = (0, a.useCallback)(() => {
                            let e = r.current.hover;
                            if (e) return void h(e, .5, 90);
                            p(1400, .08, .35)
                        }, [p, h]),
                        g = (0, a.useCallback)(() => {
                            p(523, .18, .6), setTimeout(() => p(659, .18, .6), 100), setTimeout(() => p(784, .24, .6), 200)
                        }, [p]);
                    return {
                        click: u,
                        hover: m,
                        success: g,
                        error: (0, a.useCallback)(() => {
                            p(300, .3, .7)
                        }, [p]),
                        setVolume: (0, a.useCallback)(e => {
                            n.current = Math.max(0, Math.min(1, e));
                            try {
                                o.current.gain.value = n.current
                            } catch (e) {}
                        }, [])
                    }
                },
                z = e => {
                    let {
                        onResume: t,
                        onGameSettings: n,
                        onHelp: o,
                        onQuitGame: r
                    } = e, s = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                t(430 >= Math.min(window.innerWidth, window.innerHeight))
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), [l, c] = (0, a.useState)(0), d = (0, a.useRef)(null), h = (0, a.useRef)(0), p = L({
                        volume: .7,
                        clickUrl: "/audio/ui/click.mp3",
                        hoverUrl: "/audio/ui/hover.mp3",
                        prefetch: !1
                    }), u = (0, a.useRef)(null), m = (0, a.useRef)([]);
                    (0, a.useEffect)(() => {
                        try {
                            let e = new Audio("/audio/ui/click.mp3");
                            e.preload = "auto", e.volume = .7, u.current = e, m.current = [];
                            for (let e = 0; e < 3; e++) {
                                let e = new Audio("/audio/ui/click.mp3");
                                e.preload = "auto", e.volume = .7, m.current.push(e)
                            }
                        } catch (e) {}
                        return () => {
                            try {
                                u.current && (u.current.src = "", u.current = null)
                            } catch (e) {}
                            try {
                                m.current.forEach(e => {
                                    try {
                                        e.pause(), e.src = ""
                                    } catch (e) {}
                                }), m.current = []
                            } catch (e) {}
                        }
                    }, []);
                    let g = () => {
                            try {
                                let e = m.current,
                                    t = e.find(e => e.paused || e.ended);
                                if (t || (t = e[0]), t || (t = u.current || void 0), !t) return;
                                t.paused || t.pause(), t.currentTime = 0, t.volume = .7;
                                let n = t.play();
                                n && "function" == typeof n.then && n.catch(() => {})
                            } catch (e) {}
                        },
                        x = (0, a.useMemo)(() => [{
                            id: "resume",
                            label: "Resume Game",
                            action: t,
                            emphasis: !0
                        }, {
                            id: "settings",
                            label: "Game Settings",
                            action: n
                        }, {
                            id: "help",
                            label: "Help",
                            action: o
                        }, {
                            id: "quit",
                            label: "Quit Game",
                            action: r
                        }], [t, n, o, r]);
                    return (0, a.useEffect)(() => {
                        let e = e => {
                            let n = performance.now();
                            if (!(n < h.current)) switch (h.current = n + 95, e.code) {
                            case "ArrowUp":
                            case "KeyW":
                                e.preventDefault(), p.hover(), c(e => e > 0 ? e - 1 : x.length - 1);
                                break;
                            case "ArrowDown":
                            case "KeyS":
                                e.preventDefault(), p.hover(), c(e => e < x.length - 1 ? e + 1 : 0);
                                break;
                            case "Enter":
                            case "Space":
                                var i;
                                e.preventDefault(), g(), null == (i = x[l]) || i.action();
                                break;
                            case "Escape":
                                e.preventDefault(), g(), t()
                            }
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [l, x, t]), (0, a.useEffect)(() => {
                        d.current && d.current.focus()
                    }, []), (0, i.jsxs)("div", {
                        ref: d,
                        tabIndex: -1,
                        style: {
                            position: "fixed",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "\n          linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(15,15,25,0.55) 100%),\n          radial-gradient(circle at 30% 20%, rgba(196,30,58,0.1) 0%, transparent 50%),\n          radial-gradient(circle at 70% 80%, rgba(58,30,196,0.08) 0%, transparent 50%)\n        ",
                            backdropFilter: "blur(12px)",
                            zIndex: 1e3,
                            outline: "none"
                        },
                        onClick: t,
                        children: [(0, i.jsx)("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                backgroundImage: "\n            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%),\n            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 50%),\n            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.01) 50%, transparent 100%)\n          ",
                                pointerEvents: "none"
                            }
                        }), (0, i.jsxs)("div", {
                            onClick: e => e.stopPropagation(),
                            style: {
                                width: s ? "min(88vw, 320px)" : "420px",
                                maxHeight: "80vh",
                                background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(5,5,5,0.99) 100%)",
                                borderRadius: "8px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                boxShadow: "\n            0 0 0 1px rgba(0,0,0,0.9),\n            0 30px 80px rgba(0,0,0,0.9),\n            inset 0 1px 0 rgba(255,255,255,0.03)\n          ",
                                padding: "0",
                                backdropFilter: "blur(10px)"
                            },
                            children: [(0, i.jsxs)("div", {
                                style: {
                                    background: "linear-gradient(180deg, #710cd2 0%, #4b0b98 100%)",
                                    padding: s ? "12px 18px" : "16px 24px",
                                    borderBottom: "2px solid rgba(113,12,210,0.55)",
                                    position: "relative"
                                },
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        color: "#fff",
                                        fontSize: s ? "18px" : "24px",
                                        fontWeight: "700",
                                        textTransform: "uppercase",
                                        letterSpacing: s ? "0.8px" : "1px",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                                    },
                                    children: "Pause Menu"
                                }), (0, i.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "2px",
                                        background: "linear-gradient(90deg, #710cd2 0%, #4b0b98 50%, #710cd2 100%)"
                                    }
                                })]
                            }), (0, i.jsx)("div", {
                                style: {
                                    padding: s ? "4px 0" : "8px 0"
                                },
                                children: x.map((e, t) => {
                                    let n = t === l,
                                        a = e.emphasis;
                                    return (0, i.jsxs)("div", {
                                        onClick: () => {
                                            c(t), g(), setTimeout(() => e.action(), 100)
                                        },
                                        style: {
                                            position: "relative",
                                            padding: s ? "12px 18px" : "16px 24px",
                                            margin: "0",
                                            background: n ? "linear-gradient(90deg, rgba(113,12,210,0.9) 0%, rgba(113,12,210,0.25) 70%, transparent 100%)" : "linear-gradient(90deg, rgba(113,12,210,0.12) 0%, rgba(113,12,210,0.05) 100%)",
                                            borderLeft: n ? "4px solid #710cd2" : "4px solid rgba(113,12,210,0.35)",
                                            color: n ? "#fff" : a ? "#d1b3ff" : "#bbb",
                                            fontSize: s ? "14px" : "16px",
                                            fontWeight: n || a ? "600" : "400",
                                            cursor: "pointer",
                                            transition: "all 0.15s ease",
                                            textTransform: "uppercase",
                                            letterSpacing: s ? "0.3px" : "0.5px",
                                            userSelect: "none"
                                        },
                                        onMouseEnter: () => {
                                            c(t);
                                            try {
                                                p.hover()
                                            } catch (e) {}
                                        },
                                        children: [n && (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                left: "8px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                width: "0",
                                                height: "0",
                                                borderTop: "6px solid transparent",
                                                borderBottom: "6px solid transparent",
                                                borderLeft: "10px solid #710cd2"
                                            }
                                        }), (0, i.jsx)("div", {
                                            style: {
                                                paddingLeft: n ? s ? "12px" : "16px" : "0"
                                            },
                                            children: e.label
                                        }), n && (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 80%)",
                                                pointerEvents: "none"
                                            }
                                        })]
                                    }, e.id)
                                })
                            }), (0, i.jsx)("div", {
                                style: {
                                    borderTop: "1px solid rgba(255,255,255,0.1)",
                                    padding: "12px 24px",
                                    background: "rgba(0,0,0,0.3)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: (0, i.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "16px",
                                        fontSize: "12px",
                                        color: "#888"
                                    },
                                    children: [(0, i.jsx)("span", {
                                        children: "\uD83C\uDFAE A Select"
                                    }), (0, i.jsx)("span", {
                                        children: "⏸️ ESC Quick Resume"
                                    }), (0, i.jsx)("span", {
                                        children: "\uD83D\uDD19 B Back"
                                    })]
                                })
                            })]
                        })]
                    })
                };
            var I = n(9137),
                B = n.n(I);
            let T = e => {
                    let {
                        isVisible: t,
                        progress: n,
                        currentStep: o,
                        stepLabel: r,
                        estimatedTimeLeft: s,
                        onComplete: l
                    } = e, [c, d] = (0, a.useState)(0), [h, p] = (0, a.useState)([]);
                    return ((0, a.useEffect)(() => {
                        let e = (n - c) / 60;
                        if (Math.abs(n - c) > .1) {
                            let t = 0,
                                i = setInterval(() => {
                                    t++, d(a => {
                                        let o = a + e;
                                        return t >= 60 || .1 > Math.abs(o - n) ? (clearInterval(i), n) : o
                                    })
                                }, 5);
                            return () => clearInterval(i)
                        }
                    }, [n, c]), (0, a.useEffect)(() => {
                        p(Array.from({
                            length: 12
                        }, (e, t) => ({
                            id: t,
                            x: 100 * Math.random(),
                            y: 100 * Math.random(),
                            delay: 3 * Math.random()
                        })))
                    }, []), (0, a.useEffect)(() => {
                        if (n >= 100 && l) {
                            let e = setTimeout(l, 500);
                            return () => clearTimeout(e)
                        }
                    }, [n, l]), t) ? (0, i.jsxs)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            background: "\n          linear-gradient(135deg, \n            rgba(0,0,0,0.95) 0%, \n            rgba(15,15,25,0.98) 50%, \n            rgba(25,25,40,0.95) 100%\n          ),\n          radial-gradient(circle at 30% 40%, rgba(113,12,210,0.15) 0%, transparent 50%),\n          radial-gradient(circle at 70% 60%, rgba(196,30,58,0.12) 0%, transparent 50%)\n        ",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            color: "#fff",
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            overflow: "hidden",
                            pointerEvents: "all",
                            userSelect: "none",
                            cursor: "wait"
                        },
                        onContextMenu: e => e.preventDefault(),
                        onDragStart: e => e.preventDefault(),
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        onKeyDown: e => {
                            e.preventDefault(), e.stopPropagation()
                        },
                        className: "jsx-419593f3bacc7169",
                        children: [h.map(e => (0, i.jsx)("div", {
                            style: {
                                position: "absolute",
                                left: "".concat(e.x, "%"),
                                top: "".concat(e.y, "%"),
                                width: 3,
                                height: 3,
                                backgroundColor: "rgba(255,255,255,0.3)",
                                borderRadius: "50%",
                                animation: "loadingFloat 4s infinite ease-in-out ".concat(e.delay, "s"),
                                boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                            },
                            className: "jsx-419593f3bacc7169"
                        }, e.id)), (0, i.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                zIndex: 2,
                                maxWidth: "90%",
                                width: 500
                            },
                            className: "jsx-419593f3bacc7169",
                            children: [(0, i.jsx)("div", {
                                style: {
                                    fontSize: "clamp(28px, 5vw, 48px)",
                                    fontWeight: "900",
                                    marginBottom: 8,
                                    background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textShadow: "0 0 30px rgba(255,255,255,0.3)",
                                    letterSpacing: "2px"
                                },
                                className: "jsx-419593f3bacc7169",
                                children: "HEYBLOX WORLD"
                            }), (0, i.jsx)("div", {
                                style: {
                                    fontSize: 16,
                                    color: "#b0b0b0",
                                    marginBottom: 40,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                },
                                className: "jsx-419593f3bacc7169",
                                children: "3D Experience"
                            }), (0, i.jsxs)("div", {
                                style: {
                                    marginBottom: 30,
                                    padding: "0 20px"
                                },
                                className: "jsx-419593f3bacc7169",
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        width: "100%",
                                        height: 8,
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        borderRadius: 20,
                                        overflow: "hidden",
                                        position: "relative",
                                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)"
                                    },
                                    className: "jsx-419593f3bacc7169",
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            width: "".concat(c, "%"),
                                            height: "100%",
                                            background: "linear-gradient(90deg, #710cd2 0%, #a855f7 50%, #710cd2 100%)",
                                            borderRadius: 20,
                                            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            position: "relative",
                                            overflow: "hidden"
                                        },
                                        className: "jsx-419593f3bacc7169",
                                        children: (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: "-100%",
                                                width: "100%",
                                                height: "100%",
                                                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                                                animation: "loadingShine 2s infinite ease-in-out"
                                            },
                                            className: "jsx-419593f3bacc7169"
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    style: {
                                        marginTop: 12,
                                        fontSize: 18,
                                        fontWeight: "600",
                                        color: "#fff"
                                    },
                                    className: "jsx-419593f3bacc7169",
                                    children: [Math.round(c), "%"]
                                })]
                            }), (0, i.jsxs)("div", {
                                style: {
                                    marginBottom: 20
                                },
                                className: "jsx-419593f3bacc7169",
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        fontSize: 16,
                                        color: "#e0e0e0",
                                        marginBottom: 8,
                                        fontWeight: "500"
                                    },
                                    className: "jsx-419593f3bacc7169",
                                    children: r
                                }), s > 0 && n < 100 && (0, i.jsxs)("div", {
                                    style: {
                                        fontSize: 14,
                                        color: "#a0a0a0",
                                        opacity: .8
                                    },
                                    className: "jsx-419593f3bacc7169",
                                    children: ["Estimated time: ", s, "s"]
                                })]
                            }), (0, i.jsxs)("div", {
                                style: {
                                    fontSize: 14,
                                    color: "#888",
                                    opacity: .7,
                                    fontStyle: "italic",
                                    maxWidth: 400,
                                    margin: "0 auto"
                                },
                                className: "jsx-419593f3bacc7169",
                                children: [n < 25 && "Tip: Use WASD to move and mouse to look around", n >= 25 && n < 50 && "Tip: Press SPACE to jump and interact with objects", n >= 50 && n < 75 && "Tip: ESC opens the pause menu anytime", n >= 75 && n < 100 && "Tip: Click on furniture to interact with them", n >= 100 && "Welcome to your 3D world! \uD83C\uDFAE"]
                            })]
                        }), (0, i.jsx)(B(), {
                            id: "419593f3bacc7169",
                            children: "@keyframes loadingFloat{0%,100%{transform:translatey(0px)rotate(0deg);opacity:.3}50%{transform:translatey(-20px)rotate(180deg);opacity:.8}}@keyframes loadingShine{0%{left:-100%}100%{left:100%}}@keyframes loadingPulse{0%,100%{opacity:1}50%{opacity:.5}}"
                        })]
                    }) : null
                },
                F = [{
                    id: "initializing",
                    label: "Initializing 3D Engine...",
                    duration: 800,
                    weight: 15
                }, {
                    id: "physics",
                    label: "Loading Physics System...",
                    duration: 600,
                    weight: 10
                }, {
                    id: "textures",
                    label: "Loading Textures...",
                    duration: 1200,
                    weight: 25
                }, {
                    id: "models",
                    label: "Loading 3D Models...",
                    duration: 1500,
                    weight: 30
                }, {
                    id: "audio",
                    label: "Setting up Audio...",
                    duration: 400,
                    weight: 8
                }, {
                    id: "world",
                    label: "Building World...",
                    duration: 800,
                    weight: 12
                }],
                D = e => {
                    let {
                        onNewGame: t,
                        onLoadGame: n,
                        onSettings: o,
                        onHelp: r,
                        onCredits: s,
                        onQuit: l
                    } = e, c = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                t(430 >= Math.min(window.innerWidth, window.innerHeight))
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), d = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /(SM-G95|Samsung|SAMSUNG|Galaxy\s?S8)/i.test(e),
                                        c = s(o, 740, 24) && s(r, 360, 18);
                                    t(l && c && i > a && n >= 3.2 && n <= 4.6)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), h = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /iPhone/i.test(e),
                                        c = s(o, 932, 16) && s(r, 430, 12);
                                    t(l && c && i > a && n >= 2.8 && n <= 3.2)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), p = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /iPad/i.test(e) || /Mac/i.test(e) && navigator.maxTouchPoints > 1,
                                        c = s(o, 1366, 24) && s(r, 1024, 20);
                                    t(l && c && i > a && n >= 1.8 && n <= 2.2)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), u = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /(SM-A515|SM-A515F|A51|SM-A715|A71)/i.test(e),
                                        c = s(o, 914, 22) && s(r, 412, 18);
                                    t((l || c && n >= 2.3 && n <= 3.3) && i > a)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), m = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /(SM-G988|S20\s?Ultra)/i.test(e),
                                        c = s(o, 915, 22) && s(r, 412, 18);
                                    t((l || c && n >= 3.2 && n <= 3.8) && i > a)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), g = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let n = () => {
                                try {
                                    let n = navigator.userAgent || "",
                                        i = window.devicePixelRatio || 1,
                                        a = window.innerWidth || 0,
                                        o = window.innerHeight || 0,
                                        r = Math.max(a, o),
                                        s = Math.min(a, o),
                                        l = (e, t, n) => Math.abs(e - t) <= n,
                                        c = /iPhone/i.test(n),
                                        d = l(r, 896, 30) && l(s, 414, 18),
                                        h = a > o && l(s, 414, 18) && r >= 700 && r <= 930;
                                    t((d || h) && i >= 1.7 && i <= 2.6), !e && c && (d || h) && t(!0)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return n(), window.addEventListener("resize", n), window.addEventListener("orientationchange", n), () => {
                                window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n)
                            }
                        }, []), e
                    }(), x = function () {
                        let [e, t] = (0, a.useState)(!1);
                        return (0, a.useEffect)(() => {
                            let e = () => {
                                try {
                                    let e = navigator.userAgent || "",
                                        n = window.devicePixelRatio || 1,
                                        i = window.innerWidth || 0,
                                        a = window.innerHeight || 0,
                                        o = Math.max(i, a),
                                        r = Math.min(i, a),
                                        s = (e, t, n) => Math.abs(e - t) <= n,
                                        l = /(SM-A556|A55)/i.test(e),
                                        c = s(o, 729, 28) && s(r, 384, 22);
                                    t((l || c && n >= 2.3 && n <= 3.3) && i > a)
                                } catch (e) {
                                    t(!1)
                                }
                            };
                            return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                                window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                            }
                        }, []), e
                    }(), [f, w] = (0, a.useState)(0), [y, v] = (0, a.useState)(null), b = (0, a.useRef)(0), [k, j] = (0, a.useState)(!1), M = (0, a.useRef)(0), S = (0, a.useRef)(null), C = (0, a.useRef)(null), E = (0, a.useRef)(null), [P, N] = (0, a.useState)("50%"), [z, I] = (0, a.useState)(!1), [D, A] = (0, a.useState)(null), [R, O] = (0, a.useState)(null), _ = L({
                        volume: .7,
                        clickUrl: "/audio/ui/click.mp3",
                        hoverUrl: "/audio/ui/hover.mp3",
                        prefetch: !1
                    }), V = (0, a.useRef)(null), q = (0, a.useRef)(null), U = (0, a.useRef)([]);
                    (0, a.useEffect)(() => {
                        try {
                            let e = new Audio("/audio/ui/click.mp3");
                            e.preload = "auto", e.volume = .7, V.current = e, U.current = [];
                            for (let e = 0; e < 3; e++) {
                                let e = new Audio("/audio/ui/click.mp3");
                                e.preload = "auto", e.volume = .7, U.current.push(e)
                            }
                        } catch (e) {}
                        try {
                            let e = new Audio("/audio/ui/hover.mp3");
                            e.preload = "auto", e.volume = .4, q.current = e
                        } catch (e) {}
                        return () => {
                            try {
                                V.current && (V.current.src = "", V.current = null)
                            } catch (e) {}
                            try {
                                U.current.forEach(e => {
                                    try {
                                        e.pause(), e.src = ""
                                    } catch (e) {}
                                }), U.current = []
                            } catch (e) {}
                            try {
                                q.current && (q.current.src = "", q.current = null)
                            } catch (e) {}
                        }
                    }, []);
                    let W = (0, a.useCallback)(() => {
                        try {
                            let e = U.current,
                                t = e.find(e => e.paused || e.ended);
                            if (t || (t = e[0]), t || (t = V.current || void 0), !t) return;
                            t.paused || t.pause(), t.currentTime = 0, t.volume = .7;
                            let n = t.play();
                            n && "function" == typeof n.then && n.catch(() => {})
                        } catch (e) {}
                    }, []);
                    (0, a.useEffect)(() => {}, [_]);
                    let {
                        state: H,
                        startLoading: G
                    } = (() => {
                        let [e, t] = (0, a.useState)({
                            isLoading: !1,
                            progress: 0,
                            currentStep: "",
                            currentStepLabel: "",
                            estimatedTimeLeft: 0
                        }), n = (0, a.useRef)(null), i = (0, a.useRef)(0), o = (0, a.useRef)([]), r = (0, a.useRef)(new Set), s = (0, a.useCallback)(e => e.reduce((e, t) => e + t.duration, 0), []), l = (0, a.useCallback)(() => Math.min(100, o.current.filter(e => r.current.has(e.id)).reduce((e, t) => e + t.weight, 0)), []), c = (0, a.useCallback)(() => {
                            if (!e.isLoading || e.progress >= 100) return;
                            let n = Date.now() - i.current,
                                a = e.progress / 100;
                            if (a > 0) {
                                let e = Math.max(0, (n / a - n) / 1e3);
                                t(t => ({
                                    ...t,
                                    estimatedTimeLeft: Math.round(e)
                                }))
                            }
                        }, [e.isLoading, e.progress]);
                        (0, a.useEffect)(() => {
                            if (e.isLoading) {
                                let e = setInterval(c, 500);
                                return () => clearInterval(e)
                            }
                        }, [e.isLoading, c]);
                        let d = (0, a.useCallback)(async function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F;
                                return new Promise(a => {
                                    var c, d;
                                    i.current = Date.now(), o.current = e, r.current.clear(), t({
                                        isLoading: !0,
                                        progress: 0,
                                        currentStep: (null == (c = e[0]) ? void 0 : c.id) || "",
                                        currentStepLabel: (null == (d = e[0]) ? void 0 : d.label) || "Loading...",
                                        estimatedTimeLeft: Math.round(s(e) / 1e3)
                                    });
                                    let h = 0,
                                        p = () => {
                                            if (h >= e.length) {
                                                t(e => ({
                                                    ...e,
                                                    progress: 100,
                                                    currentStepLabel: "Ready!",
                                                    estimatedTimeLeft: 0
                                                })), setTimeout(() => {
                                                    t(e => ({
                                                        ...e,
                                                        isLoading: !1
                                                    })), a()
                                                }, 300);
                                                return
                                            }
                                            let i = e[h];
                                            t(e => ({
                                                ...e,
                                                currentStep: i.id,
                                                currentStepLabel: i.label
                                            })), n.current = setTimeout(() => {
                                                r.current.add(i.id);
                                                let e = l();
                                                t(t => ({
                                                    ...t,
                                                    progress: e
                                                })), h++, p()
                                            }, i.duration * (.8 + .4 * Math.random()))
                                        };
                                    p()
                                })
                            }, [l, s]),
                            h = (0, a.useCallback)(() => {
                                n.current && (clearTimeout(n.current), n.current = null), t({
                                    isLoading: !1,
                                    progress: 0,
                                    currentStep: "",
                                    currentStepLabel: "",
                                    estimatedTimeLeft: 0
                                }), r.current.clear()
                            }, []),
                            p = (0, a.useCallback)(function (e) {
                                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                n ? r.current.add(e) : r.current.delete(e);
                                let i = l();
                                t(e => ({
                                    ...e,
                                    progress: i
                                }))
                            }, [l]),
                            u = (0, a.useCallback)((e, n) => {
                                t(t => ({
                                    ...t,
                                    progress: Math.max(0, Math.min(100, e)),
                                    ...n && {
                                        currentStepLabel: n
                                    }
                                }))
                            }, []);
                        return (0, a.useEffect)(() => () => {
                            n.current && clearTimeout(n.current)
                        }, []), {
                            state: e,
                            startLoading: d,
                            stopLoading: h,
                            updateProgress: p,
                            setCustomProgress: u
                        }
                    })(), Y = !c, K = Y ? p ? "8%" : "6%" : d ? "5%" : h || g ? "8%" : x ? "6%" : u || m ? "10%" : "7%", J = Y ? p ? "300px" : "180px" : d ? "100px" : h || g ? "136px" : x ? "110px" : "120px", X = Y ? p ? "min(60vw, 1100px)" : "min(54vw, 1020px)" : d || h ? "50vw" : g ? "46vw" : x ? "min(48vw, 480px)" : "52vw", $ = Y ? p ? "min(44vw, 720px)" : "min(32vw, 560px)" : d || h ? "30vw" : g ? "34vw" : x ? "min(32vw, 280px)" : u || m ? "28vw" : "34vw", Q = Y ? void 0 : d ? "380px" : h ? "460px" : g ? "440px" : x ? "480px" : u ? "500px" : m ? "520px" : "420px", Z = Y ? void 0 : d ? "220px" : h ? "260px" : g || x || u || m ? "280px" : "240px", ee = Y ? p ? "60px" : "44px" : d ? "18px" : h || g ? "28px" : x ? "20px" : "24px", et = Y ? K : d ? "10%" : h || g ? "12%" : x ? "10%" : u || m ? "16%" : "14%", en = Y ? X : d || h || g || x ? "50vw" : "52vw", ei = Y ? p ? "clamp(70px, 5vw, 96px)" : "clamp(56px, 4vw, 76px)" : d ? "30px" : h || g ? "36px" : x ? "34px" : u || m ? "36px" : "34px", ea = Y ? p ? "26px" : "22px" : d ? "14px" : h || g ? "15px" : x ? "14px" : "16px", eo = Y ? "3px" : d ? "2.2px" : h ? "2.6px" : g ? "2.3px" : x ? "2px" : u || m ? "2.4px" : "3px", er = Y ? "2.5px" : d ? "1.8px" : (h || g || x, "2px"), es = Y ? "6%" : d ? "5%" : h || g || x ? "6%" : u ? "3%" : "4%", el = Y ? p ? "min(34vw, 640px)" : "min(30vw, 560px)" : d ? "min(58vw, 280px)" : h ? "min(58vw, 300px)" : g ? "min(50vw, 260px)" : x ? "min(50vw, 270px)" : "min(60vw, 300px)", ec = Y && p ? "78vh" : "70vh", ed = Y ? p ? "22px 30px" : "18px 26px" : d ? "8px 14px" : (h, "10px 16px"), eh = Y ? p ? "26px" : "22px" : d ? "14px" : h || g ? "16px" : x ? "15px" : "16px", ep = Y ? p ? "20px 28px" : "16px 24px" : d ? "10px 14px" : h || g ? "12px 16px" : x ? "12px 14px" : "12px 18px", eu = Y ? p ? "20px" : "18px" : d ? "13px" : h || g ? "14px" : x ? "13px" : "14px", em = Y ? p ? "26px" : "22px" : d ? "12px" : h || g ? "14px" : x ? "12px" : "14px", eg = d ? 12 : h || g ? 16 : x ? 22 : 24, ex = d ? 10 : h || g || x ? 14 : 16, ef = h || g ? 12 : d ? 4 : x ? 12 : 30 * !!p, ew = () => (0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        width: Y ? 18 : 16,
                        height: Y ? 18 : 16,
                        fill: "currentColor",
                        "aria-hidden": "true",
                        children: (0, i.jsx)("polygon", {
                            points: "9,7 18,12 9,17"
                        })
                    }), ey = () => (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        width: Y ? 18 : 16,
                        height: Y ? 18 : 16,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: [(0, i.jsx)("line", {
                            x1: "4",
                            y1: "8",
                            x2: "20",
                            y2: "8"
                        }), (0, i.jsx)("circle", {
                            cx: "10",
                            cy: "8",
                            r: "2"
                        }), (0, i.jsx)("line", {
                            x1: "4",
                            y1: "12",
                            x2: "20",
                            y2: "12"
                        }), (0, i.jsx)("circle", {
                            cx: "14",
                            cy: "12",
                            r: "2"
                        }), (0, i.jsx)("line", {
                            x1: "4",
                            y1: "16",
                            x2: "20",
                            y2: "16"
                        }), (0, i.jsx)("circle", {
                            cx: "8",
                            cy: "16",
                            r: "2"
                        })]
                    }), ev = () => (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        width: Y ? 18 : 16,
                        height: Y ? 18 : 16,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: [(0, i.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "9"
                        }), (0, i.jsx)("path", {
                            d: "M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4"
                        }), (0, i.jsx)("circle", {
                            cx: "12",
                            cy: "17",
                            r: "1"
                        })]
                    }), eb = () => (0, i.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        width: Y ? 18 : 16,
                        height: Y ? 18 : 16,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: [(0, i.jsx)("path", {
                            d: "M6.3 7.5a7 7 0 1 0 11.4 0"
                        }), (0, i.jsx)("line", {
                            x1: "12",
                            y1: "4",
                            x2: "12",
                            y2: "12"
                        })]
                    }), ek = (0, a.useMemo)(() => [{
                        id: "play",
                        label: "Play Game",
                        action: ej,
                        emphasis: !0,
                        icon: (0, i.jsx)(ew, {})
                    }, {
                        id: "settings",
                        label: "Settings",
                        action: o,
                        icon: (0, i.jsx)(ey, {})
                    }, {
                        id: "help",
                        label: "Help",
                        action: r,
                        icon: (0, i.jsx)(ev, {})
                    }, ...s ? [{
                        id: "credits",
                        label: "Credits",
                        action: s,
                        icon: null
                    }] : [], ...l ? [{
                        id: "quit",
                        label: "Quit Game",
                        action: l,
                        icon: (0, i.jsx)(eb, {})
                    }] : []], [o, r, s, l, Y]);

                    function ej() {
                        try {
                            t();
                            try {
                                W()
                            } catch (e) {}
                            try {
                                _.success()
                            } catch (e) {}
                        } catch (e) {
                            console.error("Failed to start game:", e);
                            try {
                                _.error()
                            } catch (e) {}
                        }
                    }
                    let eM = (0, a.useCallback)((e, t) => {
                            if (e.disabled) return void _.error();
                            w(t), W(), "play" === e.id ? e.action() : setTimeout(() => e.action(), 200)
                        }, [_, W]),
                        eS = (0, a.useCallback)(e => {
                            if (document.querySelectorAll(".menu-item").forEach((t, n) => {
                                    let i = t.querySelector(".hover-overlay");
                                    i && (i.style.opacity = n === e ? "1" : "0")
                                }), w(e), y !== e) {
                                v(e);
                                let t = performance.now();
                                t - (b.current || 0) < 50 || (b.current = t, _.hover())
                            }
                        }, [y, _]);
                    return ((0, a.useEffect)(() => {
                        let e = e => {
                            let t = performance.now();
                            if (!(t < M.current)) switch (M.current = t + 95, e.code) {
                            case "ArrowUp":
                            case "KeyW":
                                e.preventDefault(), _.hover(), w(e => {
                                    let t = ek.filter(e => !e.disabled),
                                        n = t.findIndex(t => t.id === ek[e].id),
                                        i = n > 0 ? n - 1 : t.length - 1,
                                        a = ek.findIndex(e => e.id === t[i].id);
                                    return document.querySelectorAll(".menu-item").forEach((e, t) => {
                                        let n = e.querySelector(".hover-overlay");
                                        n && (n.style.opacity = t === a ? "1" : "0")
                                    }), a
                                });
                                break;
                            case "ArrowDown":
                            case "KeyS":
                                e.preventDefault(), _.hover(), w(e => {
                                    let t = ek.filter(e => !e.disabled),
                                        n = t.findIndex(t => t.id === ek[e].id),
                                        i = n < t.length - 1 ? n + 1 : 0,
                                        a = ek.findIndex(e => e.id === t[i].id);
                                    return document.querySelectorAll(".menu-item").forEach((e, t) => {
                                        let n = e.querySelector(".hover-overlay");
                                        n && (n.style.opacity = t === a ? "1" : "0")
                                    }), a
                                });
                                break;
                            case "Enter":
                            case "Space":
                                var n;
                                e.preventDefault(), (null == (n = ek[f]) ? void 0 : n.disabled) || eM(ek[f], f)
                            }
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [f, ek, _, eM]), (0, a.useEffect)(() => {
                        S.current && S.current.focus();
                        let e = ek.findIndex(e => !e.disabled); - 1 !== e && w(e)
                    }, [ek]), (0, a.useEffect)(() => {
                        let e = () => {
                            let e = C.current,
                                t = E.current;
                            if (!e || !t) return;
                            let n = e.getBoundingClientRect(),
                                i = t.getBoundingClientRect().height,
                                a = n.top + (n.height - i) / 2;
                            a += 8 * !!Y + ef, a = Math.max(eg, Math.min(window.innerHeight - i - ex, a)), N("".concat(Math.round(a), "px")), A(Math.round(n.left)), O(Math.round(n.width)), I(!0)
                        };
                        e();
                        let t = window.setTimeout(e, 50);
                        window.addEventListener("resize", e), window.addEventListener("orientationchange", e);
                        let n = null;
                        return "ResizeObserver" in window && (n = new ResizeObserver(() => e()), C.current && n.observe(C.current), E.current && n.observe(E.current)), () => {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e), window.clearTimeout(t);
                            try {
                                null == n || n.disconnect()
                            } catch (e) {}
                        }
                    }, [c, Y, eg, ex, d, h, g, p, x]), k || H.isLoading) ? (0, i.jsx)(T, {
                        isVisible: !0,
                        progress: H.progress,
                        currentStep: H.currentStep,
                        stepLabel: H.currentStepLabel,
                        estimatedTimeLeft: H.estimatedTimeLeft,
                        onComplete: () => j(!1)
                    }) : (0, i.jsxs)("div", {
                        ref: S,
                        tabIndex: -1,
                        style: {
                            position: "fixed",
                            inset: 0,
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            background: "\n          linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(15,15,25,0.55) 100%),\n          radial-gradient(circle at 30% 20%, rgba(196,30,58,0.1) 0%, transparent 50%),\n          radial-gradient(circle at 70% 80%, rgba(58,30,196,0.08) 0%, transparent 50%)\n        ",
                            backdropFilter: "blur(12px)",
                            zIndex: 1e3,
                            outline: "none",
                            animation: "menuFadeIn 0.8s ease-out"
                        },
                        className: "jsx-2a7c61b783766790",
                        children: [(0, i.jsx)("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                overflow: "hidden",
                                pointerEvents: "none"
                            },
                            className: "jsx-2a7c61b783766790",
                            children: Array.from({
                                length: 8
                            }).map((e, t) => (0, i.jsx)("div", {
                                style: {
                                    position: "absolute",
                                    left: "".concat(20 + 60 * Math.random(), "%"),
                                    top: "".concat(20 + 60 * Math.random(), "%"),
                                    width: 2,
                                    height: 2,
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                    borderRadius: "50%",
                                    animation: "float ".concat(3 + 2 * Math.random(), "s infinite ease-in-out ").concat(2 * Math.random(), "s"),
                                    boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                                },
                                className: "jsx-2a7c61b783766790"
                            }, t))
                        }), (0, i.jsx)("div", {
                            ref: C,
                            style: {
                                position: "absolute",
                                left: K,
                                top: J,
                                width: X,
                                height: $,
                                maxWidth: Q,
                                maxHeight: Z,
                                borderRadius: "18px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0,0,0,.45)",
                                background: "linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.2))",
                                transform: "translateZ(0)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                opacity: +!!z
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.transform = "translateZ(0) scale(1.02)", e.currentTarget.style.boxShadow = "0 25px 80px rgba(0,0,0,.6)"
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.transform = "translateZ(0) scale(1)", e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,.45)"
                            },
                            className: "jsx-2a7c61b783766790",
                            children: (0, i.jsx)("img", {
                                src:"/birthdaycoksmew/images/mainmenu.png",
                                alt: "HEYBLOX WORLD Preview",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    filter: "saturate(1.1) contrast(1.05)",
                                    transition: "filter 0.3s ease"
                                },
                                className: "jsx-2a7c61b783766790"
                            })
                        }), (0, i.jsxs)("div", {
                            style: {
                                position: "absolute",
                                top: ee,
                                left: Y && null !== D ? "".concat(D, "px") : et,
                                transform: "none",
                                textAlign: Y ? "center" : "left",
                                pointerEvents: "none",
                                zIndex: 2,
                                maxWidth: Y ? void 0 : en,
                                width: Y && null !== R ? "".concat(R, "px") : void 0,
                                opacity: +!!z
                            },
                            className: "jsx-2a7c61b783766790",
                            children: [(0, i.jsx)("div", {
                                style: {
                                    fontSize: ei,
                                    fontWeight: "900",
                                    color: "#fff",
                                    textShadow: "\n              0 4px 20px rgba(113,12,210,0.8), \n              0 0 40px rgba(113,12,210,0.4),\n              0 2px 4px rgba(0,0,0,0.8)\n            ",
                                    letterSpacing: eo,
                                    marginBottom: Y ? "0px" : g ? "2px" : "4px",
                                    lineHeight: Y ? "1.05" : void 0,
                                    animation: "titleGlow 3s ease-in-out infinite alternate"
                                },
                                className: "jsx-2a7c61b783766790",
                                children: "HEYBLOX WORLD"
                            }), (0, i.jsx)("div", {
                                style: {
                                    fontSize: ea,
                                    color: "#e6e6e6",
                                    letterSpacing: er,
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 20px rgba(196,30,58,0.35)",
                                    textAlign: "center",
                                    lineHeight: Y ? "1.1" : g ? "1" : void 0,
                                    marginTop: Y ? "10px" : g ? "0px" : void 0,
                                    opacity: .9
                                },
                                className: "jsx-2a7c61b783766790",
                                children: "3D Experience"
                            })]
                        }), (0, i.jsxs)("div", {
                            ref: E,
                            style: {
                                width: el,
                                maxHeight: ec,
                                marginTop: 0,
                                background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(5,5,5,0.99) 100%)",
                                borderRadius: "8px",
                                border: "1px solid rgba(255,255,255,0.1)",
                                boxShadow: "\n            0 0 0 1px rgba(0,0,0,0.9),\n            0 30px 80px rgba(0,0,0,0.9),\n            inset 0 1px 0 rgba(255,255,255,0.03)\n          ",
                                overflow: "hidden",
                                position: "absolute",
                                right: es,
                                top: P,
                                backdropFilter: "blur(10px)",
                                animation: "menuSlideIn 0.6s ease-out 0.2s both",
                                opacity: +!!z
                            },
                            className: "jsx-2a7c61b783766790",
                            children: [(0, i.jsxs)("div", {
                                style: {
                                    background: "linear-gradient(180deg, #710cd2 0%, #4b0b98 100%)",
                                    padding: ed,
                                    borderBottom: "2px solid rgba(113,12,210,0.55)",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                className: "jsx-2a7c61b783766790",
                                children: [(0, i.jsx)("div", {
                                    style: {
                                        color: "#fff",
                                        fontSize: eh,
                                        fontWeight: "800",
                                        textTransform: "uppercase",
                                        letterSpacing: Y ? "1.2px" : "1px",
                                        textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                                        zIndex: 1,
                                        position: "relative"
                                    },
                                    className: "jsx-2a7c61b783766790",
                                    children: "Main Menu"
                                }), (0, i.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "2px",
                                        background: "linear-gradient(90deg, #710cd2 0%, #4b0b98 50%, #710cd2 100%)",
                                        animation: "accentGlow 2s ease-in-out infinite alternate"
                                    },
                                    className: "jsx-2a7c61b783766790"
                                })]
                            }), (0, i.jsx)("div", {
                                style: {
                                    padding: Y ? "12px 0" : "8px 0"
                                },
                                className: "jsx-2a7c61b783766790",
                                children: ek.map((e, t) => {
                                    let n = t === f,
                                        a = e.emphasis,
                                        o = e.disabled;
                                    return (0, i.jsxs)("div", {
                                        onClick: () => eM(e, t),
                                        onMouseEnter: () => !o && eS(t),
                                        onMouseLeave: () => v(null),
                                        style: {
                                            position: "relative",
                                            padding: ep,
                                            margin: "2px 0",
                                            background: n && !o ? "linear-gradient(90deg, rgba(113,12,210,0.9) 0%, rgba(113,12,210,0.25) 70%, transparent 100%)" : "linear-gradient(90deg, rgba(113,12,210,0.12) 0%, rgba(113,12,210,0.05) 100%)",
                                            borderLeft: n && !o ? "4px solid #710cd2" : "4px solid rgba(113,12,210,0.35)",
                                            color: o ? "#444" : n ? "#fff" : a ? "#d1b3ff" : "#bbb",
                                            fontSize: eu,
                                            fontWeight: n || a ? "600" : "400",
                                            cursor: o ? "not-allowed" : "pointer",
                                            transition: "transform 120ms ease, color 120ms ease, opacity 120ms ease, border-color 120ms ease",
                                            textTransform: "uppercase",
                                            letterSpacing: Y ? "0.6px" : "0.4px",
                                            userSelect: "none",
                                            opacity: o ? .3 : 1,
                                            transform: "translateX(".concat(n && !o ? "6px" : "0", ") scale(").concat(n && !o ? "1.02" : "1", ")"),
                                            overflow: "hidden",
                                            willChange: "transform"
                                        },
                                        className: "jsx-2a7c61b783766790 " + "menu-item".concat(n ? " selected" : ""),
                                        children: [n && !o && (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                left: "8px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                width: "0",
                                                height: "0",
                                                borderTop: "8px solid transparent",
                                                borderBottom: "8px solid transparent",
                                                borderLeft: "12px solid #710cd2",
                                                filter: "drop-shadow(0 0 4px rgba(113,12,210,0.8))",
                                                animation: "indicatorPulse 1.5s ease-in-out infinite alternate"
                                            },
                                            className: "jsx-2a7c61b783766790"
                                        }), (0, i.jsxs)("div", {
                                            style: {
                                                paddingLeft: n && !o ? em : "0",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                transition: "padding-left 0.2s ease"
                                            },
                                            className: "jsx-2a7c61b783766790",
                                            children: [e.icon && (0, i.jsx)("span", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: Y ? 20 : 18,
                                                    height: Y ? 20 : 18,
                                                    opacity: .9,
                                                    transform: "scale(".concat(n && !o ? 1.06 : 1, ")"),
                                                    transition: "transform 0.2s ease"
                                                },
                                                className: "jsx-2a7c61b783766790",
                                                children: e.icon
                                            }), (0, i.jsxs)("span", {
                                                style: {
                                                    flex: 1
                                                },
                                                className: "jsx-2a7c61b783766790",
                                                children: [e.label, o && (0, i.jsx)("span", {
                                                    style: {
                                                        fontSize: "11px",
                                                        marginLeft: "8px",
                                                        opacity: .5
                                                    },
                                                    className: "jsx-2a7c61b783766790",
                                                    children: "(Coming Soon)"
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 80%)",
                                                pointerEvents: "none",
                                                animation: n ? "shimmer 2s ease-in-out infinite" : void 0,
                                                opacity: +!!n,
                                                willChange: "opacity"
                                            },
                                            className: "jsx-2a7c61b783766790 hover-overlay"
                                        }), a && !o && n && (0, i.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: "linear-gradient(90deg, rgba(113,12,210,0.15) 0%, transparent 60%)",
                                                pointerEvents: "none",
                                                animation: "emphasisGlow 1.5s ease-in-out infinite alternate"
                                            },
                                            className: "jsx-2a7c61b783766790"
                                        })]
                                    }, e.id)
                                })
                            }), !c && (0, i.jsxs)("div", {
                                style: {
                                    borderTop: "1px solid rgba(255,255,255,0.08)",
                                    padding: "16px 28px",
                                    background: "rgba(0,0,0,0.4)",
                                    fontSize: "12px",
                                    color: "#666",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                className: "jsx-2a7c61b783766790",
                                children: [(0, i.jsx)("span", {
                                    className: "jsx-2a7c61b783766790",
                                    children: "\uD83C\uDFAE Press ENTER to start your adventure"
                                }), (0, i.jsx)("span", {
                                    style: {
                                        opacity: .6
                                    },
                                    className: "jsx-2a7c61b783766790",
                                    children: "v1.0.0"
                                })]
                            })]
                        }), (0, i.jsx)(B(), {
                            id: "2a7c61b783766790",
                            children: "@keyframes menuFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes menuSlideIn{0%{transform:translatex(50px);opacity:0}100%{transform:translatex(0);opacity:1}}@keyframes titleGlow{0%{text-shadow:0 4px 20px rgba(113,12,210,.8),0 0 40px rgba(113,12,210,.4),0 2px 4px rgba(0,0,0,.8)}100%{text-shadow:0 4px 25px rgba(113,12,210,1),0 0 50px rgba(113,12,210,.6),0 2px 4px rgba(0,0,0,.8)}}@keyframes accentGlow{0%{box-shadow:0 0 10px rgba(113,12,210,.5)}100%{box-shadow:0 0 20px rgba(113,12,210,.8)}}@keyframes indicatorPulse{0%{opacity:.8;transform:translatey(-50%)scale(1)}100%{opacity:1;transform:translatey(-50%)scale(1.1)}}@keyframes shimmer{0%{background-position:-200%0}100%{background-position:200%0}}@keyframes emphasisGlow{0%{opacity:.8}100%{opacity:1}}@keyframes float{0%,100%{transform:translatey(0px)rotate(0deg);opacity:.3}50%{transform:translatey(-15px)rotate(180deg);opacity:.8}}@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.05);opacity:.9}}"
                        })]
                    })
                },
                A = () => {
                    let e = (0, a.useRef)(null),
                        [t, w] = (0, a.useState)(!1),
                        L = (0, a.useRef)(null),
                        [I, B] = (0, a.useState)(!1),
                        [F, A] = (0, a.useState)(!1),
                        [R, O] = (0, a.useState)(!1),
                        [_, V] = (0, a.useState)(!0),
                        [q, U] = (0, a.useState)(!1),
                        [W, H] = (0, a.useState)(!1),
                        [G, Y] = (0, a.useState)(!1),
                        [K, J] = (0, a.useState)(!1),
                        [X, $] = (0, a.useState)(!1),
                        Q = (0, a.useRef)(null),
                        [Z, ee] = (0, a.useState)(!1),
                        [et, en] = (0, a.useState)(!1),
                        [ei, ea] = (0, a.useState)({
                            progress: 0,
                            currentStep: "init",
                            stepLabel: "Preparing world...",
                            estimatedTimeLeft: 1
                        }),
                        eo = (0, a.useRef)(null),
                        [er, es] = (0, a.useState)(!1),
                        [el, ec] = (0, a.useState)({}),
                        ed = (0, a.useRef)(null),
                        eh = (0, a.useRef)(null),
                        ep = (0, a.useRef)(null),
                        eu = (0, a.useRef)(null),
                        em = (0, a.useRef)(null),
                        eg = (0, a.useRef)(null),
                        ex = (0, a.useRef)(null),
                        ef = (0, a.useRef)(null),
                        ew = (0, a.useRef)(!1),
                        ey = (0, a.useRef)(null),
                        ev = (0, a.useRef)(.07),
                        eb = (0, a.useRef)(0),
                        ek = (0, a.useRef)(null),
                        ej = (0, a.useRef)(null);
                    (0, a.useRef)(null), (0, a.useRef)([]);
                    let eM = (0, a.useRef)(null),
                        eS = (0, a.useRef)(null),
                        eC = (0, a.useRef)(!1),
                        eE = (0, a.useRef)(!1),
                        eP = (0, a.useRef)(!1),
                        eN = (0, a.useRef)(null),
                        eL = (0, a.useRef)(null),
                        ez = (0, a.useRef)(null),
                        eI = (0, a.useRef)(null),
                        eB = (0, a.useRef)(null),
                        eT = (0, a.useRef)(null),
                        eF = (0, a.useRef)(null),
                        eD = (0, a.useRef)(null),
                        eA = (0, a.useRef)(null),
                        eR = (0, a.useRef)(null),
                        eO = (0, a.useRef)(null),
                        e_ = (0, a.useRef)(null),
                        eV = (0, a.useRef)(null),
                        [eq, eU] = (0, a.useState)(!1),
                        eW = (0, a.useRef)(!1),
                        [eH, eG] = (0, a.useState)(!1),
                        [eY, eK] = (0, a.useState)({
                            movement: {
                                x: 0,
                                y: 0
                            },
                            look: {
                                x: 0,
                                y: 0
                            },
                            jump: !1
                        });
                    (0, a.useEffect)(() => {
                        let e = () => {
                            var e, t;
                            let n = navigator.userAgent || "",
                                i = /(Android|iPhone|iPad|iPod|IEMobile|WPDesktop|Mobi)/i.test(n),
                                a = navigator.maxTouchPoints > 0 || "ontouchstart" in window,
                                o = !1;
                            try {
                                o = window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches
                            } catch (e) {}
                            let r = i || a && o;
                            eU(r), eW.current = r;
                            let s = /iPhone/i.test(n),
                                l = window.devicePixelRatio || 1,
                                c = (null == (e = window.screen) ? void 0 : e.width) || window.innerWidth,
                                d = (null == (t = window.screen) ? void 0 : t.height) || window.innerHeight,
                                h = Math.round(c * l),
                                p = Math.round(d * l),
                                u = (e, t, n) => Math.abs(e - t) <= n,
                                m = u(h, 1170, 30) && u(p, 2532, 60) || u(h, 2532, 60) && u(p, 1170, 30);
                            eG(s && l >= 2.9 && l <= 3.1 && m)
                        };
                        return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                        }
                    }, []);
                    let eJ = (0, a.useCallback)(e => {
                            if (eK(e), (0 !== e.look.x || 0 !== e.look.y) && console.log("\uD83C\uDFAE ROBLOX WORLD RECEIVED MOBILE INPUT:", e), ej.current) {
                                var t, n, i, a;
                                console.log("\uD83C\uDFAF APPLYING TO PLAYER CONTROLLER:", !!ej.current), null == (t = (n = ej.current).setMobileInput) || t.call(n, e), null == (i = (a = ej.current).setMobileInputActive) || i.call(a, !0)
                            } else console.warn("❌ PlayerController not available yet")
                        }, []),
                        eX = (0, a.useCallback)(e => {
                            if (eq) switch (e) {
                            case "bookshelf":
                                e3();
                                break;
                            case "tv":
                                e6(), ec(e => ({
                                    ...e,
                                    tv: {
                                        ...e.tv || {
                                            position: {
                                                x: 0,
                                                y: 0
                                            },
                                            text: "",
                                            icon: ""
                                        },
                                        visible: !1
                                    }
                                }));
                                break;
                            case "laptop":
                                e4();
                                break;
                            case "lamp":
                                e8();
                                break;
                            case "bedsideLamp1":
                                e9();
                                break;
                            case "bedsideLamp2":
                                e7();
                                break;
                            case "window":
                                te()
                            }
                        }, [eq, el]);
                    (0, a.useEffect)(() => {
                        let t, i, a, C, E, P, N, z;
                        if (!e.current) return;
                        let I = [],
                            B = new o.zD7,
                            T = !1,
                            F = 1 / 60,
                            D = Math.min(window.devicePixelRatio, 1),
                            A = 0,
                            R = 0,
                            O = e => {
                                let t = new o.Pq0(0, 0, -5),
                                    n = new o.G_z({
                                        color: 0xf7f3e6
                                    });
                                _(8, 3, .3, new o.Pq0(t.x, 1.5, t.z - 3), n, e), _(6, 3, .3, new o.Pq0(t.x - 4, 1.5, t.z), n, e, Math.PI / 2), _(6, 3, .3, new o.Pq0(t.x + 4, 1.5, t.z), n, e, Math.PI / 2);
                                let a = t.z + 3,
                                    r = t.x - .75,
                                    l = t.x - 4,
                                    c = l + .4 + 1,
                                    d = c - 1,
                                    h = c + 1,
                                    p = Math.max(0, d - l);
                                p > .01 && _(p, 3, .3, new o.Pq0(l + p / 2, 1.5, a), n, e);
                                let u = Math.max(0, r - h);
                                u > .01 && _(u, 3, .3, new o.Pq0(h + u / 2, 1.5, a), n, e);
                                let m = Math.max(0, .6999999999999997);
                                m > .01 && _(2, m, .3, new o.Pq0(c, 3 - m / 2, a), n, e);
                                let g = Math.max(0, .9);
                                g > .01 && _(2, g, .3, new o.Pq0(c, g / 2, a), n, e);
                                _(3.25, 3, .3, new o.Pq0(t.x + 2.375, 1.5, t.z + 3), n, e), _(1.5, 3 - 2.2, .3, new o.Pq0(t.x, 3 - (3 - 2.2) / 2, t.z + 3), n, e), V(1.5, 1.2, new o.Pq0(t.x + 4, 1.5, t.z)), q(new o.Pq0(t.x, 1.1, t.z + 3 - .15));
                                let x = Math.PI / 4,
                                    f = 3.5 * Math.tan(x),
                                    w = new o.G_z({
                                        color: 6636321,
                                        side: o.$EB,
                                        depthWrite: !0,
                                        depthTest: !0
                                    }),
                                    y = Math.sqrt(Math.pow(3.5, 2) + Math.pow(f, 2)),
                                    v = new o.iNn(9, .2, y),
                                    b = new o.eaF(v, w);
                                b.rotation.x = x, b.position.set(t.x, 3 + f / 2, t.z + 1.75), b.castShadow = !0, b.receiveShadow = !0, i.add(b);
                                let k = new s.az(new s.eB(4.5, .1, y / 2)),
                                    j = new s.nB({
                                        mass: 0,
                                        material: e
                                    });
                                j.addShape(k), j.position.copy(b.position), j.quaternion.copy(b.quaternion), C.addBody(j);
                                let M = new o.iNn(9, .2, y),
                                    S = new o.eaF(M, w);
                                S.rotation.x = -x, S.position.set(t.x, 3 + f / 2, t.z - 1.75), S.castShadow = !0, S.receiveShadow = !0, i.add(S);
                                let E = new s.az(new s.eB(4.5, .1, y / 2)),
                                    P = new s.nB({
                                        mass: 0,
                                        material: e
                                    });
                                P.addShape(E), P.position.copy(S.position), P.quaternion.copy(S.quaternion), C.addBody(P);
                                let N = new o.ypk;
                                N.moveTo(-3.5, 0), N.lineTo(3.5, 0), N.lineTo(0, f), N.lineTo(-3.5, 0);
                                let L = new o.QCA(N, {
                                        depth: .2,
                                        bevelEnabled: !1
                                    }),
                                    z = new o.eaF(L, w);
                                z.rotation.y = Math.PI / 2, z.position.set(t.x - 4.5 - .1, 3, t.z), z.castShadow = !0, i.add(z);
                                let I = new o.eaF(L, w);
                                I.rotation.y = -Math.PI / 2, I.position.set(t.x + 4.5 + .1, 3, t.z), I.castShadow = !0, i.add(I);
                                let B = new o.Ho_(.08, .08, 9.2, 8),
                                    T = new o._4j({
                                        color: 4473924,
                                        metalness: .7,
                                        roughness: .3
                                    }),
                                    F = new o.eaF(B, T);
                                F.rotation.z = Math.PI / 2, F.position.set(t.x, 2.9, t.z + 3.5 + .1), F.castShadow = !0, i.add(F);
                                let D = new o.eaF(B, T);
                                D.rotation.z = Math.PI / 2, D.position.set(t.x, 2.9, t.z - 3.5 - .1), D.castShadow = !0, i.add(D)
                            },
                            _ = function (e, t, n, a, r, l) {
                                let c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                    d = new o.iNn(e, t, n),
                                    h = new o.eaF(d, r);
                                h.position.copy(a), h.rotation.y = c, h.castShadow = !0, h.receiveShadow = !0, i.add(h);
                                let p = new s.az(new s.eB(e / 2, t / 2, n / 2)),
                                    u = new s.nB({
                                        mass: 0,
                                        material: l
                                    });
                                u.addShape(p), u.position.copy(h.position), u.quaternion.copy(h.quaternion), C.addBody(u)
                            },
                            V = (e, t, n) => {
                                let a = new o._4j({
                                        color: 0xffffff
                                    }),
                                    r = new o._4j({
                                        color: 0xadd8e6,
                                        opacity: .5,
                                        transparent: !0
                                    }),
                                    s = new o.eaF(new o.iNn(e, .1, .1), a);
                                s.position.set(n.x, n.y + t / 2 - .05, n.z), s.rotation.y = Math.PI / 2, i.add(s);
                                let l = new o.eaF(new o.iNn(e, .1, .1), a);
                                l.position.set(n.x, n.y - t / 2 + .05, n.z), l.rotation.y = Math.PI / 2, i.add(l);
                                let c = new o.eaF(new o.iNn(.1, t - .2, .1), a);
                                c.position.set(n.x, n.y, n.z - e / 2 + .05), c.rotation.y = Math.PI / 2, i.add(c);
                                let d = new o.eaF(new o.iNn(.1, t - .2, .1), a);
                                d.position.set(n.x, n.y, n.z + e / 2 - .05), d.rotation.y = Math.PI / 2, i.add(d);
                                let h = new o.eaF(new o.bdM(e - .2, t - .2), r);
                                h.position.copy(n), h.rotation.y = Math.PI / 2, i.add(h)
                            },
                            q = e => {
                                let t = new o._4j({
                                        color: 9127187,
                                        roughness: .7,
                                        metalness: .1
                                    }),
                                    n = new o._4j({
                                        color: 0xffffff
                                    }),
                                    a = new o._4j({
                                        color: 0xffd700,
                                        metalness: .8,
                                        roughness: .2
                                    }),
                                    r = new o._4j({
                                        color: 8900331,
                                        transparent: !0,
                                        opacity: .7,
                                        metalness: .1,
                                        roughness: .1
                                    }),
                                    l = new o.YJl;
                                l.position.copy(e), i.add(l);
                                let c = new o.iNn(1.45, 2.15, .1),
                                    d = new o.eaF(c, t);
                                d.position.set(0, 0, 0), d.castShadow = !0, d.receiveShadow = !0, l.add(d);
                                let h = new o.bdM(.7975, .4),
                                    p = new o.eaF(h, r);
                                p.position.set(0, .5375, .060000000000000005), l.add(p);
                                let u = new o.eaF(new o.iNn(.8574999999999999, .03, .03), n);
                                u.position.set(0, .7375, .07), l.add(u);
                                let m = new o.eaF(new o.iNn(.8574999999999999, .03, .03), n);
                                m.position.set(0, .33749999999999997, .07), l.add(m);
                                let g = new o.eaF(new o.iNn(.03, .4, .03), n);
                                g.position.set(-.39875, .5375, .07), l.add(g);
                                let x = new o.eaF(new o.iNn(.03, .4, .03), n);
                                x.position.set(.39875, .5375, .07), l.add(x);
                                let f = new o.Gu$(.05, 8, 8),
                                    w = new o.eaF(f, a);
                                w.position.set(.5449999999999999, -.1, .08), w.castShadow = !0, l.add(w);
                                let y = new o.iNn(1.16, .86, .02),
                                    v = new o.eaF(y, t);
                                v.position.set(0, -.5375, .060000000000000005), l.add(v);
                                let b = new o.iNn(1.8, .15, .3),
                                    k = new o.eaF(b, n);
                                k.position.set(e.x, e.y + 1.1 + .075, e.z), k.castShadow = !0, i.add(k);
                                let j = new o.iNn(.15, 2.2, .3),
                                    M = new o.eaF(j, n);
                                M.position.set(e.x - .75 - .075, e.y, e.z), M.castShadow = !0, i.add(M);
                                let S = new o.iNn(.15, 2.2, .3),
                                    E = new o.eaF(S, n);
                                E.position.set(e.x + .75 + .075, e.y, e.z), E.castShadow = !0, i.add(E);
                                let P = new o.iNn(1.5, .02, .05),
                                    N = new o.eaF(P, n);
                                N.position.set(e.x, e.y + 1.1 - .01, e.z + .05 + .025), i.add(N);
                                let L = new o.iNn(.02, 2.18, .05),
                                    z = new o.eaF(L, n);
                                z.position.set(e.x - .75 + .01, e.y - .01, e.z + .05 + .025), i.add(z);
                                let B = new o.iNn(.02, 2.18, .05),
                                    T = new o.eaF(B, n);
                                T.position.set(e.x + .75 - .01, e.y - .01, e.z + .05 + .025), i.add(T);
                                let F = new s.az(new s.eB(.725, 1.075, .05)),
                                    D = new s.nB({
                                        mass: 18
                                    });
                                D.addShape(F), D.position.set(e.x, e.y, e.z), D.linearDamping = .4, D.angularDamping = .4, C.addBody(D);
                                let A = new s.nB({
                                    mass: 0
                                });
                                A.position.set(e.x - .725, e.y, e.z), C.addBody(A);
                                let R = new s.Lk(D, A, {
                                    pivotA: new s.eB(-.725, 0, 0),
                                    pivotB: new s.eB(0, 0, 0),
                                    axisA: new s.eB(0, 1, 0),
                                    axisB: new s.eB(0, 1, 0)
                                });
                                if (C.addConstraint(R), R.setLimits) try {
                                    R.setLimits(-Math.PI / 2, Math.PI / 2)
                                } catch (e) {}
                                D.addEventListener("collide", e => {
                                    if (null == e ? void 0 : e.contact) {
                                        var t, n;
                                        let i = new s.eB;
                                        null == (t = (n = e.contact).getImpactVelocityAlongNormal) || t.call(n, i), D.angularDamping = .2, setTimeout(() => {
                                            D.angularDamping = .4
                                        }, 300)
                                    }
                                }), I.push({
                                    mesh: l,
                                    body: D
                                })
                            },
                            U = (e, t) => {
                                let n = new o._4j({
                                        color: 9127187
                                    }),
                                    a = new o._4j({
                                        color: 0xffd700
                                    }),
                                    r = new o.iNn(.6, .8, .4),
                                    l = new o.eaF(r, n);
                                l.position.set(e.x, e.y + .4, e.z), l.castShadow = !0, l.receiveShadow = !0, i.add(l);
                                let c = new s.az(new s.eB(.25, .3, .15)),
                                    d = new s.nB({
                                        mass: 0,
                                        material: t
                                    });
                                d.addShape(c), d.position.set(e.x, e.y + .3, e.z), C.addBody(d);
                                let h = new o.iNn(.5, .15, .35),
                                    p = new o.eaF(h, n);
                                p.position.set(e.x, e.y + .5, e.z + .02), p.castShadow = !0, i.add(p);
                                let u = new o.Gu$(.02, 8, 8),
                                    m = new o.eaF(u, a);
                                m.position.set(e.x, e.y + .5, e.z + .22), i.add(m)
                            },
                            W = () => {
                                var e, n;
                                a.aspect = window.innerWidth / window.innerHeight, a.updateProjectionMatrix(), t.setSize(window.innerWidth, window.innerHeight), null == (e = eM.current) || e.setSize(window.innerWidth, window.innerHeight);
                                try {
                                    null == (n = eS.current) || n.material.uniforms.resolution.value.set(1 / (window.innerWidth * t.getPixelRatio()), 1 / (window.innerHeight * t.getPixelRatio()))
                                } catch (e) {}
                            };
                        window.addEventListener("resize", W);
                        let H = 0,
                            G = () => {
                                var e, n, o, r, l, c;
                                z = requestAnimationFrame(G);
                                let d = B.getDelta();
                                if (eC.current) {
                                    try {
                                        t.render(i, a)
                                    } catch (e) {}
                                    return
                                }
                                if (A += d, ++R >= 60) {
                                    let i = R / A;
                                    if (i < 50 && D > .7) {
                                        D = Math.max(.7, D - .1), t.setPixelRatio(D);
                                        try {
                                            null == (e = eS.current) || e.material.uniforms.resolution.value.set(1 / (window.innerWidth * t.getPixelRatio()), 1 / (window.innerHeight * t.getPixelRatio()))
                                        } catch (e) {}
                                    } else if (i > 70 && D < 1) {
                                        D = Math.min(1, D + .05), t.setPixelRatio(D);
                                        try {
                                            null == (n = eS.current) || n.material.uniforms.resolution.value.set(1 / (window.innerWidth * t.getPixelRatio()), 1 / (window.innerHeight * t.getPixelRatio()))
                                        } catch (e) {}
                                    }
                                    A = 0, R = 0
                                }
                                if (P) {
                                    let e = P.position;
                                    T = e.x > -4 && e.x < 4 && e.z > -8 && e.z < -2
                                }
                                let h = Math.min(d, 1 / 30);
                                C.step(F, h, 2), N && N.updateMovement(d);
                                try {
                                    null == (o = u.Television.update) || o.call(u.Television, d)
                                } catch (e) {}
                                try {
                                    null == (r = v.update) || r.call(v)
                                } catch (e) {}
                                try {
                                    null == (l = k.update) || l.call(k)
                                } catch (e) {}
                                try {
                                    null == (c = j.InteractiveWindow.update) || c.call(j.InteractiveWindow, d)
                                } catch (e) {}
                                for (let e of ((() => {
                                        if (!P || !a || !t) return;
                                        let e = P.position,
                                            n = [],
                                            i = function (t, i, o, r, s) {
                                                let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "\uD83D\uDCD6";
                                                if (!t && !i) return;
                                                let c = t ? t.position : i,
                                                    d = Math.sqrt(Math.pow(e.x - c.x, 2) + Math.pow(e.z - c.z, 2));
                                                if (d <= o) {
                                                    let e = (null != i ? i : c).clone().project(a),
                                                        t = (.5 * e.x + .5) * window.innerWidth,
                                                        o = (-.5 * e.y + .5) * window.innerHeight;
                                                    e.z < 1 && e.z > 0 && n.push({
                                                        key: r,
                                                        distance: d,
                                                        position: {
                                                            x: Math.round(t),
                                                            y: Math.round(o)
                                                        },
                                                        text: s,
                                                        icon: l
                                                    })
                                                }
                                            };
                                        if (ez.current) try {
                                            var o;
                                            (null == (o = u.Television.getState) ? void 0 : o.call(u.Television)) !== !0 && i(null, ez.current, 3, "tv", "Klik untuk operasikan TV", "\uD83D\uDCFA")
                                        } catch (e) {
                                            i(null, ez.current, 3, "tv", "Klik untuk operasikan TV", "\uD83D\uDCFA")
                                        }
                                        i(eN.current, eL.current, 2.5, "bookshelf", "Klik untuk baca buku", "\uD83D\uDCD6"), i(eI.current, eB.current, 1.8, "laptop", "Klik untuk buka laptop", "\uD83D\uDCBB"), i(eT.current, eF.current, 2, "lamp", "Klik untuk nyalakan lampu", "\uD83D\uDCA1"), eD.current && i(null, eD.current, 2.5, "bedsideLamp1", "Klik untuk nyalakan lampu", "\uD83D\uDECF️"), eA.current && i(null, eA.current, 2.5, "bedsideLamp2", "Klik untuk nyalakan lampu", "\uD83D\uDECF️"), eR.current && i(null, eR.current, 2.8, "window", "Klik untuk buka jendela", "\uD83E\uDE9F");
                                        let r = {};
                                        if (n.length > 0) {
                                            n.sort((e, t) => e.distance - t.distance);
                                            let e = n[0];
                                            r[e.key] = {
                                                visible: !0,
                                                position: e.position,
                                                text: e.text,
                                                icon: e.icon
                                            }
                                        }
                                        ec(r)
                                    })(), ++H % (T ? 180 : 120) == 0 && (t.shadowMap.needsUpdate = !0), I)) e.body.sleepState === s.nB.AWAKE && (e.mesh.position.copy(e.body.position), e.mesh.quaternion.copy(e.body.quaternion));
                                t.render(i, a)
                            };
                        return (() => {
                            var z, I, B;
                            (C = new s.HK).gravity.set(0, -35, 0), C.broadphase = new s.EX(C), C.allowSleep = !0, C.defaultContactMaterial.friction = .4, C.defaultContactMaterial.restitution = .2, (i = new o.Z58).background = new o.Q1f(8900331), i.fog = new o.jUj(8900331, 0, 50), ed.current = i, a = new o.ubm(75, window.innerWidth / window.innerHeight, .02, 1e3);
                            try {
                                a.updateProjectionMatrix()
                            } catch (e) {}
                            a.position.set(0, 1.8, 10);
                            let T = new o.Pf$;
                            a.add(T), eg.current = T;
                            try {
                                let e = new o.fP5(T);
                                a.add(e), ef.current = e
                            } catch (e) {}
                            let F = new o.$p8(4210752, .4);
                            i.add(F), ep.current = F;
                            let A = new o.ZyN(0xffeaa7, 1.8);
                            A.position.set(15, 25, 10), A.castShadow = !0, A.shadow.mapSize.width = 512, A.shadow.mapSize.height = 512, A.shadow.camera.near = 1, A.shadow.camera.far = 50, A.shadow.camera.left = -20, A.shadow.camera.right = 20, A.shadow.camera.top = 20, A.shadow.camera.bottom = -20, A.shadow.bias = -.001, i.add(A), eu.current = A;
                            let R = new o.$p8(0xfff2e6, .3);
                            i.add(R), em.current = R;
                            let _ = new o.HiM(0xfff8dc, .8, 15);
                            _.position.set(0, 2.8, 0), _.castShadow = !1, i.add(_), window.ceilingLight = _, (t = new r.JeP({
                                antialias: !0,
                                powerPreference: "high-performance",
                                stencil: !1,
                                alpha: !1,
                                logarithmicDepthBuffer: !0
                            })).setSize(window.innerWidth, window.innerHeight), t.setPixelRatio(D), t.shadowMap.enabled = !0, t.shadowMap.type = o.QP0, t.shadowMap.autoUpdate = !1, t.outputColorSpace = o.er$, t.toneMapping = o.Mjd, t.toneMappingExposure = 1.4;
                            let V = new c.s(t),
                                q = new d.A(i, a);
                            q.clearAlpha = 0, V.addPass(q);
                            let W = new h.p(p.o);
                            (() => {
                                let e = t.getPixelRatio();
                                W.material.uniforms.resolution.value.set(1 / (window.innerWidth * e), 1 / (window.innerHeight * e))
                            })(), V.addPass(W), eM.current = V, eS.current = W, t.sortObjects = !0, null == (z = e.current) || z.appendChild(t.domElement), eh.current = t, L.current = E = new l.Z(a, t.domElement), E.addEventListener("lock", async () => {
                                if (!eq) {
                                    w(!0), ee(!1), $(!1);
                                    let e = document.getElementById("crosshair");
                                    e && (e.style.display = "block")
                                }
                                try {
                                    var e;
                                    await (null == (e = eg.current) ? void 0 : e.context.resume())
                                } catch (e) {}
                            }), E.addEventListener("unlock", () => {
                                if (!eq) {
                                    w(!1);
                                    let e = document.getElementById("crosshair");
                                    e && (e.style.display = "none");
                                    try {
                                        !eE.current || eC.current || eP.current || ee(!0)
                                    } catch (e) {}
                                }
                                if (eq) {
                                    let e = document.getElementById("crosshair");
                                    e && (e.style.display = "none"), w(!1)
                                }
                            }), i.add(null != (B = E.object) ? B : E.getObject()), null == (I = E.connect) || I.call(E);
                            let H = () => {
                                    let e = document.pointerLockElement === t.domElement;
                                    if (eq || w(!!e), !eq) {
                                        let t = document.getElementById("crosshair");
                                        t && (t.style.display = e ? "block" : "none")
                                    }
                                },
                                G = e => {
                                    console.warn("PointerLock: request failed or aborted", e), w(!1)
                                };
                            eO.current = H, e_.current = G, document.addEventListener("pointerlockchange", H), document.addEventListener("pointerlockerror", G);
                            let Y = "pointerLockElement" in document && "requestPointerLock" in t.domElement,
                                K = async e => {
                                    if (eW.current) return void console.log("Mobile detected: skipping pointer lock, using virtual joystick");
                                    try {
                                        if (e && !1 === e.isTrusted) return
                                    } catch (e) {}
                                    if (!Y) return void console.warn("PointerLock API tidak didukung di lingkungan ini.");
                                    try {
                                        var t;
                                        await (null == (t = eg.current) ? void 0 : t.context.resume())
                                    } catch (e) {}
                                    if (!E.isLocked) try {
                                        E.lock()
                                    } catch (e) {
                                        console.warn("PointerLock lock() gagal:", e)
                                    }
                                };
                            eV.current = K, t.domElement.addEventListener("click", K);
                            let J = (() => {
                                var e;
                                let t = new s.im("groundMaterial"),
                                    n = new s.im("playerMaterial"),
                                    r = new s.im("wallMaterial"),
                                    l = new s.QE(t, n, {
                                        friction: .1,
                                        restitution: .1,
                                        contactEquationStiffness: 1e8,
                                        contactEquationRelaxation: 4
                                    });
                                C.addContactMaterial(l);
                                let c = new s.QE(r, n, {
                                    friction: 0,
                                    restitution: .1,
                                    contactEquationStiffness: 1e8,
                                    contactEquationRelaxation: 4
                                });
                                C.addContactMaterial(c);
                                let d = new s.iy(.5);
                                (P = new s.nB({
                                    mass: 70,
                                    material: n
                                })).addShape(d), P.position.set(0, 2, 2), P.linearDamping = .05, P.angularDamping = .8, P.fixedRotation = !0, null == (e = P.updateMassProperties) || e.call(P), C.addBody(P), a.position.copy(P.position), a.position.y += .8, (e => {
                                    let t = (t, n, i) => {
                                        let a = e.sampleRate,
                                            o = Math.max(1, Math.floor(t / 1e3 * a)),
                                            r = e.createBuffer(1, o, a),
                                            s = r.getChannelData(0);
                                        for (let e = 0; e < o; e++) {
                                            let t = e / a,
                                                o = Math.exp(-i * t),
                                                r = (.4 * Math.sin(2 * Math.PI * n * t) + (2 * Math.random() - 1) * .12) * o;
                                            s[e] = r
                                        }
                                        return r
                                    };
                                    return t(90, 70, 10), t(100, 85, 9), t(80, 60, 11)
                                })(eg.current.context), ej.current = N = new S(P, a, E, C, {
                                    listener: eg.current,
                                    loopBuffer: void 0
                                }), (async () => {
                                    try {
                                        let e = eg.current.context;
                                        try {
                                            let t = await fetch("/audio/footsteps/loop.mp3", {
                                                cache: "no-cache"
                                            });
                                            if (t.ok) {
                                                let n = await t.arrayBuffer(),
                                                    i = await new Promise(t => {
                                                        try {
                                                            e.decodeAudioData(n.slice(0), e => t(e), () => t(null))
                                                        } catch (e) {
                                                            t(null)
                                                        }
                                                    });
                                                i && i.duration > .2 && (ex.current = i, N.setFootstepLoopBuffer(i))
                                            }
                                        } catch (e) {}
                                    } catch (e) {}
                                })();
                                let h = new o.bdM(200, 200),
                                    p = new o.G_z({
                                        color: 2263842
                                    }),
                                    u = new o.eaF(h, p);
                                u.rotation.x = -Math.PI / 2, u.receiveShadow = !0, i.add(u);
                                let m = new s.Zc,
                                    g = new s.nB({
                                        mass: 0,
                                        material: t
                                    });
                                return g.addShape(m), g.quaternion.setFromAxisAngle(new s.eB(1, 0, 0), -Math.PI / 2), C.addBody(g), O(r), r
                            })();
                            (e => {
                                let r = new o.Pq0(0, 0, -5);
                                x.createCssWoodFloor(i, r, 8, 6);
                                let l = r.x + 4 - .15,
                                    c = l - .06 - .005;
                                u.Television.create(i, new o.Pq0(c, 1.5, r.z), C, e, void 0, a, E, -Math.PI / 2, 1.35, N, t), ez.current = new o.Pq0(c - .5, 1.5, r.z);
                                let d = r.z + 3 - .7,
                                    h = r.z - 3 + .7,
                                    p = r.x - 4 + .7;
                                U(new o.Pq0(p, 0, d), e), m.BedsideLamp.create(i, new o.Pq0(p, .8, d), a, E), eD.current = new o.Pq0(p, 1.2, d), U(new o.Pq0(p, 0, h), e), m.BedsideLamp.create(i, new o.Pq0(p, .8, h), a, E), eA.current = new o.Pq0(p, 1.2, h);
                                let w = r.x - 4 + .15 + .001,
                                    S = new o.Pq0(w, 1.5, r.z);
                                b.create(i, S, 1, Math.PI / 2, {
                                    fitWidth: 5.6,
                                    fitHeight: 2.95,
                                    margin: 0
                                });
                                let P = (d + h) / 2,
                                    L = r.x - 4 + .15,
                                    z = new o.Pq0(L + .01 + 1.8199999999999998, 0, P),
                                    I = g.create(i, z, .7, Math.PI / 2),
                                    B = new s.nB({
                                        mass: 0,
                                        material: e
                                    }),
                                    T = new s.az(new s.eB(1.4, .9099999999999999 / 2, 1.75));
                                B.addShape(T);
                                let F = new s.az(new s.eB(.0875, .7, .77));
                                B.addShape(F, new s.eB(0, .245, .06999999999999984)), B.position.set(I.position.x, .9099999999999999 / 2, I.position.z);
                                let D = new s.PT;
                                D.setFromAxisAngle(new s.eB(0, 1, 0), Math.PI / 2), B.quaternion.copy(D), C.addBody(B);
                                let A = r.z,
                                    R = new o.Pq0(l - .25 - 1.8, 0, A);
                                x.createTileCarpet(i, R, 3.6, 2.2, {
                                    orientation: "horizontal",
                                    baseColor: "#ffffff",
                                    lineColor: "#000000"
                                });
                                let O = r.z - 3 + .15,
                                    _ = r.x - 4 + .15,
                                    V = new o.Pq0(_ + 2.4, 1.6, O + .051);
                                v.create(i, V, .38);
                                let q = (d + h) / 2;
                                k.create(i, new o.Pq0(_ + .052, 2.4, q), .25, Math.PI / 2);
                                let W = r.z + 3 - .15,
                                    H = r.x + .75 + .15 + .8 + .8999999999999999,
                                    G = W - .06 - .4125,
                                    Y = new o.Pq0(H, 0, G);
                                f.create(i, Y, .15, C, e, Math.PI);
                                let K = r.x - 4,
                                    J = new o.Pq0(K + .4 + 1, 1.6, W + .051);
                                j.InteractiveWindow.create(i, J, .4, 0, a, E, C, e), j.InteractiveWindow.setCameraAndControls(a, E, t), eR.current = new o.Pq0(J.x, J.y, J.z + .8);
                                let X = new o.Pq0(H + .18, 0, G - .4125 - .5);
                                y.create(i, X, .6, C, e), n.e(518).then(n.bind(n, 5518)).then(e => {
                                    let {
                                        Laptop: t
                                    } = e, n = t.create();
                                    n.scale.set(.32, .32, .32);
                                    let a = Y.y + 1.125,
                                        r = Y.x + .29,
                                        s = a + .005,
                                        l = Y.z - .02;
                                    n.position.set(r, s, l), n.rotation.y = Math.PI, i.add(n), eI.current = n, eB.current = new o.Pq0(r, s + .1, l)
                                }).catch(() => {}); {
                                    let e = M.DeskLamp.create();
                                    e.scale.set(.1, .1, .1);
                                    let t = Y.y + 1.125,
                                        n = Y.x - .55,
                                        r = t + .005,
                                        s = Y.z + .02;
                                    e.position.set(n, r, s), e.rotation.y = -Math.PI / 2, i.add(e), eT.current = e, eF.current = new o.Pq0(n, r + .15, s), M.DeskLamp.setupInteraction(a, E)
                                }
                                n.e(332).then(n.bind(n, 7332)).then(e => {
                                    let {
                                        Mug: t
                                    } = e, n = t.create();
                                    n.scale.set(.032, .032, .032);
                                    let a = Y.y + 1.125;
                                    n.position.set(Y.x - .19, a + .04, Y.z - .07), n.rotation.y = Math.PI, i.add(n)
                                }).catch(() => {}), n.e(80).then(n.bind(n, 6080)).then(t => {
                                    let {
                                        Bookshelf: a
                                    } = t, l = 3.5999999999999996 / 2, c = .44999999999999996 / 2, d = r.z - 3 + .15, h = r.x + 4 - .15 - .03 - l, p = d + .03 + c, u = a.create(new o.Pq0(h, 1.2, p), .3);
                                    i.add(u), eN.current = u;
                                    try {
                                        let e = new o.NRn().setFromObject(u),
                                            t = new o.Pq0;
                                        e.getCenter(t);
                                        let n = e.max.z + .02;
                                        eL.current = new o.Pq0(t.x, t.y, n)
                                    } catch (e) {
                                        eL.current = new o.Pq0(h, 1.92, p + .2 * c)
                                    }
                                    try {
                                        let t = new s.eB(Math.max(.01, l - .01), 1.19, Math.max(.01, c + .02)),
                                            n = new s.az(t),
                                            i = new s.nB({
                                                mass: 0,
                                                material: e
                                            });
                                        i.addShape(n), i.position.set(h, 1.2, p), C.addBody(i)
                                    } catch (e) {}
                                    n.e(905).then(n.bind(n, 905)).then(e => {
                                        let {
                                            PlantPot: t
                                        } = e, n = h - l - .22, a = p + .06, r = t.create(new o.Pq0(n, 0, a), .1);
                                        i.add(r)
                                    }).catch(() => {})
                                }).catch(() => {})
                            })(J);
                            let X = new o.Pq0(0, 0, -5),
                                Q = [],
                                Z = (e, t) => {
                                    let n = new s.az(e),
                                        i = new s.nB({
                                            mass: 0,
                                            material: J
                                        });
                                    i.addShape(n), i.position.copy(t), C.addBody(i), Q.push({
                                        body: i
                                    })
                                };
                            Z(new s.eB(4, 1.5, .025), new o.Pq0(X.x, 1.5, X.z - 3 - .001)), Z(new s.eB(.025, 1.5, 3), new o.Pq0(X.x - 4 - .001, 1.5, X.z)), Z(new s.eB(.025, 1.5, 3), new o.Pq0(X.x + 4 + .001, 1.5, X.z))
                        })(), G(), () => {
                            var n, i, a, o, r;
                            z && cancelAnimationFrame(z), window.removeEventListener("resize", W), N && N.dispose(), ej.current = null;
                            try {
                                null == (n = ef.current) || n.stop()
                            } catch (e) {}
                            try {
                                null == (i = m.BedsideLamp.dispose) || i.call(m.BedsideLamp)
                            } catch (e) {}
                            try {
                                null == (a = u.Television.dispose) || a.call(u.Television)
                            } catch (e) {}
                            try {
                                null == (o = j.InteractiveWindow.dispose) || o.call(j.InteractiveWindow)
                            } catch (e) {}
                            try {
                                eO.current && document.removeEventListener("pointerlockchange", eO.current), e_.current && document.removeEventListener("pointerlockerror", e_.current), eV.current && (null == t ? void 0 : t.domElement) && t.domElement.removeEventListener("click", eV.current)
                            } catch (e) {}
                            try {
                                null == E || null == (r = E.disconnect) || r.call(E)
                            } catch (e) {}
                            e.current && t.domElement && e.current.removeChild(t.domElement), t && t.dispose()
                        }
                    }, []), (0, a.useEffect)(() => {
                        let e = ed.current,
                            t = eh.current,
                            n = eu.current,
                            i = ep.current,
                            a = em.current;
                        e && t && n && i && a && (q ? (e.fog.color.setHex(725536), e.background = new o.Q1f(725536), t.toneMappingExposure = .6, n.intensity = .3, n.color.setHex(0xbcdcff), i.intensity = .2, a.intensity = .6) : (e.fog.color.setHex(8900331), e.background = new o.Q1f(8900331), t.toneMappingExposure = 1.4, n.intensity = 1.8, n.color.setHex(0xffeaa7), i.intensity = .4, a.intensity = .3), t.shadowMap.needsUpdate = !0)
                    }, [q]), (0, a.useEffect)(() => {
                        let e = e => {
                            if ("Tab" === e.code) {
                                var t;
                                e.preventDefault();
                                let n = !W;
                                if (n && (null == (t = L.current) ? void 0 : t.isLocked)) try {
                                    L.current.unlock()
                                } catch (e) {}
                                H(n)
                            }
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [W]), (0, a.useEffect)(() => {
                        if (!er) return;
                        document.body.style.cursor = "wait", document.body.style.pointerEvents = "none";
                        let e = e => {
                                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                            },
                            t = ["keydown", "keyup", "keypress", "mousedown", "mouseup", "click", "touchstart", "touchend", "touchmove"];
                        t.forEach(t => {
                            document.addEventListener(t, e, {
                                capture: !0,
                                passive: !1
                            })
                        });
                        let n = e => {
                            e.preventDefault(), e.stopPropagation()
                        };
                        return document.addEventListener("pointerlockchange", n, {
                            capture: !0
                        }), document.addEventListener("pointerlockerror", n, {
                            capture: !0
                        }), () => {
                            document.body.style.cursor = "", document.body.style.pointerEvents = "", t.forEach(t => {
                                document.removeEventListener(t, e, {
                                    capture: !0
                                })
                            }), document.removeEventListener("pointerlockchange", n, {
                                capture: !0
                            }), document.removeEventListener("pointerlockerror", n, {
                                capture: !0
                            })
                        }
                    }, [er]), (0, a.useEffect)(() => {
                        try {
                            if (ej.current) {
                                var e, t;
                                null == (t = ej.current) || null == (e = t.setInputEnabled) || e.call(t, !er)
                            }
                        } catch (e) {}
                    }, [er]), (0, a.useEffect)(() => {
                        let e = L.current;
                        try {
                            var t, n, i, a;
                            F ? ((null == e ? void 0 : e.isLocked) && e.unlock(), null == (n = ej.current) || null == (t = n.setInputEnabled) || t.call(n, !1)) : er || null == (a = ej.current) || null == (i = a.setInputEnabled) || i.call(a, !0)
                        } catch (e) {}
                    }, [F, er]);
                    let [e$, eQ] = (0, a.useState)(!1), [eZ, e0] = (0, a.useState)(!1), e1 = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        let e = L.current;
                        try {
                            var t, n, i, a;
                            e$ ? ((null == e ? void 0 : e.isLocked) && e.unlock(), null == (n = ej.current) || null == (t = n.setInputEnabled) || t.call(n, !1)) : null == (a = ej.current) || null == (i = a.setInputEnabled) || i.call(a, !0)
                        } catch (e) {}
                        return () => {
                            e1.current && window.clearTimeout(e1.current), e0(!1)
                        }
                    }, [e$]);
                    let [e2, e5] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                        let e = L.current;
                        try {
                            var t, n, i, a;
                            e2 ? ((null == e ? void 0 : e.isLocked) && e.unlock(), null == (n = ej.current) || null == (t = n.setInputEnabled) || t.call(n, !1)) : null == (a = ej.current) || null == (i = a.setInputEnabled) || i.call(a, !0)
                        } catch (e) {}
                    }, [e2]), (0, a.useEffect)(() => {
                        eC.current = _ || W || G || e$ || e2 || F || Z, eP.current = X, eE.current = R
                    }, [_, W, G, e$, e2, F, Z, X, R]), (0, a.useEffect)(() => {
                        let e = e => {
                            if ("Escape" === e.code && !er && R && !_ && !W && !G && !e$ && !e2 && !F && !X)
                                if (t && L.current) try {
                                    L.current.unlock()
                                } catch (e) {} else ee(e => !e)
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [R, er, _, W, G, e$, e2, F, X, t]);
                    let e3 = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked)) return;
                            let n = eN.current;
                            if (!n || !ej.current) return;
                            let i = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            i && 2.5 >= Math.sqrt(Math.pow(i.x - n.position.x, 2) + Math.pow(i.z - n.position.z, 2)) && eQ(!0)
                        },
                        e6 = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !ez.current || !ej.current) return;
                            let i = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            if (i && 3 >= Math.sqrt(Math.pow(i.x - ez.current.x, 2) + Math.pow(i.z - ez.current.z, 2))) try {
                                Promise.resolve().then(n.bind(n, 3381)).then(e => {
                                    let {
                                        Television: t
                                    } = e, n = t.getState();
                                    t.setPower(!n), console.log("\uD83D\uDCFA TV toggled via proximity:", n ? "OFF" : "ON")
                                })
                            } catch (e) {
                                console.log("\uD83D\uDCFA TV interaction failed:", e)
                            }
                        },
                        e4 = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !eI.current || !ej.current) return;
                            let n = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            n && 1.8 >= Math.sqrt(Math.pow(n.x - eI.current.position.x, 2) + Math.pow(n.z - eI.current.position.z, 2)) && (e5(!0), console.log("\uD83D\uDCBB Laptop macOS opened"))
                        },
                        e8 = () => {
                            var e, t, n, i;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !eT.current || !ej.current) return;
                            let a = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            if (a && 2 >= Math.sqrt(Math.pow(a.x - eT.current.position.x, 2) + Math.pow(a.z - eT.current.position.z, 2))) try {
                                null == (n = M.DeskLamp.toggleByGroup) || n.call(M.DeskLamp, eT.current), console.log("\uD83D\uDCA1 Desk lamp toggled via proximity (by group)")
                            } catch (e) {
                                try {
                                    null == (i = M.DeskLamp.toggleLamp) || i.call(M.DeskLamp, 0)
                                } catch (e) {}
                            }
                        },
                        e9 = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !eD.current || !ej.current) return;
                            let i = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            if (i && 2 >= Math.sqrt(Math.pow(i.x - eD.current.x, 2) + Math.pow(i.z - eD.current.z, 2))) try {
                                Promise.resolve().then(n.bind(n, 6001)).then(e => {
                                    let {
                                        BedsideLamp: t
                                    } = e;
                                    t.toggleLamp(0), console.log("\uD83D\uDECF️ Bedside lamp 1 toggled via proximity")
                                })
                            } catch (e) {
                                console.log("\uD83D\uDECF️ Bedside lamp 1 interaction failed:", e)
                            }
                        },
                        e7 = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !eA.current || !ej.current) return;
                            let i = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            if (i && 2 >= Math.sqrt(Math.pow(i.x - eA.current.x, 2) + Math.pow(i.z - eA.current.z, 2))) try {
                                Promise.resolve().then(n.bind(n, 6001)).then(e => {
                                    let {
                                        BedsideLamp: t
                                    } = e;
                                    t.toggleLamp(1), console.log("\uD83D\uDECF️ Bedside lamp 2 toggled via proximity")
                                })
                            } catch (e) {
                                console.log("\uD83D\uDECF️ Bedside lamp 2 interaction failed:", e)
                            }
                        },
                        te = () => {
                            var e, t;
                            if (!eq && !(null == (e = L.current) ? void 0 : e.isLocked) || !eR.current || !ej.current) return;
                            let i = null == (t = ej.current.playerBody) ? void 0 : t.position;
                            if (i && 2.8 >= Math.sqrt(Math.pow(i.x - eR.current.x, 2) + Math.pow(i.z - eR.current.z, 2))) try {
                                Promise.resolve().then(n.bind(n, 2335)).then(e => {
                                    let {
                                        InteractiveWindow: t
                                    } = e;
                                    t.toggleNearestWindow() ? console.log("\uD83E\uDE9F Window toggled via proximity") : console.log("\uD83E\uDE9F No window found to toggle")
                                })
                            } catch (e) {
                                console.log("\uD83E\uDE9F Window interaction failed:", e)
                            }
                        };
                    (0, a.useEffect)(() => {
                        let e = e => {
                            if ("KeyE" === e.code || "Enter" === e.code) {
                                var t, i, a, o, r, s, l;
                                if (null == (t = el.bookshelf) ? void 0 : t.visible) e3();
                                else if (null == (i = el.tv) ? void 0 : i.visible) e6(), ec(e => ({
                                    ...e,
                                    tv: {
                                        ...e.tv || {
                                            position: {
                                                x: 0,
                                                y: 0
                                            },
                                            text: "",
                                            icon: ""
                                        },
                                        visible: !1
                                    }
                                }));
                                else if (null == (a = el.laptop) ? void 0 : a.visible) e4();
                                else if (null == (o = el.lamp) ? void 0 : o.visible) {
                                    e.preventDefault();
                                    try {
                                        eT.current ? Promise.resolve().then(n.bind(n, 1718)).then(e => {
                                            var t;
                                            let {
                                                DeskLamp: n
                                            } = e;
                                            null == (t = n.toggleByGroup) || t.call(n, eT.current)
                                        }).catch(() => e8()) : e8()
                                    } catch (e) {
                                        e8()
                                    }
                                } else(null == (r = el.bedsideLamp1) ? void 0 : r.visible) ? (e.preventDefault(), e9()) : (null == (s = el.bedsideLamp2) ? void 0 : s.visible) ? (e.preventDefault(), e7()) : (null == (l = el.window) ? void 0 : l.visible) && (e.preventDefault(), te())
                            }
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, [el]);
                    let tt = () => {
                            L.current && L.current.lock(), ee(!1)
                        },
                        tn = (0, a.useCallback)((e, t) => {
                            let n = ef.current;
                            if (!n) return;
                            let i = eb.current,
                                a = performance.now();
                            ey.current && cancelAnimationFrame(ey.current);
                            let o = () => {
                                let r = Math.min(1, Math.max(0, (performance.now() - a) / Math.max(1, t)));
                                try {
                                    let t = Math.max(0, Math.min(.2, i + (e - i) * r));
                                    n.setVolume(t), eb.current = t
                                } catch (e) {}
                                r < 1 ? ey.current = requestAnimationFrame(o) : (ey.current && cancelAnimationFrame(ey.current), ey.current = null)
                            };
                            ey.current = requestAnimationFrame(o)
                        }, []),
                        ti = (0, a.useCallback)(() => {
                            let e = ef.current;
                            e && (tn(0, 420), setTimeout(() => {
                                try {
                                    var t;
                                    null == (t = e.stop) || t.call(e)
                                } catch (e) {}
                            }, 430))
                        }, [tn]),
                        ta = (0, a.useCallback)(() => {
                            let e = ef.current;
                            if (e) {
                                try {
                                    if (!e.isPlaying) {
                                        e.play();
                                        try {
                                            e.setLoop(!0)
                                        } catch (e) {}
                                    }
                                } catch (e) {}
                                tn(ev.current, 600)
                            }
                        }, [tn]);
                    (0, a.useEffect)(() => {
                        let e = () => ti(),
                            t = () => ta();
                        window.addEventListener("spotifyPlay", e), window.addEventListener("spotifyPause", t);
                        let n = 0,
                            i = setInterval(() => {
                                ((() => {
                                    try {
                                        var n;
                                        let i = window.__spotifyPlayer__,
                                            a = null == i ? void 0 : i.audio;
                                        if (!a) return !1;
                                        if ((null == (n = ek.current) ? void 0 : n.audio) === a) return !0;
                                        let o = () => e(),
                                            r = () => t(),
                                            s = () => t();
                                        return a.addEventListener("play", o), a.addEventListener("pause", r), a.addEventListener("ended", s), ek.current = {
                                            audio: a,
                                            onPlay: o,
                                            onPause: r,
                                            onEnded: s
                                        }, !0
                                    } catch (e) {
                                        return !1
                                    }
                                })() || ++n > 8) && clearInterval(i)
                            }, 500);
                        return () => {
                            window.removeEventListener("spotifyPlay", e), window.removeEventListener("spotifyPause", t), clearInterval(i);
                            try {
                                let e = ek.current;
                                e && (e.audio.removeEventListener("play", e.onPlay), e.audio.removeEventListener("pause", e.onPause), e.audio.removeEventListener("ended", e.onEnded)), ek.current = null
                            } catch (e) {}
                        }
                    }, [ti, ta]);
                    let to = () => {
                            confirm("Are you sure you want to quit the game?") && window.close()
                        },
                        tr = () => {
                            H(!1), R || V(!0)
                        },
                        ts = () => {
                            Y(!1), R || V(!0)
                        };
                    return (0, a.useEffect)(() => {}, [e$]), (0, i.jsxs)("div", {
                        children: [_ && !W && !G && !X && (0, i.jsx)(D, {
                            onNewGame: () => {
                                if (V(!1), $(!0), !eq) try {
                                    var e;
                                    null == (e = L.current) || e.lock()
                                } catch (e) {}
                                es(!0), en(!0), ea({
                                    progress: 0,
                                    currentStep: "init",
                                    stepLabel: "Preparing world...",
                                    estimatedTimeLeft: 6
                                });
                                try {
                                    eo.current && (cancelAnimationFrame(eo.current), eo.current = null)
                                } catch (e) {}
                                let t = Date.now(),
                                    n = () => {
                                        (() => {
                                            let e, n, i = Math.min(1, (Date.now() - t) / 8e3),
                                                a = Math.min(100, Math.round(100 * i));
                                            if (e = a >= 100 ? 0 : 0 === a ? Math.ceil(8) : Math.max(0, Math.round((100 - a) / 100 * 8)), n = i < .15 ? "Initializing 3D Engine..." : i < .35 ? "Loading Physics Engine..." : i < .55 ? "Loading Assets..." : i < .75 ? "Building World..." : i < .9 ? "Setting up Lighting..." : "Finalizing...", ea(t => ({
                                                    ...t,
                                                    progress: a,
                                                    estimatedTimeLeft: e,
                                                    stepLabel: n
                                                })), a >= 100 && e <= 0 || i >= 1) {
                                                try {
                                                    eo.current && (cancelAnimationFrame(eo.current), eo.current = null)
                                                } catch (e) {}
                                                ea(e => ({
                                                    ...e,
                                                    progress: 100,
                                                    estimatedTimeLeft: 0,
                                                    stepLabel: "Complete!"
                                                })), O(!0), en(!1), es(!1), setTimeout(() => {
                                                    tt()
                                                }, 100), setTimeout(() => {
                                                    $(!1)
                                                }, 1500), setTimeout(async () => {
                                                    try {
                                                        var e;
                                                        await (null == (e = eg.current) ? void 0 : e.context.resume())
                                                    } catch (e) {}
                                                    let t = ef.current;
                                                    t && !ew.current && new o.Am1().load("/music/lagulatar.mp3", e => {
                                                        try {
                                                            t.setBuffer(e), t.setLoop(!0);
                                                            let n = ev.current;
                                                            try {
                                                                t.setVolume(.02), eb.current = .02
                                                            } catch (e) {}
                                                            t.play();
                                                            let i = performance.now(),
                                                                a = () => {
                                                                    let e = (performance.now() - i) / 1500,
                                                                        o = Math.min(1, e);
                                                                    try {
                                                                        let e = Math.max(0, Math.min(.2, .02 + (n - .02) * o));
                                                                        t.setVolume(e), eb.current = e
                                                                    } catch (e) {}
                                                                    o < 1 ? ey.current = requestAnimationFrame(a) : (ey.current && cancelAnimationFrame(ey.current), ey.current = null)
                                                                };
                                                            ey.current = requestAnimationFrame(a), ew.current = !0
                                                        } catch (e) {
                                                            console.warn("BGM setup failed:", e)
                                                        }
                                                    }, void 0, e => {
                                                        console.warn("BGM load error:", e)
                                                    })
                                                }, 200)
                                            }
                                        })(), null !== eo.current && (eo.current = requestAnimationFrame(n))
                                    };
                                eo.current = requestAnimationFrame(n)
                            },
                            onLoadGame: () => {
                                alert("Load game functionality coming soon!")
                            },
                            onSettings: () => {
                                V(!1), H(!0)
                            },
                            onHelp: () => {
                                V(!1), Y(!0)
                            },
                            onQuit: to
                        }), Z && !_ && !e2 && !W && !e$ && !G && !X && R && (0, i.jsx)(z, {
                            onResume: tt,
                            onGameSettings: () => H(!0),
                            onHelp: () => Y(!0),
                            onQuitGame: to
                        }), et && (0, i.jsx)(T, {
                            isVisible: !0,
                            progress: ei.progress,
                            currentStep: ei.currentStep,
                            stepLabel: ei.stepLabel,
                            estimatedTimeLeft: ei.estimatedTimeLeft,
                            onComplete: () => en(!1)
                        }), (0, i.jsx)("div", {
                            className: "crosshair",
                            style: {
                                display: eq || !t || er ? "none" : "block",
                                zIndex: 1001
                            }
                        }), (0, i.jsx)("div", {
                            ref: e
                        }), (0, i.jsx)(N, {
                            onControlsChange: eJ,
                            isVisible: eq && R && !er && !W && !G && !Z && !e$ && !e2 && !F && !_
                        }), e$ && (0, i.jsx)(E, {
                            isOpen: e$,
                            onClose: () => {
                                $(!0);
                                try {
                                    var e;
                                    null == (e = L.current) || e.lock()
                                } catch (e) {}
                                eQ(!1);
                                try {
                                    Q.current && window.clearTimeout(Q.current), Q.current = window.setTimeout(() => $(!1), 1500)
                                } catch (e) {}
                            },
                            content: P,
                            options: {
                                paragraphFontSizeMm: 6,
                                titleFontSizeMm: 8.2,
                                subtitleFontSizeMm: 5.6,
                                animationStepSec: .07,
                                overlayOpacity: .82
                            }
                        }), e2 && (0, i.jsx)(C, {
                            onClose: () => {
                                $(!0);
                                try {
                                    var e;
                                    null == (e = L.current) || e.lock()
                                } catch (e) {}
                                e5(!1);
                                try {
                                    Q.current && window.clearTimeout(Q.current), Q.current = window.setTimeout(() => $(!1), 1500)
                                } catch (e) {}
                            }
                        }), (0, i.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 16,
                                left: 16,
                                zIndex: 30
                            },
                            children: (0, i.jsx)("button", {
                                onClick: () => {
                                    var e;
                                    if (null == (e = L.current) ? void 0 : e.isLocked) try {
                                        L.current.unlock()
                                    } catch (e) {}
                                    eq && R || R ? ee(!0) : H(!0)
                                },
                                "aria-label": R ? "Open Pause Menu" : "Open Control Center",
                                style: {
                                    background: "linear-gradient(180deg, #710cd2 0%, #4b0b98 100%)",
                                    color: "#fff",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    borderRadius: 14,
                                    padding: "10px 12px",
                                    cursor: "pointer",
                                    boxShadow: "0 10px 26px rgba(0,0,0,0.35)",
                                    backdropFilter: "blur(10px)"
                                },
                                children: (0, i.jsxs)("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "18",
                                    height: "18",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    "aria-hidden": "true",
                                    children: [(0, i.jsx)("path", {
                                        d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                                    }), (0, i.jsx)("path", {
                                        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.33-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.49.49 1.2.64 1.82.33.61-.18 1-.81 1-1.51V3a2 2 0 0 1 4 0v.09c0 .7.39 1.33 1 1.51.62.31 1.33.16 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.49.49-.64 1.2-.33 1.82.18.61.81 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.7 0-1.33.39-1.51 1Z"
                                    })]
                                })
                            })
                        }), W && (0, i.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 40,
                                background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)"
                            },
                            onClick: tr,
                            children: (0, i.jsxs)("div", {
                                onClick: e => e.stopPropagation(),
                                style: {
                                    width: 640,
                                    maxWidth: "92%",
                                    borderRadius: 20,
                                    background: "linear-gradient(160deg, rgba(10,12,20,0.9) 0%, rgba(18,24,40,0.92) 100%)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
                                    color: "#e6e6e6",
                                    backdropFilter: "blur(12px)"
                                },
                                children: [(0, i.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "14px 18px",
                                        borderBottom: "1px solid rgba(255,255,255,0.08)"
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10
                                        },
                                        children: [(0, i.jsx)("div", {
                                            style: {
                                                width: 32,
                                                height: 32,
                                                borderRadius: 10,
                                                background: "linear-gradient(135deg, #2a3e7a, #4b6bd6)",
                                                display: "grid",
                                                placeItems: "center",
                                                boxShadow: "inset 0 0 12px rgba(255,255,255,0.12)"
                                            },
                                            children: (0, i.jsx)("span", {
                                                style: {
                                                    fontSize: 15,
                                                    fontWeight: 900
                                                },
                                                children: "PS"
                                            })
                                        }), (0, i.jsx)("div", {
                                            style: {
                                                fontWeight: 800,
                                                letterSpacing: .3
                                            },
                                            children: "Control Center"
                                        })]
                                    }), (0, i.jsx)("button", {
                                        onClick: tr,
                                        style: {
                                            background: "transparent",
                                            color: "#fff",
                                            border: "1px solid rgba(255,255,255,0.2)",
                                            padding: "6px 10px",
                                            borderRadius: 8,
                                            cursor: "pointer"
                                        },
                                        children: "Close"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    style: {
                                        padding: 22,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 16
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "16px 18px",
                                            borderRadius: 16,
                                            background: "linear-gradient(160deg, rgba(20,26,44,0.92) 0%, rgba(28,40,72,0.92) 100%)",
                                            border: "1px solid rgba(255,255,255,0.10)"
                                        },
                                        children: [(0, i.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12
                                            },
                                            children: [(0, i.jsx)("div", {
                                                style: {
                                                    width: 38,
                                                    height: 38,
                                                    borderRadius: 12,
                                                    display: "grid",
                                                    placeItems: "center",
                                                    background: "linear-gradient(135deg, #203054, #3d5aa6)",
                                                    boxShadow: "inset 0 0 10px rgba(255,255,255,0.12)"
                                                },
                                                children: (0, i.jsx)("span", {
                                                    style: {
                                                        fontSize: 18
                                                    },
                                                    children: q ? "\uD83C\uDF19" : "\uD83C\uDF1E"
                                                })
                                            }), (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("div", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: "Mode Malam"
                                                }), (0, i.jsxs)("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        opacity: .75
                                                    },
                                                    children: ["Ubah pencahayaan dunia ke suasana ", q ? "malam" : "siang"]
                                                })]
                                            })]
                                        }), (0, i.jsx)("button", {
                                            onClick: () => U(e => !e),
                                            "aria-pressed": q,
                                            style: {
                                                width: 64,
                                                height: 34,
                                                borderRadius: 999,
                                                border: "1px solid rgba(255,255,255,0.20)",
                                                background: q ? "linear-gradient(135deg, #223459, #4b6bd6)" : "linear-gradient(135deg, #3a4456, #606a7a)",
                                                position: "relative",
                                                cursor: "pointer",
                                                boxShadow: "inset 0 4px 12px rgba(0,0,0,0.35)"
                                            },
                                            children: (0, i.jsx)("span", {
                                                style: {
                                                    position: "absolute",
                                                    top: 3,
                                                    left: q ? 32 : 3,
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: 999,
                                                    background: "#e6e6e6",
                                                    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                                                    transition: "left 180ms ease"
                                                }
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        style: {
                                            fontSize: 12,
                                            opacity: .65
                                        },
                                        children: ["Tips: tekan ", (0, i.jsx)("b", {
                                            children: "Tab"
                                        }), " untuk membuka/tutup Control Center kapan saja. Saat terkunci pointer, tombol ini akan otomatis membuka kursor."]
                                    })]
                                })]
                            })
                        }), G && (0, i.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 50,
                                background: "rgba(0,0,0,0.55)"
                            },
                            onClick: ts,
                            children: (0, i.jsxs)("div", {
                                onClick: e => e.stopPropagation(),
                                style: {
                                    width: 520,
                                    maxWidth: "92%",
                                    borderRadius: 16,
                                    background: "linear-gradient(160deg, rgba(15,18,28,0.95) 0%, rgba(20,26,44,0.95) 100%)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 26px 70px rgba(0,0,0,0.5)",
                                    color: "#e6e6e6",
                                    padding: 18
                                },
                                children: [(0, i.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 8
                                    },
                                    children: [(0, i.jsx)("div", {
                                        style: {
                                            fontWeight: 800
                                        },
                                        children: "Help"
                                    }), (0, i.jsx)("button", {
                                        onClick: ts,
                                        style: {
                                            background: "transparent",
                                            color: "#fff",
                                            border: "1px solid rgba(255,255,255,0.2)",
                                            padding: "6px 10px",
                                            borderRadius: 8,
                                            cursor: "pointer"
                                        },
                                        children: "Close"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    style: {
                                        fontSize: 14,
                                        opacity: .9,
                                        lineHeight: 1.6
                                    },
                                    children: ["- WASD: Bergerak", (0, i.jsx)("br", {}), "- SPACE: Lompat", (0, i.jsx)("br", {}), "- Mouse: Lihat Sekeliling", (0, i.jsx)("br", {}), "- Klik: Interaksi (TV/Lampu)", (0, i.jsx)("br", {}), "- TAB: Control Center", (0, i.jsx)("br", {}), "- R: Unstuck"]
                                })]
                            })
                        }), F && (0, i.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 45,
                                background: "rgba(0,0,0,0.55)",
                                backdropFilter: "blur(6px)"
                            },
                            onClick: () => A(!1),
                            children: (0, i.jsxs)("div", {
                                onClick: e => e.stopPropagation(),
                                style: {
                                    width: "min(92%, 860px)",
                                    borderRadius: 18,
                                    background: "linear-gradient(160deg, rgba(10,12,20,0.95) 0%, rgba(18,24,40,0.95) 100%)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 26px 70px rgba(0,0,0,0.5)",
                                    color: "#e6e6e6"
                                },
                                children: [(0, i.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "12px 16px",
                                        borderBottom: "1px solid rgba(255,255,255,0.10)"
                                    },
                                    children: [(0, i.jsx)("div", {
                                        style: {
                                            fontWeight: 800
                                        },
                                        children: "Smart TV"
                                    }), (0, i.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10
                                        },
                                        children: [(0, i.jsx)("button", {
                                            onClick: () => {
                                                var e;
                                                null == (e = u.Television.channelPrev) || e.call(u.Television)
                                            },
                                            style: {
                                                background: "transparent",
                                                color: "#fff",
                                                border: "1px solid rgba(255,255,255,0.25)",
                                                padding: "6px 10px",
                                                borderRadius: 8,
                                                cursor: "pointer"
                                            },
                                            children: "<"
                                        }), (0, i.jsx)("button", {
                                            onClick: () => {
                                                var e;
                                                null == (e = u.Television.channelNext) || e.call(u.Television)
                                            },
                                            style: {
                                                background: "transparent",
                                                color: "#fff",
                                                border: "1px solid rgba(255,255,255,0.25)",
                                                padding: "6px 10px",
                                                borderRadius: 8,
                                                cursor: "pointer"
                                            },
                                            children: ">"
                                        }), (0, i.jsx)("button", {
                                            onClick: () => {
                                                var e;
                                                null == (e = u.Television.setPower) || e.call(u.Television, !1), A(!1)
                                            },
                                            style: {
                                                background: "#ef4444",
                                                color: "#fff",
                                                border: 0,
                                                padding: "6px 10px",
                                                borderRadius: 8,
                                                cursor: "pointer"
                                            },
                                            children: "Turn Off"
                                        }), (0, i.jsx)("button", {
                                            onClick: () => A(!1),
                                            style: {
                                                background: "transparent",
                                                color: "#fff",
                                                border: "1px solid rgba(255,255,255,0.25)",
                                                padding: "6px 10px",
                                                borderRadius: 8,
                                                cursor: "pointer"
                                            },
                                            children: "X"
                                        })]
                                    })]
                                }), (0, i.jsx)("div", {
                                    style: {
                                        padding: 16,
                                        fontSize: 14,
                                        lineHeight: 1.6
                                    },
                                    children: (0, i.jsxs)("div", {
                                        style: {
                                            width: "100%",
                                            height: 360,
                                            background: "linear-gradient(135deg, #0c1220 0%, #1a2b4a 100%)",
                                            borderRadius: 10,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#a3bffa",
                                            letterSpacing: .3
                                        },
                                        children: ["TV is ", I ? "ON" : "OFF", " - gunakan tombol ", (0, i.jsx)("b", {
                                            children: "<"
                                        }), " / ", (0, i.jsx)("b", {
                                            children: ">"
                                        }), " untuk ganti channel"]
                                    })
                                })]
                            })
                        }), (0, i.jsx)("style", {
                            children: "\n                @keyframes proximityPulse {\n                    0%, 100% { transform: translate(-50%, -100%) scale(1); opacity: 0.95; }\n                    50% { transform: translate(-50%, -100%) scale(1.02); opacity: 1; }\n                }\n            "
                        }), Object.entries(el).map(e => {
                            let [t, n] = e;
                            return n.visible ? (0, i.jsx)("div", {
                                style: {
                                    position: "fixed",
                                    left: n.position.x,
                                    top: n.position.y,
                                    zIndex: 100,
                                    pointerEvents: "none"
                                },
                                children: (0, i.jsxs)("div", {
                                    onClick: e => {
                                        e.preventDefault(), e.stopPropagation(), eq && (console.log("\uD83D\uDD18 Proximity popup clicked: ".concat(t)), eX(t))
                                    },
                                    onTouchStart: e => {
                                        e.preventDefault(), e.stopPropagation()
                                    },
                                    onTouchEnd: e => {
                                        e.preventDefault(), e.stopPropagation(), eq && (console.log("\uD83D\uDCF1 Proximity popup touched: ".concat(t)), eX(t))
                                    },
                                    style: {
                                        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                                        color: "#ffffff",
                                        padding: "10px 18px",
                                        borderRadius: 12,
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        whiteSpace: "nowrap",
                                        border: "1px solid rgba(255, 255, 255, 0.25)",
                                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(8px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        animation: "proximityPulse 2s ease-in-out infinite",
                                        pointerEvents: eq ? "auto" : "none",
                                        cursor: eq ? "pointer" : "default",
                                        touchAction: "manipulation"
                                    },
                                    children: [(0, i.jsx)("span", {
                                        children: n.icon || "\uD83D\uDCD6"
                                    }), (0, i.jsx)("span", {
                                        children: eq ? "Ketuk untuk interaksi" : n.text
                                    }), !eq && (0, i.jsx)("span", {
                                        style: {
                                            background: "rgba(255, 255, 255, 0.2)",
                                            padding: "2px 6px",
                                            borderRadius: 4,
                                            fontSize: "12px",
                                            fontWeight: 700
                                        },
                                        children: "[E]"
                                    })]
                                })
                            }, t) : null
                        })]
                    })
                }
        },
        2335: (e, t, n) => {
            n.r(t), n.d(t, {
                InteractiveWindow: () => o
            });
            var i = n(3264),
                a = n(1381);
            class o {
                static create(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .6,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        s = arguments.length > 5 ? arguments[5] : void 0,
                        l = arguments.length > 6 ? arguments[6] : void 0,
                        c = arguments.length > 7 ? arguments[7] : void 0,
                        d = "window_".concat(this.instanceCounter++),
                        h = new i._4j({
                            color: 0xf0f0f0,
                            roughness: .8
                        }),
                        p = new i._4j({
                            color: 0xfdd835,
                            metalness: .8,
                            roughness: .3
                        }),
                        u = new i._4j({
                            color: 0xffffff,
                            transparent: !0,
                            opacity: .25,
                            roughness: .05,
                            metalness: 0,
                            side: i.hB5,
                            depthWrite: !1
                        }),
                        m = new i._4j({
                            color: 0xe8e8e8,
                            roughness: .7,
                            emissive: 2236962,
                            emissiveIntensity: .1
                        }),
                        g = new i._4j({
                            color: 0xffeb3b,
                            metalness: .9,
                            roughness: .2,
                            emissive: 4473856,
                            emissiveIntensity: .2
                        }),
                        x = new i.YJl;
                    x.position.copy(t), x.rotation.y = o, x.scale.set(n, n, n), x.userData.windowId = d, e.add(x);
                    let f = this.backWindowWidth,
                        w = this.backWindowHeight,
                        y = {
                            id: d,
                            clickTargets: [],
                            pivots: [],
                            isOpen: !1,
                            hoveredObjects: new Set
                        },
                        v = new i.YJl,
                        b = new i.iNn(f, .15, .15),
                        k = b.clone(),
                        j = new i.iNn(.15, w - .3, .15),
                        M = new i.eaF(b, h);
                    M.position.y = w / 2 - .075;
                    let S = new i.eaF(k, h);
                    S.position.y = -w / 2 + .075;
                    let C = new i.eaF(j, h);
                    C.position.x = -f / 2 + .075;
                    let E = new i.eaF(j.clone(), h);
                    E.position.x = f / 2 - .075, [M, S, C, E].forEach(e => {
                        e.castShadow = !0, e.receiveShadow = !0
                    }), v.add(M, S, C, E), x.add(v);
                    let P = (f - .3) / 2,
                        N = w - .3,
                        L = new i.YJl;
                    L.position.x = -f / 2 + .15, L.userData.windowId = d, L.userData.side = "left";
                    let z = new i.YJl;
                    z.position.x = f / 2 - .15, z.userData.windowId = d, z.userData.side = "right";
                    let I = e => {
                            let t = new i.YJl,
                                n = (e, t, n, a, o, r) => {
                                    let s = new i.iNn(e, t, n);
                                    return s.translate(a, o, r), s
                                },
                                a = e ? P / 2 : -P / 2,
                                o = new i.eaF(n(P, .12, .1, a, N / 2 - .06, 0), h),
                                r = new i.eaF(n(P, .12, .1, a, -N / 2 + .06, 0), h),
                                s = new i.eaF(n(.12, N, .1, e ? -P / 2 + .06 + a : P / 2 - .06 + a, 0, 0), h),
                                l = new i.eaF(n(.12, N, .1, e ? P / 2 - .06 + a : -P / 2 + .06 + a, 0, 0), h);
                            [o, r, s, l].forEach(e => {
                                e.castShadow = !0, e.receiveShadow = !0
                            }), t.add(o, r, s, l);
                            let c = n(P - .24, .06, .08, a, 0, 0),
                                x = new i.eaF(c, h);
                            t.add(x);
                            let f = n(.05, .3, .05, (e ? P / 2 - .12 : -P / 2 + .12) + a, 0, -.1),
                                w = new i.eaF(f, p);
                            t.add(w);
                            let v = P - .264,
                                b = (N - .24 - .06) / 2 - .02;
                            for (let e = 0; e < 2; e++) {
                                let n = e * (b + .06) - b / 2 - .03,
                                    o = new i.bdM(v, b);
                                o.translate(a, n, 0);
                                let r = new i.eaF(o, u);
                                r.renderOrder = 999, r.userData.isGlass = !0, r.userData.glassPane = !0, r.castShadow = !1, r.receiveShadow = !1, t.add(r)
                            }
                            let k = t => {
                                t.userData.isGlass || (t.userData.windowId = d, t.userData.sash = e ? "left" : "right", t.userData.isInteractive = !0, "material" in t && (t.userData.originalMaterial = t.material, t.userData.hoveredMaterial = t === w ? g : m), y.clickTargets.push(t))
                            };
                            return [o, r, s, l, x, w].forEach(k), t.children.forEach(e => {
                                e.material && !e.userData.isGlass && k(e)
                            }), t
                        },
                        B = I(!0),
                        T = I(!1);
                    L.add(B), z.add(T), x.add(L, z), y.pivots.push({
                        pivot: L,
                        targetAngle: 0,
                        side: "left"
                    }), y.pivots.push({
                        pivot: z,
                        targetAngle: 0,
                        side: "right"
                    }), this.instances.set(d, y);
                    try {
                        if (l && c) {
                            let e = (f - .3) * n * .5,
                                i = (w - .3) * n * .5,
                                r = Math.max(.015 * n, .01),
                                s = new a.az(new a.eB(e, i, r)),
                                d = new a.nB({
                                    mass: 0,
                                    material: c
                                });
                            d.addShape(s), d.position.set(t.x, t.y, t.z);
                            let h = new a.PT;
                            h.setFromEuler(0, o, 0, "YZX"), d.quaternion.copy(h), d.collisionResponse = !0, l.addBody(d), y.physicsBody = d
                        }
                    } catch (e) {}
                    return r && (this.camera = r), s && (this.controls = s), this.onClickBound || this.setupInteraction(), x
                }
                static setupInteraction() {
                    this.onClickBound && this.onMouseMoveBound || (this.onMouseMoveBound = e => {
                        var t;
                        if (!this.camera || !this.renderer || (null == (t = this.controls) ? void 0 : t.isLocked)) return;
                        let n = performance.now();
                        if (n - this.lastHoverRaycastAt < this.HOVER_RAYCAST_INTERVAL_MS) return;
                        this.lastHoverRaycastAt = n;
                        let i = this.renderer.domElement.getBoundingClientRect();
                        this.mouse.x = (e.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -(2 * ((e.clientY - i.top) / i.height)) + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.instances.forEach(e => {
                            e.hoveredObjects.forEach(e => {
                                e.userData.originalMaterial && (e.material = e.userData.originalMaterial)
                            }), e.hoveredObjects.clear()
                        });
                        let a = [];
                        this.instances.forEach(e => {
                            a.push(...e.clickTargets)
                        });
                        let o = this.raycaster.intersectObjects(a, !1);
                        if (o.length > 0) {
                            let e = o[0].object,
                                t = e.userData.windowId,
                                n = this.instances.get(t);
                            n && e.userData.isInteractive && (e.userData.hoveredMaterial && (e.material = e.userData.hoveredMaterial, n.hoveredObjects.add(e)), this.renderer.domElement.style.cursor = "pointer")
                        } else this.renderer.domElement.style.cursor = "auto"
                    }, this.onClickBound = e => {
                        var t;
                        if (!this.camera || !this.renderer || !(null == (t = this.controls) ? void 0 : t.isLocked)) return;
                        this.mouse.set(0, 0), this.raycaster.setFromCamera(this.mouse, this.camera), this.raycaster.far = 6;
                        let n = [];
                        this.instances.forEach(e => {
                            n.push(...e.clickTargets)
                        });
                        let i = this.raycaster.intersectObjects(n, !1);
                        if (i.length > 0) {
                            let e = i.filter(e => e.distance <= 5);
                            if (e.length > 0) {
                                let t = e[0].object,
                                    n = t.userData.windowId,
                                    i = this.instances.get(n);
                                if (i && t.userData.isInteractive) {
                                    i.isOpen = !i.isOpen;
                                    let t = .45 * Math.PI;
                                    i.pivots.forEach(e => {
                                        "left" === e.side ? e.targetAngle = i.isOpen ? -t : 0 : "right" === e.side && (e.targetAngle = i.isOpen ? t : 0)
                                    }), i.physicsBody && (i.physicsBody.collisionResponse = !i.isOpen), console.log("Window ".concat(n, " ").concat(i.isOpen ? "opened" : "closed", " at distance ").concat(e[0].distance.toFixed(2)))
                                }
                            }
                        }
                    }, document.addEventListener("click", this.onClickBound), document.addEventListener("mousemove", this.onMouseMoveBound))
                }
                static toggleNearestWindow() {
                    if (0 === this.instances.size) return !1;
                    let e = Array.from(this.instances.values())[0];
                    if (!e) return !1;
                    e.isOpen = !e.isOpen;
                    let t = .45 * Math.PI;
                    return e.pivots.forEach(n => {
                        "left" === n.side ? n.targetAngle = e.isOpen ? -t : 0 : "right" === n.side && (n.targetAngle = e.isOpen ? t : 0)
                    }), e.physicsBody && (e.physicsBody.collisionResponse = !e.isOpen), console.log("Window ".concat(e.id, " ").concat(e.isOpen ? "opened" : "closed", " via proximity")), !0
                }
                static update(e) {
                    this.instances.forEach(t => {
                        t.pivots.forEach(t => {
                            let n = t.pivot.rotation.y,
                                a = i.cj9.damp(n, t.targetAngle, 6, e);
                            t.pivot.rotation.y = a, .01 > Math.abs(a - t.targetAngle) && (t.pivot.rotation.y = t.targetAngle)
                        })
                    })
                }
                static setCameraAndControls(e, t, n) {
                    this.camera = e, this.controls = t, n && (this.renderer = n), this.onClickBound || this.setupInteraction()
                }
                static dispose() {
                    var e;
                    this.onClickBound && (document.removeEventListener("click", this.onClickBound), this.onClickBound = void 0), this.onMouseMoveBound && (document.removeEventListener("mousemove", this.onMouseMoveBound), this.onMouseMoveBound = void 0), (null == (e = this.renderer) ? void 0 : e.domElement) && (this.renderer.domElement.style.cursor = "auto"), this.instances.clear(), this.instanceCounter = 0
                }
            }
            o.instances = new Map, o.raycaster = new i.tBo, o.mouse = new i.I9Y, o.lastHoverRaycastAt = 0, o.HOVER_RAYCAST_INTERVAL_MS = 120, o.instanceCounter = 0, o.backWindowWidth = 5, o.backWindowHeight = 3.5
        },
        3381: (e, t, n) => {
            n.r(t), n.d(t, {
                Television: () => o
            });
            var i = n(3264),
                a = n(1381);
            class o {
                static isMobileDevice() {
                    try {
                        let e = navigator.userAgent || "",
                            t = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
                        return /(Android|iPhone|iPad|iPod|IEMobile|WPDesktop)/i.test(e) || t
                    } catch (e) {
                        return !1
                    }
                }
                static create(e, t, n, o, r, s, l, c) {
                    let d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
                        h = arguments.length > 9 ? arguments[9] : void 0,
                        p = arguments.length > 10 ? arguments[10] : void 0,
                        u = new i._4j({
                            color: 3092271,
                            roughness: .3,
                            metalness: .2
                        }),
                        m = new i.V9B({
                            color: 0,
                            side: i.hB5,
                            depthTest: !0,
                            depthWrite: !0
                        }),
                        g = new i._4j({
                            color: 1842204,
                            roughness: .2,
                            metalness: .8
                        }),
                        x = new i._4j({
                            color: 0xffffff,
                            emissive: 0xffffff,
                            emissiveIntensity: .2
                        }),
                        f = new i.YJl;
                    f.position.copy(t), e.add(f);
                    let w = new i.iNn(1.6, 1, .12),
                        y = new i.eaF(w, u);
                    y.position.set(0, 0, 0), y.castShadow = !0, y.receiveShadow = !0, f.add(y);
                    let v = new i.iNn(1.5, .9, .03),
                        b = new i.eaF(v, u);
                    b.position.set(0, 0, .07), b.renderOrder = 5, f.add(b);
                    let k = new i.bdM(1.48, .86),
                        j = new i.eaF(k, m);
                    j.position.set(0, 0, .091), j.name = "TV_SCREEN", j.castShadow = !1, j.receiveShadow = !1, j.frustumCulled = !1, j.renderOrder = 100, m.polygonOffset = !1, m.polygonOffsetFactor = 0, m.polygonOffsetUnits = 0, m.toneMapped = !1, f.add(j);
                    let M = new i.bdM(1.475, .855),
                        S = new i.V9B({
                            color: 0xffffff,
                            transparent: !0,
                            opacity: .06,
                            depthWrite: !1,
                            depthTest: !0,
                            blending: i.EZo,
                            side: i.hB5
                        }),
                        C = new i.eaF(M, S);
                    C.position.set(0, 0, .09), C.renderOrder = 99, C.frustumCulled = !1, C.material.toneMapped = !1, this.reflectionMesh = C, f.add(C);
                    let E = new i.bdM(.2, .05),
                        P = new i.eaF(E, x);
                    P.position.set(.6, -.35, .07), f.add(P);
                    let N = new i.iNn(1, .12, .35),
                        L = new i.eaF(N, g);
                    L.position.set(0, -.56, -.01), L.castShadow = !0, L.receiveShadow = !0, f.add(L);
                    let z = new i.iNn(.2, .4, .15),
                        I = new i.eaF(z, g);
                    I.position.set(0, -.3, -.01), I.castShadow = !0, f.add(I);
                    let B = new i.Ho_(.04, .04, .45, 12),
                        T = new i.eaF(B, g);
                    T.position.set(-.35, -.725, -.01), T.castShadow = !0, f.add(T);
                    let F = new i.eaF(B, g);
                    F.position.set(.35, -.725, -.01), F.castShadow = !0, f.add(F);
                    let D = new i.iNn(.3, .08, .02),
                        A = new i.eaF(D, u);
                    A.position.set(.5, -.3, .02), f.add(A);
                    let R = new i.Ho_(.015, .015, .01, 8);
                    [0xff0000, 65280, 255, 0xffff00].forEach((e, t) => {
                        let n = new i._4j({
                                color: e,
                                emissive: e,
                                emissiveIntensity: .3
                            }),
                            a = new i.eaF(R, n);
                        a.rotation.x = Math.PI / 2, a.position.set(.4 + .04 * t, -.3, .021), f.add(a)
                    });
                    let O = new i.Gu$(.008, 8, 8),
                        _ = new i._4j({
                            color: 0
                        }),
                        V = new i.eaF(O, _);
                    V.position.set(.6, -.25, .07), f.add(V);
                    for (let e = 0; e < 10; e++) {
                        let t = new i.iNn(.02, .002, .01),
                            n = new i._4j({
                                color: 0
                            }),
                            a = new i.eaF(t, n);
                        a.position.set(-.6 + .04 * e, -.4, .07), f.add(a)
                    }
                    if (n && o) {
                        let e = new a.az(new a.eB(.4 * d, .05 * d, .15 * d)),
                            i = new a.nB({
                                mass: 0,
                                material: o
                            });
                        i.addShape(e), i.position.set(t.x, t.y - .56 * d, t.z), n.addBody(i);
                        try {
                            let e = 1.48 * d / 2,
                                i = .86 * d / 2,
                                r = new a.az(new a.eB(e, i, .015)),
                                s = new a.nB({
                                    mass: 0,
                                    material: o
                                }),
                                l = new a.PT;
                            l.setFromAxisAngle(new a.eB(0, 1, 0), null != c ? c : 0), s.quaternion.copy(l), s.position.set(t.x, t.y, t.z);
                            let h = .091 * d + .015;
                            s.addShape(r, new a.eB(0, 0, h)), n.addBody(s)
                        } catch (e) {}
                    }
                    this.scene = e, this.camera = s, this.controls = l, this.renderer = p || null, this.screen = j, this.screenMaterial = m, this.tvPosition = t.clone(), this.playerController = h, this.onPowerChangeCb = void 0;
                    let q = null != c ? c : Math.PI;
                    f.rotation.y = q, this.tvRotation = q;
                    try {
                        f.scale.set(d, d, d)
                    } catch (e) {}
                    this.prepareChannels(), this.initGalleryUI();
                    let U = new i.tBo,
                        W = new i.I9Y;
                    this.onTvClickBound = e => {
                        var t;
                        if (!this.camera || !this.screen) return void console.log("❌ No camera or screen available");
                        let n = null == (t = this.renderer) ? void 0 : t.domElement,
                            i = !!n && e.target === n,
                            a = e.target === document,
                            o = e.target,
                            r = !!o && o instanceof HTMLElement && o.style && ("none" === o.style.touchAction || "auto" === o.style.pointerEvents);
                        if (!n || !i && !a && !r) return void console.log("\uD83D\uDEAB Click not on 3D canvas/document/overlay, ignoring. Target:", e.target);
                        if (console.log("✅ TV Click handler triggered - target:", e.target), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), console.log("\uD83D\uDEA8 TV Click detected - event propagation stopped"), this.controls && this.controls.isLocked) W.set(0, 0), console.log("\uD83D\uDDB1️ Using center crosshair (pointer locked)");
                        else {
                            let t = n.getBoundingClientRect();
                            W.x = (e.clientX - t.left) / t.width * 2 - 1, W.y = -(2 * ((e.clientY - t.top) / t.height)) + 1, console.log("\uD83D\uDDB1️ Mouse NDC: (".concat(W.x.toFixed(3), ", ").concat(W.y.toFixed(3), ") [free look]"))
                        }
                        U.setFromCamera(W, this.camera);
                        let s = [];
                        this.screen && s.push(this.screen), this.uiOverlayMesh && s.push(this.uiOverlayMesh), console.log("\uD83C\uDFAF Raycasting against ".concat(s.length, " targets (screen: ").concat(!!this.screen, ", overlay: ").concat(!!this.uiOverlayMesh, ")"));
                        let l = U.intersectObjects(s);
                        if (console.log("\uD83C\uDFAF Found ".concat(l.length, " intersections")), l.length > 0) {
                            let e = l[0];
                            if (console.log("\uD83C\uDFAF Hit object: ".concat(e.object.name || "unnamed", ", distance: ").concat(e.distance.toFixed(3))), console.log("\uD83C\uDFAF UV coordinates: ".concat(e.uv ? "(".concat(e.uv.x.toFixed(3), ", ").concat(e.uv.y.toFixed(3), ")") : "none")), !this.isPlayerInRoom()) return void console.log("\uD83D\uDEAB TV interaction blocked - player is outside the room");
                            if (e.distance < 10)
                                if (console.log("✅ TV interaction detected at distance:", e.distance), this.isOn) {
                                    if ("gallery" === this.mode) {
                                        console.log("\uD83D\uDDBC️ Gallery mode - processing gallery click"), this.isMobileDevice() && console.log("\uD83D\uDCF1 Mobile gallery interaction detected"), console.log("\uD83D\uDDBC️ Gallery mode - selecting item from click");
                                        try {
                                            let t = this.galleryCanvas;
                                            if (t && e.uv) {
                                                let n = e.uv.x * t.width,
                                                    i = (1 - e.uv.y) * t.height,
                                                    a = t.width,
                                                    o = t.height,
                                                    r = Math.ceil(this.galleryItems.length / 3),
                                                    s = o - 200 - 80 - 40 * (r - 1),
                                                    l = (a - 160 - 100) / 3,
                                                    c = Math.min(s / r, 280),
                                                    d = 180 + (s - c) / 2,
                                                    h = -1;
                                                for (let e = 0; e < this.galleryItems.length; e++) {
                                                    let t = e % 3,
                                                        a = Math.floor(e / 3),
                                                        o = 80 + t * (l + 50),
                                                        r = d + a * (c + 40);
                                                    if (n >= o && n <= o + l && i >= r && i <= r + c) {
                                                        h = e;
                                                        break
                                                    }
                                                } - 1 !== h ? (this.selectedIndex = h, console.log("✅ Gallery click resolved to index ".concat(h))) : console.log("⚠️ Click outside card area - using current selectedIndex")
                                            }
                                        } catch (e) {
                                            console.warn("Gallery selection calc failed:", e)
                                        }
                                        this.enterVideoFromSelection()
                                    } else if ("video" === this.mode) {
                                        if (console.log("\uD83D\uDCF9 Video mode - checking for control clicks"), this.isMobileDevice() && console.log("\uD83D\uDCF1 Mobile video interaction detected"), console.log("\uD83D\uDCF9 Video mode - checking for control clicks"), this.uiOverlayMesh && e.object === this.uiOverlayMesh && (console.log("\uD83C\uDFAE Click on overlay detected - checking controls"), this.handleControlClick(e))) return void console.log("✅ Control button handled");
                                        console.log("\uD83D\uDD04 Toggling player UI"), this.togglePlayerUI()
                                    }
                                } else {
                                    if (console.log("\uD83D\uDCFA Turning TV on..."), this.isMobileDevice()) return void this.setPower(!0);
                                    this.setPower(!0)
                                }
                            else console.log("❌ Hit too far away:", e.distance)
                        } else console.log("❌ No intersections found")
                    }, document.addEventListener("click", this.onTvClickBound);
                    let H = e => {
                        console.log("\uD83D\uDCFA Power toggle event received:", e.detail), this.isPlayerInRoom() && (console.log("\uD83D\uDCFA Toggling TV power via long press"), this.setPower(!this.isOn))
                    };
                    document.addEventListener("tvPowerToggle", H), this.onKeyDownBound = e => {
                        if (this.isOn && this.isPlayerInRoom()) {
                            if ("video" === this.mode) return void("Backspace" === e.code || "KeyG" === e.code ? this.showGallery() : "ArrowRight" === e.code || "KeyN" === e.code ? (this.channelNext(), this.updatePlayerOverlayTitle()) : "ArrowLeft" === e.code || "KeyP" === e.code ? (this.channelPrev(), this.updatePlayerOverlayTitle()) : "Space" === e.code || ("KeyK" === e.code || "Enter" === e.code) && (e.preventDefault(), this.togglePlayPause()));
                            if ("gallery" === this.mode) {
                                let t = this.galleryItems.length - 1;
                                "ArrowRight" === e.code ? (this.selectedIndex = Math.min(t, this.selectedIndex + 1), this.drawGallery()) : "ArrowLeft" === e.code ? (this.selectedIndex = Math.max(0, this.selectedIndex - 1), this.drawGallery()) : "ArrowDown" === e.code ? (this.selectedIndex = Math.min(t, this.selectedIndex + 3), this.drawGallery()) : "ArrowUp" === e.code ? (this.selectedIndex = Math.max(0, this.selectedIndex - 3), this.drawGallery()) : ("Enter" === e.code || "KeyE" === e.code) && this.enterVideoFromSelection()
                            }
                            "KeyE" === e.code && (e.preventDefault(), this.setPower(!this.isOn))
                        }
                    }, document.addEventListener("keydown", this.onKeyDownBound)
                }
                static setPower(e) {
                    var t, n;
                    if (this.isOn = e, e) this.showGallery();
                    else {
                        if (this.screenMaterial) {
                            this.screenMaterial.map = null;
                            try {
                                this.screenMaterial.color = new i.Q1f(0)
                            } catch (e) {}
                            this.screenMaterial.needsUpdate = !0
                        }
                        if (this.uiOverlayMesh) {
                            try {
                                null == (t = this.uiOverlayMesh.parent) || t.remove(this.uiOverlayMesh)
                            } catch (e) {}
                            this.uiOverlayMesh = null
                        }
                        try {
                            Object.values(this.videoByChannel).forEach(e => {
                                if (e) try {
                                    e.pause(), e.currentTime = 0
                                } catch (e) {}
                            })
                        } catch (e) {}
                        this.mode = "gallery", this.isVideoPlaying = !1;
                        try {
                            this.reflectionMesh && (this.reflectionMesh.visible = !1)
                        } catch (e) {}
                    }
                    try {
                        null == (n = this.onPowerChangeCb) || n.call(this, e)
                    } catch (e) {}
                }
                static getState() {
                    return this.isOn
                }
                static dispose() {
                    this.onTvClickBound && (document.removeEventListener("click", this.onTvClickBound), this.onTvClickBound = void 0), this.onKeyDownBound && (document.removeEventListener("keydown", this.onKeyDownBound), this.onKeyDownBound = void 0);
                    try {
                        Object.values(this.videoByChannel).forEach(e => {
                            if (e) try {
                                e.pause()
                            } catch (e) {}
                        })
                    } catch (e) {}
                    try {
                        Object.values(this.objectUrlByChannel).forEach((e, t) => {
                            if (e) {
                                try {
                                    URL.revokeObjectURL(e)
                                } catch (e) {}
                                this.objectUrlByChannel[t] = null
                            }
                        })
                    } catch (e) {}
                    try {
                        Object.entries(this.objectUrlByChannel).forEach(e => {
                            let [t, n] = e;
                            if (n) {
                                try {
                                    URL.revokeObjectURL(n)
                                } catch (e) {}
                                this.objectUrlByChannel[Number(t)] = null
                            }
                        })
                    } catch (e) {}
                    console.log("\uD83D\uDCFA Television disposed")
                }
                static getChannelInfo() {
                    return {
                        index: this.currentChannel,
                        total: this.channelNames.length,
                        names: this.channelNames.slice()
                    }
                }
                static channelNext() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (0 === this.channelNames.length) return;
                    if ("video" === this.mode) {
                        let t = this.galleryItems.filter(e => "number" == typeof e.channelIndex).map(e => e.channelIndex).sort((e, t) => e - t);
                        if (t.length > 0) {
                            let n = (t.indexOf(this.currentChannel) + 1) % t.length;
                            this.setChannel(t[n], e);
                            return
                        }
                    }
                    let t = (this.currentChannel + 1) % this.channelNames.length;
                    this.setChannel(t, e)
                }
                static channelPrev() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (0 === this.channelNames.length) return;
                    if ("video" === this.mode) {
                        let t = this.galleryItems.filter(e => "number" == typeof e.channelIndex).map(e => e.channelIndex).sort((e, t) => e - t);
                        if (t.length > 0) {
                            let n = (t.indexOf(this.currentChannel) - 1 + t.length) % t.length;
                            this.setChannel(t[n], e);
                            return
                        }
                    }
                    let t = (this.currentChannel - 1 + this.channelNames.length) % this.channelNames.length;
                    this.setChannel(t, e)
                }
                static togglePlayPause() {
                    if (console.log("\uD83C\uDFAE togglePlayPause() called - Mode: ".concat(this.mode, ", Channel: ").concat(this.currentChannel)), console.log("\uD83D\uDCCA Channel analysis:\n            - Total channels: ".concat(this.channelNames.length, "\n            - Channel names: ").concat(this.channelNames.join(", "), "\n            - Current channel name: ").concat(this.channelNames[this.currentChannel] || "UNDEFINED")), "video" !== this.mode) return void console.warn("❌ Cannot toggle play/pause - Not in video mode: ".concat(this.mode));
                    if (this.currentChannel < 0 || this.currentChannel >= this.channelNames.length) return void console.warn("❌ Cannot toggle play/pause - Invalid channel: ".concat(this.currentChannel, " (max: ").concat(this.channelNames.length - 1, ")"));
                    if (!this.videoByChannel[this.currentChannel]) return void console.warn("❌ Cannot toggle play/pause - This is a procedural channel (".concat(this.channelNames[this.currentChannel], "), not a video channel"));
                    let e = this.videoByChannel[this.currentChannel];
                    if (!e) return void console.warn("❌ No video element found for channel ".concat(this.currentChannel));
                    console.log("\uD83C\uDFAC Video element info:\n            - channelIndex: ".concat(this.currentChannel, "\n            - src: ").concat(e.src, "\n            - paused: ").concat(e.paused, "\n            - readyState: ").concat(e.readyState, "\n            - duration: ").concat(e.duration, "\n            - currentTime: ").concat(e.currentTime, "\n            - muted: ").concat(e.muted, "\n            - volume: ").concat(e.volume));
                    try {
                        if (e.paused) {
                            console.log("▶️ Attempting to play video..."), e.muted = !0, e.playsInline = !0;
                            try {
                                e.setAttribute("playsinline", ""), e.setAttribute("muted", "")
                            } catch (e) {}
                            console.log("\uD83D\uDD0A Video attributes before play: muted=".concat(e.muted, ", volume=").concat(e.volume));
                            try {
                                let e = window.AudioContext || window.webkitAudioContext;
                                e && "suspended" === e.state && (console.log("\uD83D\uDD0A Resuming audio context..."), e.resume())
                            } catch (e) {
                                console.warn("⚠️ Could not resume audio context:", e)
                            }
                            e.play().then(() => {
                                this.isVideoPlaying = !0, console.log("✅ Video resumed successfully: ".concat(this.channelNames[this.currentChannel])), setTimeout(() => {
                                    try {
                                        e.muted = !1, e.volume = .7, console.log("\uD83D\uDD0A Video unmuted for audio playback - volume: ".concat(e.volume))
                                    } catch (e) {
                                        console.warn("⚠️ Could not unmute video:", e)
                                    }
                                }, 100), this.updatePlayerOverlayTitle()
                            }).catch(t => {
                                this.isVideoPlaying = !1, console.error("❌ Failed to play video:", t), console.error("❌ Video error details:", {
                                    error: e.error,
                                    networkState: e.networkState,
                                    readyState: e.readyState,
                                    paused: e.paused,
                                    ended: e.ended
                                }), console.log("\uD83D\uDD04 Trying alternative playback methods...");
                                try {
                                    e.load(), setTimeout(() => {
                                        e.play().then(() => {
                                            this.isVideoPlaying = !0, console.log("✅ Video playing after load retry"), this.updatePlayerOverlayTitle()
                                        }).catch(e => {
                                            console.error("❌ Retry also failed:", e)
                                        })
                                    }, 100)
                                } catch (e) {
                                    console.error("❌ Video load failed:", e)
                                }
                            })
                        } else console.log("⏸️ Pausing video..."), e.pause(), this.isVideoPlaying = !1, console.log("✅ Video paused: ".concat(this.channelNames[this.currentChannel])), this.updatePlayerOverlayTitle()
                    } catch (e) {
                        console.error("❌ Error toggling play/pause:", e)
                    }
                }
                static setChannel(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e < 0 || e >= this.channelNames.length) return;
                    if (this.currentChannel = e, this.screenMaterial && this.isPlayerInRoom()) {
                        let t = this.channelTextures[e];
                        this.screenMaterial.map = t || null, this.screenMaterial.needsUpdate = !0
                    } else this.screenMaterial && !this.isPlayerInRoom() && (this.screenMaterial.map = null, this.screenMaterial.color = new i.Q1f(0), this.screenMaterial.needsUpdate = !0);
                    let n = this.videoByChannel[e];
                    try {
                        Object.entries(this.videoByChannel).forEach(t => {
                            let [n, i] = t;
                            if (i && Number(n) !== e) try {
                                i.pause()
                            } catch (e) {}
                        })
                    } catch (e) {}
                    if (n && this.isOn) {
                        console.log("\uD83C\uDFAF setChannel: Playing channel ".concat(e)), n.muted = !0, n.playsInline = !0;
                        try {
                            n.setAttribute("playsinline", ""), n.setAttribute("muted", "")
                        } catch (e) {}
                        n.autoplay = !1;
                        let i = () => {
                                if (t) try {
                                    n.muted = !1, n.volume = .7, console.log("\uD83D\uDD0A Unmuted after channel switch")
                                } catch (e) {}
                            },
                            a = () => {
                                try {
                                    let e = n.play();
                                    e && e.then(() => {
                                        this.isVideoPlaying = !0, i()
                                    }).catch(e => console.warn("❌ Video play failed:", e))
                                } catch (e) {
                                    console.warn("❌ Video play exception:", e)
                                }
                            },
                            o = "number" == typeof n.HAVE_CURRENT_DATA ? n.HAVE_CURRENT_DATA : 2;
                        if (n.src && n.readyState >= o) a(), this.isVideoPlaying = !0, setTimeout(i, 100);
                        else {
                            let e = () => {
                                try {
                                    n.removeEventListener("canplay", e)
                                } catch (e) {}
                                a(), this.isVideoPlaying = !0, setTimeout(i, 50)
                            };
                            try {
                                n.addEventListener("canplay", e, {
                                    once: !0
                                })
                            } catch (t) {
                                n.addEventListener("canplay", e)
                            }
                            try {
                                n.load()
                            } catch (e) {}
                        }
                    } else this.isVideoPlaying = !1;
                    "video" === this.mode && this.playerCtx && this.drawPlayerOverlay(this.channelNames[e] || "Channel")
                }
                static update(e) {
                    if (this.isOn) {
                        if (this.isPlayerInRoom()) {
                            if (this.screenMaterial && this.isOn) {
                                if (this.screenMaterial.color = new i.Q1f(0xffffff), "gallery" === this.mode && this.galleryTexture) this.screenMaterial.map = this.galleryTexture;
                                else if ("video" === this.mode) {
                                    let e = this.channelTextures[this.currentChannel];
                                    this.screenMaterial.map = e || null
                                }
                                this.screenMaterial.needsUpdate = !0
                            }
                            this.reflectionMesh && (this.reflectionMesh.visible = !0)
                        } else {
                            if (this.uiOverlayMesh) {
                                console.log("\uD83D\uDEAB Player left room - hiding TV UI overlay");
                                try {
                                    var t;
                                    null == (t = this.uiOverlayMesh.parent) || t.remove(this.uiOverlayMesh)
                                } catch (e) {}
                                this.uiOverlayMesh = null
                            }
                            this.screenMaterial && (this.screenMaterial.map = null, this.screenMaterial.color = new i.Q1f(0), this.screenMaterial.needsUpdate = !0), this.reflectionMesh && (this.reflectionMesh.visible = !1)
                        }
                        if ("video" === this.mode) {
                            let t = this.channelUpdaters[this.currentChannel];
                            t ? t(e) : .001 > Math.random() && (console.warn("\uD83D\uDD0D No updater for channel ".concat(this.currentChannel, ". Total updaters: ").concat(this.channelUpdaters.length)), console.warn("\uD83D\uDCCB Channel updaters status:", this.channelUpdaters.map((e, t) => "".concat(t, ": ").concat(e ? "exists" : "null")).join(", ")))
                        }
                    }
                }
                static prepareChannels() {
                    let e = () => {
                            let e = document.createElement("canvas");
                            e.width = 768, e.height = 432;
                            let t = e.getContext("2d"),
                                n = new i.GOR(e);
                            n.colorSpace = i.er$;
                            let a = e.width;
                            this.channelNames.push("News"), this.channelTextures.push(n), this.channelUpdaters.push(i => {
                                t.fillStyle = "#0b0f14", t.fillRect(0, 0, e.width, e.height), t.fillStyle = "#173b8a", t.fillRect(0, 0, e.width, 80), t.fillStyle = "#e9eefc", t.font = "bold 32px Arial", t.fillText("Live News", 24, 54), t.fillStyle = "#10233d", t.fillRect(0, e.height - 60, e.width, 60), t.fillStyle = "#a8c2ff", t.font = "24px Arial";
                                let o = "Breaking: Welcome to Smart TV — Channel Demo with Next.js + Three.js  ";
                                (a -= 120 * i) < -t.measureText(o).width && (a = e.width), t.fillText(o, a, e.height - 20), n.needsUpdate = !0
                            })
                        },
                        t = () => {
                            let e = document.createElement("canvas");
                            e.width = 384, e.height = 216;
                            let t = e.getContext("2d"),
                                n = t.createImageData(384, 216),
                                a = new i.GOR(e);
                            a.colorSpace = i.er$, this.channelNames.push("Noise"), this.channelTextures.push(a), this.channelUpdaters.push(() => {
                                let e = n.data;
                                for (let t = 0; t < e.length; t += 4) {
                                    let n = 255 * Math.random();
                                    e[t] = e[t + 1] = e[t + 2] = n, e[t + 3] = 255
                                }
                                t.putImageData(n, 0, 0), a.needsUpdate = !0
                            })
                        };
                    (() => {
                        let e = document.createElement("canvas");
                        e.width = 512, e.height = 288;
                        let t = e.getContext("2d"),
                            n = ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ffffff"],
                            a = Math.ceil(e.width / n.length);
                        n.forEach((n, i) => {
                            t.fillStyle = n, t.fillRect(i * a, 0, a, .8 * e.height)
                        }), t.fillStyle = "#222", t.fillRect(0, .8 * e.height, e.height, .2 * e.height);
                        let o = new i.GOR(e);
                        o.colorSpace = i.er$, this.channelNames.push("Color Bars"), this.channelTextures.push(o), this.channelUpdaters.push(null)
                    })(), e(), t(), this.galleryItems = [{
                        id: "vid-1",
                        title: "Naik\nGunung",
                        channelIndex: 3,
                        color: "#5DADE2"
                    }, {
                        id: "vid-2",
                        title: "Rayain Ultah\nTahun Lalu",
                        channelIndex: 4,
                        color: "#58D68D"
                    }, {
                        id: "vid-3",
                        title: "Review\nMakanan",
                        channelIndex: 5,
                        color: "#F7DC6F"
                    }];
                    for (let e = 0; e < this.galleryItems.length; e++) {
                        let t = document.createElement("canvas");
                        t.width = 1280, t.height = 720;
                        let n = t.getContext("2d"),
                            a = n.createLinearGradient(0, 0, 0, t.height);
                        a.addColorStop(0, "#0f172a"), a.addColorStop(1, "#111827"), n.fillStyle = a, n.fillRect(0, 0, t.width, t.height), n.fillStyle = "#94a3b8", n.font = "bold 44px Arial", n.textAlign = "center", n.fillText("Loading…", t.width / 2, t.height / 2);
                        let o = new i.GOR(t);
                        o.colorSpace = i.er$, this.channelNames.push(["Naik Gunung", "Rayain Ultah Tahun Lalu", "Review Makanan"][e]), this.channelTextures.push(o), this.channelUpdaters.push(null), this.videoByChannel[3 + e] = null
                    }
                    let n = (e, t, n) => {
                        let a;
                        console.log("\uD83C\uDFAC tryAddVideo called - path: ".concat(e, ", name: ").concat(t, ", galleryIndex: ").concat(n));
                        let o = document.createElement("video");
                        try {
                            o.src = new URL(e, window.location.origin).toString()
                        } catch (t) {
                            o.src = e
                        }
                        console.log("\uD83D\uDCC1 Video src set to: ".concat(o.src)), o.loop = !0, o.playsInline = !0;
                        try {
                            o.setAttribute("playsinline", "")
                        } catch (e) {}
                        o.crossOrigin = "anonymous", o.muted = !0;
                        try {
                            o.setAttribute("muted", "")
                        } catch (e) {}
                        o.autoplay = !1, o.preload = "auto", console.log("\uD83C\uDFAF Video element created with attributes:\n                - src: ".concat(o.src, "\n                - muted: ").concat(o.muted, "\n                - loop: ").concat(o.loop, "\n                - preload: ").concat(o.preload, "\n                - autoplay: ").concat(o.autoplay));
                        let r = () => {
                                try {
                                    console.log("\uD83C\uDFAC Attempting to play video: ".concat(t));
                                    let e = o.play();
                                    e && e.then(() => {
                                        console.log("✅ Video playing: ".concat(t))
                                    }).catch(e => {
                                        console.warn("❌ Video play failed for ".concat(t, ":"), e)
                                    })
                                } catch (e) {
                                    console.warn("❌ Video play exception for ".concat(t, ":"), e)
                                }
                            },
                            s = null,
                            l = () => {
                                try {
                                    a && clearTimeout(a)
                                } catch (e) {}
                            },
                            c = async () => {
                                try {
                                    console.log("⬇️ Fetching video as blob (fallback): ".concat(o.src));
                                    let e = await fetch(o.src, {
                                        cache: "no-store"
                                    });
                                    if (!e.ok) throw Error("HTTP ".concat(e.status));
                                    let t = await e.blob(),
                                        n = URL.createObjectURL(t);
                                    s = n, o._objectUrl = n, o.src = n;
                                    try {
                                        o.load()
                                    } catch (e) {}
                                } catch (e) {
                                    console.warn("❌ Blob fallback failed:", e);
                                    try {
                                        o.load()
                                    } catch (e) {}
                                }
                            }, d = () => {
                                try {
                                    o.removeEventListener("loadedmetadata", d), o.removeEventListener("canplay", d), o.removeEventListener("error", h), l()
                                } catch (e) {}
                                let e = new i.Nv2(o);
                                e.minFilter = i.k6q, e.magFilter = i.k6q, e.generateMipmaps = !1, e.colorSpace = i.er$;
                                let a = () => {
                                        !o || o.paused || o.ended ? o && (o.paused || o.ended) && (this.isVideoPlaying = !1, .016 > Math.random() && console.log("⏸️ VideoUpdater for ".concat(t, ": video not playing - paused: ").concat(o.paused, ", ended: ").concat(o.ended))) : (e.needsUpdate = !0, this.isVideoPlaying = !0, .016 > Math.random() && console.log("\uD83C\uDFAC VideoUpdater for ".concat(t, ": updating texture - paused: ").concat(o.paused, ", ended: ").concat(o.ended, ", currentTime: ").concat(o.currentTime.toFixed(2))))
                                    },
                                    c = "number" == typeof n ? 3 + n : this.currentChannel;
                                this.channelNames[c] = t, this.channelTextures[c] = e, this.channelUpdaters[c] = a, this.videoByChannel[c] = o;
                                try {
                                    this.objectUrlByChannel[c] = s || null
                                } catch (e) {}
                                "number" == typeof n && this.galleryItems[n] && (this.galleryItems[n].channelIndex = c, this.galleryItems[n].title = t.replace(" - ", "\n")), this.isOn && "gallery" === this.mode && this.drawGallery();
                                try {
                                    this.isOn && "video" === this.mode && ("number" == typeof n && this.selectedIndex === n ? (this.setChannel(c), r()) : this.currentChannel === c && r())
                                } catch (e) {}
                                console.log("✅ Video loaded successfully: ".concat(t, ", readyState: ").concat(o.readyState, ", duration: ").concat(o.duration || "unknown"))
                            }, h = () => {
                                try {
                                    o.removeEventListener("loadedmetadata", d), o.removeEventListener("canplay", d), l()
                                } catch (e) {}
                                console.warn("⚠️ Video load/play error (akan retry, tidak menandai hilang): ".concat(e)), console.warn("ℹ️ Status:", {
                                    error: o.error,
                                    networkState: o.networkState,
                                    readyState: o.readyState,
                                    src: o.src
                                });
                                try {
                                    let e = o._objectUrl;
                                    e && (URL.revokeObjectURL(e), o._objectUrl = void 0, s = null)
                                } catch (e) {}
                                let t = Math.min(3e4, 2e3 * ++g);
                                window.setTimeout(async () => {
                                    try {
                                        if (g >= 2 && !s) await c();
                                        else {
                                            o.src = m(e);
                                            try {
                                                o.load()
                                            } catch (e) {}
                                        }
                                    } catch (e) {}
                                }, t)
                            };
                        a = window.setTimeout(() => {
                            console.warn("⏱️ Video loading timeout: ".concat(e)), h()
                        }, 2e4), o.addEventListener("loadedmetadata", d), o.addEventListener("canplay", d), o.addEventListener("error", h), o.addEventListener("abort", h);
                        let p = () => {
                            try {
                                if (!this.isOn) return;
                                r()
                            } catch (e) {}
                        };
                        try {
                            o.addEventListener("canplay", p, {
                                once: !0
                            })
                        } catch (e) {
                            o.addEventListener("canplay", p)
                        }
                        let u = null;
                        try {
                            (u = document.createElement("div")).style.position = "fixed", u.style.left = "-99999px", u.style.top = "-99999px", u.style.width = "1px", u.style.height = "1px", u.style.overflow = "hidden", document.body.appendChild(u), u.appendChild(o)
                        } catch (e) {}
                        try {
                            o.load()
                        } catch (e) {}
                        let m = e => {
                                try {
                                    let t = new URL(e, window.location.origin);
                                    return t.searchParams.set("cb", String(Date.now())), t.toString()
                                } catch (t) {
                                    return "".concat(e, "?cb=").concat(Date.now())
                                }
                            },
                            g = 0,
                            x = (e, t) => {
                                window.setTimeout(() => {
                                    o.readyState > 0 || t()
                                }, e)
                            };
                        x(4e3, () => {
                            g++;
                            try {
                                o.src = m(e), o.load()
                            } catch (e) {}
                        }), x(8e3, () => {
                            if (!(o.readyState > 0)) {
                                g++;
                                try {
                                    o.src = m(e), o.load()
                                } catch (e) {}
                            }
                        }), x(12e3, () => {
                            o.readyState > 0 || (g++, c().catch(() => {
                                try {
                                    o.load()
                                } catch (e) {}
                            }))
                        }), x(2e4, () => {
                            if (!(o.readyState > 0)) {
                                g++;
                                try {
                                    o.src = m(e), o.load()
                                } catch (e) {}
                            }
                        });
                        let f = () => {
                                try {
                                    u && u.parentElement && (u.parentElement.removeChild(u), u = null)
                                } catch (e) {}
                            },
                            w = () => {
                                try {
                                    f()
                                } catch (e) {}
                                d()
                            },
                            y = () => {
                                try {
                                    f()
                                } catch (e) {}
                                h()
                            };
                        try {
                            o.removeEventListener("loadedmetadata", d), o.removeEventListener("canplay", d), o.removeEventListener("error", h)
                        } catch (e) {}
                        try {
                            o.addEventListener("loadedmetadata", w), o.addEventListener("canplay", w), o.addEventListener("error", y), o.addEventListener("abort", y)
                        } catch (e) {}
                    };
                    try {
                        n("/birthdaycoksmew/video/video1.mp4", "Teman", 0)
                    } catch (e) {}
                    try {
                        n("/birthdaycoksmew/video/video2.mp4", "Spesial", 1)
                    } catch (e) {}
                    try {
                        n("/birthdaycoksmew/video/video3.mp4", "Surprise", 2)
                    } catch (e) {}
                    this.currentChannel = 0
                }
                static initGalleryUI() {
                    if (this.galleryCanvas) return;
                    let e = document.createElement("canvas");
                    e.width = 1280, e.height = 720;
                    let t = e.getContext("2d");
                    if (!t) return;
                    let n = new i.GOR(e);
                    n.minFilter = i.k6q, n.magFilter = i.k6q, n.generateMipmaps = !1, n.colorSpace = i.er$, this.galleryCanvas = e, this.galleryCtx = t, this.galleryTexture = n
                }
                static drawGallery() {
                    if (!this.galleryCtx || !this.galleryCanvas || !this.galleryTexture) return;
                    let e = this.galleryCtx,
                        t = this.galleryCanvas.width,
                        n = this.galleryCanvas.height,
                        i = e.createLinearGradient(0, 0, 0, n);
                    i.addColorStop(0, "#0f172a"), i.addColorStop(.6, "#1e293b"), i.addColorStop(1, "#020617"), e.fillStyle = i, e.fillRect(0, 0, t, n), e.fillStyle = "#f8fafc", e.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', e.textAlign = "left", e.fillText("Video Gallery", 50, 80), e.fillStyle = "#94a3b8", e.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', e.fillText("Select a video to play", 50, 115);
                    let a = e.createLinearGradient(50, 140, t - 50, 140);
                    a.addColorStop(0, "rgba(59, 130, 246, 0)"), a.addColorStop(.5, "rgba(59, 130, 246, 0.6)"), a.addColorStop(1, "rgba(59, 130, 246, 0)"), e.fillStyle = a, e.fillRect(50, 140, t - 100, 3);
                    let o = Math.ceil(this.galleryItems.length / 3),
                        r = n - 200 - 80 - 40 * (o - 1),
                        s = (t - 160 - 100) / 3,
                        l = Math.min(r / o, 280);
                    this.galleryItems.forEach((t, n) => {
                        let i = Math.floor(n / 3),
                            a = 80 + n % 3 * (s + 50),
                            o = 180 + (r - l) / 2 + i * (l + 40),
                            c = n === this.selectedIndex;
                        c ? (e.save(), e.shadowColor = "rgba(59, 130, 246, 0.4)", e.shadowBlur = 25, e.shadowOffsetX = 0, e.shadowOffsetY = 8) : (e.save(), e.shadowColor = "rgba(0, 0, 0, 0.3)", e.shadowBlur = 15, e.shadowOffsetX = 0, e.shadowOffsetY = 4), this.roundRect(e, a, o, s, l, 20), e.fillStyle = c ? "rgba(30, 41, 59, 0.9)" : "rgba(30, 41, 59, 0.6)", e.fill(), e.restore();
                        let d = s - 40,
                            h = l - 80;
                        this.roundRect(e, a + 20, o + 20, d, h, 16);
                        let p = e.createLinearGradient(a + 20, o + 20, a + 20, o + 20 + h);
                        if (p.addColorStop(0, t.color), p.addColorStop(1, this.darkenColor(t.color, .3)), e.fillStyle = p, e.fill(), c) {
                            let n = a + 20 + d / 2,
                                i = o + 20 + h / 2;
                            e.fillStyle = "rgba(255, 255, 255, 0.9)", e.beginPath(), e.arc(n, i, 30, 0, 2 * Math.PI), e.fill(), e.fillStyle = t.color, e.beginPath(), e.moveTo(n - 8, i - 12), e.lineTo(n - 8, i + 12), e.lineTo(n + 12, i), e.closePath(), e.fill()
                        }
                        e.fillStyle = "#f8fafc", e.font = "".concat(c ? "bold" : "normal", ' 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'), e.textAlign = "center";
                        let u = t.title.split("\n");
                        u.length > 1 ? (e.fillText(u[0], a + s / 2, o + l - 45), e.font = "".concat(c ? "bold" : "normal", ' 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'), e.fillStyle = "#94a3b8", e.fillText(u[1], a + s / 2, o + l - 20)) : e.fillText(t.title, a + s / 2, o + l - 30), c && (e.lineWidth = 3, e.strokeStyle = "#3b82f6", this.roundRect(e, a - 2, o - 2, s + 4, l + 4, 22), e.stroke())
                    }), e.fillStyle = "#64748b", e.font = '18px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', e.textAlign = "center", e.fillText("Use arrow keys to navigate • Enter to select • Click to play", t / 2, n - 30), this.galleryTexture.needsUpdate = !0, this.screenMaterial && (this.screenMaterial.map = this.galleryTexture, this.screenMaterial.needsUpdate = !0)
                }
                static roundRect(e, t, n, i, a, o) {
                    e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + i - o, n), e.quadraticCurveTo(t + i, n, t + i, n + o), e.lineTo(t + i, n + a - o), e.quadraticCurveTo(t + i, n + a, t + i - o, n + a), e.lineTo(t + o, n + a), e.quadraticCurveTo(t, n + a, t, n + a - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath()
                }
                static darkenColor(e, t) {
                    let n = parseInt((e = e.replace("#", "")).substr(0, 2), 16),
                        i = parseInt(e.substr(2, 2), 16),
                        a = parseInt(e.substr(4, 2), 16),
                        o = Math.max(0, Math.round(n * (1 - t))),
                        r = Math.max(0, Math.round(i * (1 - t))),
                        s = Math.max(0, Math.round(a * (1 - t))),
                        l = e => e.toString(16).padStart(2, "0");
                    return "#".concat(l(o)).concat(l(r)).concat(l(s))
                }
                static handleControlClick(e) {
                    if (!this.uiOverlayMesh || !this.playerCanvas) return console.log("❌ No overlay mesh or canvas available"), !1;
                    if (e.uv) {
                        let t = e.uv.x * this.playerCanvas.width,
                            n = (1 - e.uv.y) * this.playerCanvas.height;
                        console.log("\uD83C\uDFAF Click detected at canvas coordinates: (".concat(t.toFixed(2), ", ").concat(n.toFixed(2), ")")), console.log("\uD83D\uDCD0 Canvas size: ".concat(this.playerCanvas.width, "x").concat(this.playerCanvas.height));
                        let i = this.playerCanvas.height,
                            a = this.playerCanvas.width,
                            o = i - 100 - 20 + 20;
                        if (console.log("\uD83D\uDCCA Button area Y: ".concat(o, " to ").concat(o + 60)), console.log("⏮️ Previous button area: x(".concat(60, "-").concat(180, ") y(").concat(o, "-").concat(o + 60, ")")), t >= 50 && t <= 190 && n >= o - 10 && n <= o + 60 + 10) return console.log("✅ Previous button clicked - executing channelPrev(withSound=true)"), this.channelPrev(!0), this.updatePlayerOverlayTitle(), !0;
                        if (console.log("⏭️ Next button area: x(".concat(210, "-").concat(330, ") y(").concat(o, "-").concat(o + 60, ")")), t >= 200 && t <= 340 && n >= o - 10 && n <= o + 60 + 10) return console.log("✅ Next button clicked - executing channelNext(withSound=true)"), this.channelNext(!0), this.updatePlayerOverlayTitle(), !0;
                        if (console.log("⏯️ Play/Pause button area: x(".concat(360, "-").concat(480, ") y(").concat(o, "-").concat(o + 60, ")")), console.log("\uD83C\uDFAF Current click position: x(".concat(t.toFixed(2), ") y(").concat(n.toFixed(2), ")")), console.log("\uD83D\uDCCA Current TV mode: ".concat(this.mode, ", Channel: ").concat(this.currentChannel, ", IsOn: ").concat(this.isOn)), console.log("\uD83D\uDCF9 Video playing status: ".concat(this.isVideoPlaying)), t >= 350 && t <= 490 && n >= o - 10 && n <= o + 60 + 10) return console.log("\uD83C\uDFAF PLAY/PAUSE BUTTON CLICKED! Executing togglePlayPause()"), this.updatePlayerOverlayTitle(), this.togglePlayPause(), !0;
                        let r = a - 60 - 120;
                        if (console.log("\uD83C\uDFE0 Gallery button area: x(".concat(r, "-").concat(r + 120, ") y(").concat(o, "-").concat(o + 60, ")")), t >= r - 10 && t <= r + 120 + 10 && n >= o - 10 && n <= o + 60 + 10) {
                            console.log("✅ Gallery button clicked - executing showGallery()");
                            try {
                                Object.values(this.videoByChannel).forEach(e => {
                                    e && e.pause()
                                })
                            } catch (e) {}
                            this.isVideoPlaying = !1, this.showGallery();
                            try {
                                this.screenMaterial && (this.screenMaterial.needsUpdate = !0)
                            } catch (e) {}
                            return !0
                        }
                        if (n >= o - 20 && n <= o + 60 + 20)
                            if (t < a / 3) return console.log("✅ Left area clicked - Previous (fallback withSound)"), this.channelPrev(!0), this.updatePlayerOverlayTitle(), !0;
                            else if (t < 2 * a / 3) return console.log("✅ Middle area clicked - Next (fallback withSound)"), this.channelNext(!0), this.updatePlayerOverlayTitle(), !0;
                        else return console.log("✅ Right area clicked - Gallery (fallback)"), this.showGallery(), !0;
                        console.log("❌ Click outside button areas")
                    } else console.log("❌ No UV coordinates available in intersection");
                    return !1
                }
                static updatePlayerOverlayTitle() {
                    if ("video" === this.mode && this.uiOverlayMesh) {
                        let e = this.channelNames[this.currentChannel] || "Channel";
                        this.drawPlayerOverlay(e)
                    }
                }
                static enterViewingMode() {
                    console.log("\uD83D\uDCFA Viewing mode disabled - TV will only turn on without camera control")
                }
                static exitViewingMode() {
                    console.log("\uD83D\uDCFA Exit viewing mode disabled - no viewing mode active")
                }
                static animateCameraToPosition(e, t, n) {
                    if (!this.camera) return;
                    let a = this.camera.position.clone(),
                        o = this.camera.rotation.clone(),
                        r = null;
                    if (t) {
                        let n = this.camera.clone();
                        n.position.copy(e), n.lookAt(t), r = n.rotation.clone(), console.log("\uD83D\uDCFA Calculated target rotation: x:".concat((180 * r.x / Math.PI).toFixed(1), "\xb0 y:").concat((180 * r.y / Math.PI).toFixed(1), "\xb0 z:").concat((180 * r.z / Math.PI).toFixed(1), "\xb0"))
                    }
                    let s = Date.now(),
                        l = () => {
                            let c = Math.min((Date.now() - s) / 1500, 1),
                                d = 1 - Math.pow(1 - c, 3);
                            if (this.camera.position.lerpVectors(a, e, d), t) this.camera.lookAt(t);
                            else if (r) {
                                let e = new i.PTz().setFromEuler(o),
                                    t = new i.PTz().setFromEuler(r),
                                    n = e.clone().slerp(t, d);
                                this.camera.rotation.setFromQuaternion(n)
                            } else if (n) {
                                let e = new i.PTz().setFromEuler(o),
                                    t = new i.PTz().setFromEuler(n),
                                    a = e.clone().slerp(t, d);
                                this.camera.rotation.setFromQuaternion(a)
                            }
                            c < 1 ? requestAnimationFrame(l) : (this.camera.position.copy(e), t ? (this.camera.lookAt(t), console.log("\uD83D\uDCFA Camera positioned and facing TV")) : r && this.camera.rotation.copy(r), console.log("\uD83D\uDCFA Camera animation complete - now facing TV directly"))
                        };
                    l()
                }
                static getViewingMode() {
                    return this.isViewingMode
                }
                static isPlayerInRoom() {
                    if (!this.playerController) return !1;
                    try {
                        var e;
                        let t = null == (e = this.playerController.playerBody) ? void 0 : e.position;
                        if (!t) return !1;
                        let n = t.x,
                            i = t.z;
                        return n >= this.roomBounds.x.min && n <= this.roomBounds.x.max && i >= this.roomBounds.z.min && i <= this.roomBounds.z.max
                    } catch (e) {
                        return console.warn("Error checking player room position:", e), !1
                    }
                }
                static showGallery() {
                    if (this.galleryTexture && this.galleryCtx || this.initGalleryUI(), this.mode = "gallery", this.selectedIndex = Math.max(0, Math.min(this.selectedIndex, this.galleryItems.length - 1)), this.uiOverlayMesh) {
                        try {
                            var e, t;
                            null == (t = this.screen) || null == (e = t.parent) || e.remove(this.uiOverlayMesh)
                        } catch (e) {}
                        this.uiOverlayMesh = null
                    }
                    this.videoElements.forEach(e => {
                        try {
                            e.pause(), e.currentTime = 0
                        } catch (e) {}
                    }), this.drawGallery(), this.screenMaterial && this.galleryTexture && this.isPlayerInRoom() ? (this.screenMaterial.map = this.galleryTexture, this.screenMaterial.color = new i.Q1f(0xffffff), this.screenMaterial.needsUpdate = !0) : this.screenMaterial && !this.isPlayerInRoom() && (this.screenMaterial.map = null, this.screenMaterial.color = new i.Q1f(0), this.screenMaterial.needsUpdate = !0)
                }
                static ensurePlayerOverlay() {
                    if (this.uiOverlayMesh) return;
                    if (!this.playerCanvas) {
                        let e = document.createElement("canvas");
                        e.width = 1280, e.height = 720;
                        let t = e.getContext("2d");
                        if (!t) return;
                        let n = new i.GOR(e);
                        n.minFilter = i.k6q, n.magFilter = i.k6q, n.generateMipmaps = !1, n.colorSpace = i.er$, n.premultiplyAlpha = !0, this.playerCanvas = e, this.playerCtx = t, this.playerTexture = n
                    }
                    let e = new i.bdM(1.475, .855),
                        t = new i.V9B({
                            map: this.playerTexture,
                            transparent: !0,
                            opacity: 1,
                            depthWrite: !1,
                            depthTest: !1
                        }),
                        n = new i.eaF(e, t);
                    n.position.set(0, 0, .093), n.renderOrder = 101, n.frustumCulled = !1, this.uiOverlayMesh = n, n.name = "TV_UI_OVERLAY", n.raycast = i.eaF.prototype.raycast;
                    try {
                        n.material.depthTest = !1, n.material.depthWrite = !1
                    } catch (e) {}
                    try {
                        var a, o;
                        null == (o = this.screen) || null == (a = o.parent) || a.add(n)
                    } catch (e) {}
                    n.material.toneMapped = !1
                }
                static drawPlayerOverlay(e) {
                    if (!this.playerCtx || !this.playerCanvas || !this.playerTexture) return;
                    let t = this.playerCtx,
                        n = this.playerCanvas.width,
                        i = this.playerCanvas.height;
                    t.clearRect(0, 0, n, i);
                    let a = t.createLinearGradient(0, 0, 0, i);
                    a.addColorStop(0, "rgba(0, 0, 0, 0.1)"), a.addColorStop(.8, "rgba(0, 0, 0, 0.4)"), a.addColorStop(1, "rgba(0, 0, 0, 0.7)"), t.fillStyle = a, t.fillRect(0, 0, n, i), t.fillStyle = "rgba(15, 23, 42, 0.8)", this.roundRect(t, 40, 30, n - 80, 80, 15), t.fill(), t.fillStyle = "#f8fafc", t.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', t.textAlign = "left", t.fillText(e || "Video Player", 60, 70), t.fillStyle = "#10b981", t.beginPath(), t.arc(n - 80, 70, 8, 0, 2 * Math.PI), t.fill(), t.fillStyle = "#94a3b8", t.font = '18px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
                    let o = this.isVideoPlaying ? "PLAYING" : "PAUSED",
                        r = this.isVideoPlaying ? "#22c55e" : "#ef4444";
                    t.fillStyle = r, t.fillText(o, n - 180, 75), t.beginPath(), t.arc(n - 50, 70, 6, 0, 2 * Math.PI), t.fillStyle = r, t.fill();
                    let s = i - 100 - 20;
                    t.fillStyle = "rgba(15, 23, 42, 0.9)", this.roundRect(t, 40, s, n - 80, 100, 15), t.fill();
                    let l = (e, n, i, a, o, r) => {
                            t.save();
                            let s = t.createLinearGradient(e, n, e, n + a);
                            s.addColorStop(0, "rgba(59, 130, 246, 0.8)"), s.addColorStop(1, "rgba(37, 99, 235, 0.8)"), t.fillStyle = s, this.roundRect(t, e, n, i, a, 8), t.fill(), t.strokeStyle = "rgba(147, 197, 253, 0.5)", t.lineWidth = 1, t.stroke(), t.fillStyle = "#ffffff", t.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', t.textAlign = "center", r ? (t.font = "24px Arial", t.fillText(r, e + i / 2, n + a / 2 - 5), t.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', t.fillText(o, e + i / 2, n + a / 2 + 15)) : t.fillText(o, e + i / 2, n + a / 2 + 6), t.restore()
                        },
                        c = s + 20;
                    l(60, c, 120, 60, "Previous", "⏮"), l(210, c, 120, 60, "Next", "⏭");
                    let d = this.isVideoPlaying ? "⏸" : "▶";
                    l(360, c, 120, 60, this.isVideoPlaying ? "Pause" : "Play", d), l(n - 60 - 120, c, 120, 60, "Gallery", "⬅"), this.playerTexture.needsUpdate = !0
                }
                static showPlayerOverlay(e) {
                    this.isPlayerInRoom() && (this.ensurePlayerOverlay(), this.drawPlayerOverlay(e))
                }
                static togglePlayerUI() {
                    if (this.uiOverlayMesh) {
                        try {
                            var e;
                            null == (e = this.uiOverlayMesh.parent) || e.remove(this.uiOverlayMesh)
                        } catch (e) {}
                        this.uiOverlayMesh = null
                    } else this.isPlayerInRoom() && this.showPlayerOverlay(this.channelNames[this.currentChannel] || "Channel")
                }
                static enterVideoFromSelection() {
                    let e = this.galleryItems[this.selectedIndex];
                    console.log("\uD83C\uDFAE enterVideoFromSelection called - selectedIndex: ".concat(this.selectedIndex, ", galleryItem:"), e), this.mode = "video", this.screenMaterial && (this.screenMaterial.map = null, this.screenMaterial.needsUpdate = !0);
                    let t = "number" == typeof (null == e ? void 0 : e.channelIndex) ? e.channelIndex : -1;
                    try {
                        Object.entries(this.videoByChannel).forEach(e => {
                            let [n, i] = e;
                            if (i && Number(n) !== t) try {
                                i.pause(), i.currentTime = 0
                            } catch (e) {}
                        })
                    } catch (e) {}
                    e && "number" == typeof e.channelIndex ? (console.log("\uD83C\uDFAC Entering video mode for channel ".concat(e.channelIndex, ": ").concat(e.title)), console.log("\uD83D\uDD0D Debug channel info:\n                - Selected gallery index: ".concat(this.selectedIndex, "\n                - Gallery item channelIndex: ").concat(e.channelIndex, "\n                - Total channels: ").concat(this.channelNames.length, "\n                - Total videoElements: ").concat(this.videoElements.length, "\n                - Channel names: ").concat(this.channelNames.join(", "))), this.setChannel(e.channelIndex, !0), setTimeout(() => {
                        let t = this.videoByChannel[e.channelIndex];
                        if (console.log("\uD83C\uDFAF Force play attempt: channelIndex=".concat(e.channelIndex, ", video exists=").concat(!!t)), t && this.isOn) {
                            console.log("\uD83C\uDFAC Force playing video for ".concat(e.title)), t.muted = !0, t.playsInline = !0;
                            try {
                                t.setAttribute("playsinline", ""), t.setAttribute("muted", "")
                            } catch (e) {}
                            t.play().then(() => {
                                this.isVideoPlaying = !0;
                                try {
                                    t.muted = !1, t.volume = .7
                                } catch (e) {}
                                console.log("✅ Video ".concat(e.title, " playing with audio after mode switch"))
                            }).catch(t => {
                                this.isVideoPlaying = !1, console.warn("❌ Failed to play video ".concat(e.title, " after mode switch:"), t)
                            })
                        }
                    }, 100), this.isPlayerInRoom() && this.showPlayerOverlay(this.channelNames[e.channelIndex] || e.title)) : this.isPlayerInRoom() && this.showPlayerOverlay((null == e ? void 0 : e.title) || "Channel")
                }
            }
            o.renderer = null, o.screen = null, o.screenMaterial = null, o.isOn = !1, o.mode = "gallery", o.isVideoPlaying = !1, o.roomBounds = {
                x: {
                    min: -3.85,
                    max: 3.85
                },
                z: {
                    min: -7.85,
                    max: -2.15
                }
            }, o.isViewingMode = !1, o.originalCameraPosition = null, o.originalCameraRotation = null, o.originalControlsEnabled = !0, o.originalControlsLocked = !1, o.tvPosition = null, o.tvRotation = 0, o.playerController = null, o.channelNames = [], o.channelTextures = [], o.channelUpdaters = [], o.videoElements = [], o.videoByChannel = {}, o.objectUrlByChannel = {}, o.currentChannel = 0, o.galleryCanvas = null, o.galleryCtx = null, o.galleryTexture = null, o.galleryItems = [], o.selectedIndex = 0, o.reflectionMesh = null, o.uiOverlayMesh = null, o.playerCanvas = null, o.playerCtx = null, o.playerTexture = null
        },
        6001: (e, t, n) => {
            n.r(t), n.d(t, {
                BedsideLamp: () => a
            });
            var i = n(3264);
            class a {
                static create(e, t, n, a) {
                    this.scene = e, this.camera = n, this.controls = a;
                    let o = new i._4j({
                            color: 9127187,
                            roughness: .6,
                            metalness: .1
                        }),
                        r = new i._4j({
                            color: 6908265,
                            roughness: .3,
                            metalness: .7
                        }),
                        s = new i._4j({
                            color: 0xf5f5dc,
                            transparent: !0,
                            opacity: .9,
                            roughness: .8,
                            side: i.$EB
                        }),
                        l = new i._4j({
                            color: 0xffffff,
                            roughness: .2,
                            metalness: .1
                        }),
                        c = new i.Ho_(.18, .18, .12, 16),
                        d = new i.eaF(c, o);
                    d.position.set(t.x, t.y + .06, t.z), d.castShadow = !0, d.receiveShadow = !0, e.add(d);
                    let h = new i.O3Y(.16, .02, 8, 16),
                        p = new i._4j({
                            color: 6636321
                        }),
                        u = new i.eaF(h, p);
                    u.position.set(t.x, t.y + .12, t.z), u.rotation.x = Math.PI / 2, e.add(u);
                    let m = new i.Ho_(.15, .15, .03, 16),
                        g = new i._4j({
                            color: 3092271,
                            metalness: .8,
                            roughness: .2
                        }),
                        x = new i.eaF(m, g);
                    x.position.set(t.x, t.y + .015, t.z), e.add(x);
                    let f = t.y + .12;
                    for (let n = 0; n < 3; n++) {
                        let a = new i.Ho_(.025, .025, .2333333333333333, 12),
                            o = new i.eaF(a, r);
                        if (o.position.set(t.x, f + .2333333333333333 * n + .11666666666666665, t.z), o.castShadow = !0, e.add(o), n < 2) {
                            let a = new i.Gu$(.035, 8, 8),
                                o = new i.eaF(a, r);
                            o.position.set(t.x, f + (n + 1) * .2333333333333333, t.z), e.add(o)
                        }
                    }
                    let w = new i.Ho_(.02, .02, .15, 8),
                        y = new i.eaF(w, r);
                    y.rotation.z = Math.PI / 4, y.position.set(t.x + .05, f + .73, t.z), y.castShadow = !0, e.add(y);
                    let v = new i.qFE(.25, .35, 16, 1, !0),
                        b = new i.eaF(v, s);
                    b.position.set(t.x + .1, f + .83, t.z), b.castShadow = !0, b.receiveShadow = !0, e.add(b);
                    let k = new i.O3Y(.25, .01, 8, 16),
                        j = new i._4j({
                            color: 9127187
                        }),
                        M = new i.eaF(k, j);
                    M.position.set(t.x + .1, f + .635, t.z), M.rotation.x = Math.PI / 2, e.add(M);
                    let S = new i.Gu$(.02, 8, 8),
                        C = new i.eaF(S, r);
                    C.position.set(t.x + .1, f + 1.01, t.z), e.add(C);
                    let E = new i.iNn(.06, .025, .04),
                        P = new i.eaF(E, l);
                    P.position.set(t.x, f + .23, t.z + .04), P.castShadow = !0, e.add(P);
                    let N = new i.iNn(.02, .008, .02),
                        L = new i._4j({
                            color: 0
                        }),
                        z = new i.eaF(N, L);
                    z.position.set(t.x, t.y + .365, t.z + .05), e.add(z);
                    let I = new i.Ho_(.008, .008, .5, 8),
                        B = new i._4j({
                            color: 3092271
                        }),
                        T = new i.eaF(I, B);
                    T.position.set(t.x - .15, t.y + .25, t.z), T.rotation.z = Math.PI / 6, e.add(T);
                    let F = new i.Gu$(.04, 8, 8),
                        D = new i._4j({
                            color: 0xffe4b5,
                            emissive: 0,
                            emissiveIntensity: 0
                        }),
                        A = new i.eaF(F, D);
                    A.position.set(t.x + .1, f + .73, t.z), e.add(A);
                    let R = new i.HiM(0xffe4b5, 0, 4);
                    R.position.set(t.x + .1, f + .73, t.z), R.castShadow = !0, R.shadow.mapSize.width = 1024, R.shadow.mapSize.height = 1024, e.add(R), this.lamps.push({
                        switchMesh: P,
                        light: R,
                        isOn: !1
                    }), this.onLampClickBound || this.setupInteraction()
                }
                static setupInteraction() {
                    let e = new i.tBo,
                        t = new i.I9Y;
                    this.onLampClickBound = n => {
                        var i;
                        if (!(null == (i = this.controls) ? void 0 : i.isLocked)) return;
                        t.set(0, 0), e.setFromCamera(t, this.camera);
                        let a = -1,
                            o = 1 / 0;
                        this.lamps.forEach((t, n) => {
                            let i = e.intersectObject(t.switchMesh);
                            i.length > 0 && i[0].distance < 2.5 && i[0].distance < o && (a = n, o = i[0].distance)
                        }), -1 !== a && this.toggleLamp(a)
                    }, document.addEventListener("click", this.onLampClickBound)
                }
                static toggleLamp(e) {
                    let t = this.lamps[e];
                    t && (t.isOn = !t.isOn, t.light.intensity = 2 * !!t.isOn, t.light.color.setHex(0xffe4b5))
                }
                static getLampState() {
                    return this.lamps.some(e => e.isOn)
                }
                static dispose() {
                    this.onLampClickBound && (document.removeEventListener("click", this.onLampClickBound), this.onLampClickBound = void 0), this.lamps = []
                }
            }
            a.lamps = []
        }
    }
]);
