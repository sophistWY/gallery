self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b9O(d){return d.VertexMode},
bH6(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
br9(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.h(B.cJ('"positions" and "colors" lengths must match.',v))
u=$.boU()[d.a]
x=A.bH6(e)
w=B.bmd(f)
u=new A.IN(u,x,v,w,v)
u.A1(v,y.U)
return u},
byt(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bG9(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
IN:function IN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a88:function a88(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
auJ(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.am(0,e)
w=f.am(0,e)
return e.a2(0,w.zW(C.d.F(x.Eg(w)/t,0,1)))},
bvS(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.am(0,q),o=e.b,n=o.am(0,q),m=e.d,l=m.am(0,q),k=p.Eg(n),j=n.Eg(n),i=p.Eg(l),h=l.Eg(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.auJ(d,q,o),A.auJ(d,o,x),A.auJ(d,x,m),A.auJ(d,m,q)]
v=B.bU("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.oR()},
byU(){var x=new B.by(new Float64Array(16))
x.u7()
return new A.a8G(x,$.a8())},
bkE(d,e){var x,w,v,u,t,s,r=new B.by(new Float64Array(16))
r.r2(d)
r.zo(r)
x=e.a
w=e.b
v=new B.cp(new Float64Array(3))
v.ut(x,w,0)
v=r.zR(v)
u=e.c
t=new B.cp(new Float64Array(3))
t.ut(u,w,0)
t=r.zR(t)
w=e.d
s=new B.cp(new Float64Array(3))
s.ut(u,w,0)
s=r.zR(s)
u=new B.cp(new Float64Array(3))
u.ut(x,w,0)
u=r.zR(u)
x=new B.cp(new Float64Array(3))
x.r2(v)
w=new B.cp(new Float64Array(3))
w.r2(t)
v=new B.cp(new Float64Array(3))
v.r2(s)
t=new B.cp(new Float64Array(3))
t.r2(u)
return new A.a5S(x,w,v,t)},
bk1(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.q,w=0;w<4;++w){v=r[w]
u=A.bvS(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.l(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.l(x.a,t)}return A.bcE(x)},
bcE(d){return new B.l(B.alC(C.d.oq(d.a,9)),B.alC(C.d.oq(d.b,9)))},
bCe(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a5:C.x},
KR:function KR(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
RJ:function RJ(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.pD$=f
_.P$=g
_.a=null
_.b=h
_.c=null},
aT5:function aT5(){},
adC:function adC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8G:function a8G(d,e){var _=this
_.a=d
_.to$=0
_.x1$=e
_.xr$=_.x2$=0
_.y1$=!1},
G_:function G_(d,e){this.a=d
this.b=e},
Wg:function Wg(){},
byV(){return new A.tx(null)},
tx:function tx(d){this.a=d},
UW:function UW(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.pD$=g
_.P$=h
_.a=null
_.b=i
_.c=null},
b0F:function b0F(d,e){this.a=d
this.b=e},
b0G:function b0G(d){this.a=d},
b0M:function b0M(d){this.a=d},
b0L:function b0L(d){this.a=d},
b0K:function b0K(d){this.a=d},
b0J:function b0J(d){this.a=d},
b0I:function b0I(d,e){this.a=d
this.b=e},
b0H:function b0H(d,e,f){this.a=d
this.b=e
this.c=f},
a9W:function a9W(d,e){this.b=d
this.a=e},
aKf:function aKf(d,e){this.a=d
this.b=e},
WW:function WW(){},
b9E(d,e,f,g,h){var x=new A.Y7(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.amm(d,e,f,g,h)
return x},
Y7:function Y7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anj:function anj(d){this.a=d},
ani:function ani(d){this.a=d},
anh:function anh(d){this.a=d},
aKe:function aKe(d){this.a=d
this.c=this.b=null},
aX0:function aX0(d,e){this.a=d
this.b=e},
hf:function hf(d,e,f){this.a=d
this.b=e
this.c=f},
a9X:function a9X(){},
Zd:function Zd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aoH:function aoH(d){this.a=d},
aoG:function aoG(d,e){this.a=d
this.b=e},
zw:function zw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aM_:function aM_(d){this.a=d},
a11:function a11(d,e,f){this.c=d
this.d=e
this.a=f},
a5S:function a5S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bza(d,e,f){var x,w
if($.aQ())return A.br9(d,e,f,null,null)
x=A.byt(f)
w=A.bG9(e)
if($.HB==null)$.HB=new B.ajw()
return new A.a88(d,w,x,null)}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[125]
E=c[115]
J=c[1]
F=c[98]
A.IN.prototype={
yK(){var x=this
return B.bz($.cC.rZ(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
AJ(){return this.yK()},
wn(d){var x=this.a
if(x!=null)x.delete()}}
A.a88.prototype={}
A.KR.prototype={
H(){var x=null,w=y.z
return new A.RJ(new B.ab(x,w),new B.ab(x,w),x,x,C.k)}}
A.RJ.prototype={
gLV(){var x=$.O.t$.z.i(0,this.e).gJ()
x.toString
x=y.x.a(x).k1
x.toString
return this.a.e.Gn(new B.A(0,0,0+x.a,0+x.b))},
gND(){var x=$.O.t$.z.i(0,this.f).gJ()
x.toString
x=y.x.a(x).k1
return new B.A(0,0,0+x.a,0+x.b)},
MQ(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.q)){x=new B.by(new Float64Array(16))
x.r2(a0)
return x}d.a.toString
w=new B.by(new Float64Array(16))
w.r2(a0)
w.pg(0,a1.a,a1.b)
v=A.bkE(w,d.gND())
x=d.gLV()
if(x.gac3(x))return w
x=d.gLV()
u=d.as
t=new B.by(new Float64Array(16))
t.u7()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.pg(0,q/2,o/2)
t.Q3(u)
t.pg(0,-q/2,-o/2)
u=new B.cp(new Float64Array(3))
u.ut(r,x,0)
u=t.zR(u)
q=new B.cp(new Float64Array(3))
q.ut(s,x,0)
q=t.zR(q)
x=new B.cp(new Float64Array(3))
x.ut(s,p,0)
x=t.zR(x)
s=new B.cp(new Float64Array(3))
s.ut(r,p,0)
s=t.zR(s)
r=new Float64Array(3)
new B.cp(r).r2(u)
u=new Float64Array(3)
new B.cp(u).r2(q)
q=new Float64Array(3)
new B.cp(q).r2(x)
x=new Float64Array(3)
new B.cp(x).r2(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cp(new Float64Array(3))
x.ut(m,l,0)
u=new B.cp(new Float64Array(3))
u.ut(k,l,0)
s=new B.cp(new Float64Array(3))
s.ut(k,j,0)
r=new B.cp(new Float64Array(3))
r.ut(m,j,0)
q=new B.cp(new Float64Array(3))
q.r2(x)
x=new B.cp(new Float64Array(3))
x.r2(u)
u=new B.cp(new Float64Array(3))
u.r2(s)
s=new B.cp(new Float64Array(3))
s.r2(r)
i=new A.a5S(q,x,u,s)
h=A.bk1(i,v)
if(h.m(0,C.q))return w
x=w.QD().a
u=x[0]
x=x[1]
g=a0.L5()
u-=h.a*g
x-=h.b*g
f=new B.by(new Float64Array(16))
f.r2(a0)
s=new B.cp(new Float64Array(3))
s.ut(u,x,0)
f.a_I(s)
e=A.bk1(i,A.bkE(f,d.gND()))
if(e.m(0,C.q))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.by(new Float64Array(16))
x.r2(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.by(new Float64Array(16))
s.r2(a0)
r=new B.cp(new Float64Array(3))
r.ut(u,x,0)
s.a_I(r)
return s},
a55(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.by(new Float64Array(16))
x.r2(d)
return x}w=r.d.a.L5()
x=r.gND()
v=r.gLV()
u=r.gND()
t=r.gLV()
s=C.d.F(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.by(new Float64Array(16))
x.r2(d)
x.rF(0,s/w)
return x},
azk(d,e,f){var x,w,v,u
if(e===0){x=new B.by(new Float64Array(16))
x.r2(d)
return x}w=this.d.zP(f)
x=new B.by(new Float64Array(16))
x.r2(d)
v=w.a
u=w.b
x.pg(0,v,u)
x.Q3(-e)
x.pg(0,-v,-u)
return x},
Td(d){switch(d){case D.azL:return!1
case D.uW:this.a.toString
return!0
case D.ml:case null:this.a.toString
return!0}},
a3A(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uW
else return D.ml},
ayx(d){var x,w=this,v="_controller"
w.a.ax.$1(d)
x=B.c(w.w,v).r
if(x!=null&&x.a!=null){B.c(w.w,v).tI(0)
x=B.c(w.w,v)
x.sl(0,x.a)
x=w.r
if(x!=null)x.a.C(0,w.gN_())
w.r=null}w.x=w.at=null
w.z=w.d.a.L5()
w.y=w.d.zP(d.b)
w.Q=w.as},
aAx(d){var x,w,v,u,t,s,r=this,q=r.d.a.L5(),p=d.c,o=r.d.zP(p),n=r.at
if(n===D.ml)n=r.at=r.a3A(d)
else if(n==null){n=r.a3A(d)
r.at=n}if(!r.Td(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a55(x.a,n*d.d/q))
w=r.d.zP(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.MQ(x,w.am(0,v)))
u=r.d.zP(p)
p=r.y
p.toString
if(!A.bcE(p).m(0,A.bcE(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.azk(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bCe(n,o)}n=r.y
n.toString
s=o.am(0,n)
n=r.d
n.sl(0,r.MQ(n.a,s))
r.y=r.d.zP(p)
break}r.a.toString},
aAt(d){var x,w,v,u,t,s,r,q=this,p="_controller"
q.a.toString
q.y=q.Q=q.z=null
x=q.r
if(x!=null)x.a.C(0,q.gN_())
x=B.c(q.w,p)
x.sl(0,x.a)
if(!q.Td(q.at)){q.x=null
return}if(q.at!==D.ml||d.a.a.gtX()<50){q.x=null
return}x=q.d.a.QD().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gtX())
r=Math.log(135e-9)
u=new B.BQ(0.0000135,u,w,v.a,C.d1).gJx()
v=new B.BQ(0.0000135,t,x,v.b,C.d1).gJx()
t=y.L
q.r=new B.F(B.aH(C.dX,B.c(q.w,p),null),new B.a5(new B.l(w,x),new B.l(u,v),t),t.h("F<W.T>"))
B.c(q.w,p).e=B.dE(0,0,C.d.al(s/r*1000),0,0)
q.r.a.ab(0,q.gN_())
B.c(q.w,p).oT(0)},
ayz(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gHc().b===0)return
x=r.a.ax
w=d.gra(d)
v=d.gvA()
x.$1(new B.DD(w,v,0))
x=d.gHc()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.Td(D.uW)){r.a.toString
return}x=r.d
x.toString
t=x.zP(d.gvA())
x=r.d
x.sl(0,r.a55(x.a,u))
x=r.d
x.toString
s=x.zP(d.gvA())
x=r.d
x.sl(0,r.MQ(x.a,s.am(0,t)))
r.a.toString}},
azX(){var x,w,v,u,t=this,s="_controller",r=B.c(t.w,s).r
if(!(r!=null&&r.a!=null)){t.x=null
r=t.r
if(r!=null)r.a.C(0,t.gN_())
t.r=null
r=B.c(t.w,s)
r.sl(0,r.a)
return}r=t.d.a.QD().a
x=r[0]
r=r[1]
w=t.d.zP(new B.l(x,r))
r=t.d
r.toString
x=t.r
v=x.b
x=x.a
u=r.zP(v.L(0,x.gl(x))).am(0,w)
x=t.d
x.sl(0,t.MQ(x.a,u))},
aAL(){this.E(new A.aT5())},
a3(){var x,w=this,v=null
w.aa()
x=w.a.ch
w.d=x
x.ab(0,w.gUc())
w.w=B.aM(C.w,v,v,v,1,v,w)},
a9(d){var x,w,v=this
v.ak(d)
x=v.a
if(x.ch!==d.ch){x=v.gUc()
v.d.C(0,x)
w=v.a.ch
v.d=w
w.ab(0,x)}},
k(){var x=this
B.c(x.w,"_controller").k()
x.d.C(0,x.gUc())
x.a.toString
x.alk()},
p(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adC(t.r,v.e,C.t,!0,x,u)
return B.Ll(C.e8,B.cs(C.aN,w,C.A,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaAs(),v.gayw(),v.gaAw(),u,u,u,u,u,u,u),v.f,u,u,u,v.gayy(),u)}}
A.adC.prototype={
p(d){var x=this,w=B.mg(null,new B.hl(x.c,x.d),x.r,!0)
return B.iZ(w,x.e,null)}}
A.a8G.prototype={
zP(d){var x=this.a,w=new B.by(new Float64Array(16))
if(w.zo(x)===0)B.N(B.hu(x,"other","Matrix cannot be inverted"))
x=new B.cp(new Float64Array(3))
x.ut(d.a,d.b,0)
x=w.zR(x).a
return new B.l(x[0],x[1])}}
A.G_.prototype={
j(d){return"_GestureType."+this.b}}
A.Wg.prototype={
pn(){this.qm()
this.pP()
this.t_()},
k(){var x=this,w=x.P$
if(w!=null)w.C(0,x.grX())
x.P$=null
x.a0()}}
A.tx.prototype={
H(){var x=null
return new A.UW(new B.ab(x,y.z),A.b9E(x,8,1,16,x),A.byU(),x,x,C.k)}}
A.UW.prototype={
azY(){var x=this,w="_controllerReset",v=x.r,u=v.b
v=v.a
x.f.sl(0,u.L(0,v.gl(v)))
v=B.c(x.w,w).r
if(!(v!=null&&v.a!=null)){v=x.r
if(v!=null)v.a.C(0,x.gU8())
x.r=null
v=B.c(x.w,w)
v.sl(0,v.a)}},
aAv(d){var x,w=this,v="_controllerReset"
if(B.c(B.c(w.w,v).Q,"_status")===C.ak){B.c(w.w,v).tI(0)
x=w.r
if(x!=null)x.a.C(0,w.gU8())
w.r=null
x=B.c(w.w,v)
x.sl(0,x.a)}},
aAI(d){var x=this,w=x.f.zP(d.a.am(0,B.eY(y.x.a($.O.t$.z.i(0,x.d).gJ()).tH(0,null),C.q)))
x.E(new A.b0F(x,x.e.aOM(w)))},
a3(){var x=null
this.aa()
this.w=B.aM(C.w,x,x,x,1,x,this)},
p(d){var x=null,w=B.t(d)
return B.bS(B.cr(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,B.r(B.u(d,C.i,y.s).gb9(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.as.b,B.R(x,new B.cX(new A.b0G(this),x),C.h,D.wB,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaPs(),this.gaKr()],y.p),x)},
gaPs(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).as.cy,!0,x,D.a3H,x,x,new A.b0M(this),C.M,x,"Reset")},
gaKr(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).as.cy,!0,x,E.on,x,x,new A.b0K(this),C.M,x,"Edit")},
k(){B.c(this.w,"_controllerReset").k()
this.amd()}}
A.a9W.prototype={
aB(d,e){this.b.af(0,new A.aKf(this,d))},
uA(d){return d.b!==this.b}}
A.WW.prototype={
pn(){this.qm()
this.pP()
this.t_()},
k(){var x=this,w=x.P$
if(w!=null)w.C(0,x.grX())
x.P$=null
x.a0()}}
A.Y7.prototype={
amm(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a5(s.d,B.b([new B.l(0,q),new B.l(r,x),new B.l(r,w),new B.l(r,w),new B.l(0,v),new B.l(0,v),new B.l(u,w),new B.l(u,w),new B.l(u,x)],y.g))
if(d!=null)C.b.a5(s.f,d)
else{t=s.a3F(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a3F(t)}}},
gol(d){return new A.aKe(this.f)},
a3K(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.aX0(w,x)},
a3F(d){var x,w,v,u=this
if(d==null)return new A.hf(-u.a,0,D.hS)
x=d.a
w=u.a3K(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hf(x,u.a3K(x).a,D.hS)}return new A.hf(x,v+1,D.hS)},
gvS(d){var x=this.b,w=this.a
return new B.I((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aOM(d){var x=this,w=x.gvS(x),v=d.b-x.gvS(x).b/2,u=x.b,t=new A.hf(C.d.al((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.al(0.6666666666666666*v/u),D.hS)
w=D.Ox.gaai().a
v=t.gaai().a
if(C.d.rz(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.Gh(x.f,new A.anj(t))},
af7(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.af(r).h("aB<1,l>"),p=B.aw(new B.aB(r,new A.ani(new B.iB(w*v*u+t/2*v*s+x.gvS(x).a/2,1.5*v*s+x.gvS(x).b/2,y.O)),q),!0,q.h("bK.E"))
return A.bza(C.MV,p,B.bI(p.length,e,!1,y.G))},
aJH(d){var x=this
if(J.k(x.e,d))return x
return A.b9E(x.f,x.a,x.c,x.b,d)},
aJG(d,e){var x,w,v=this,u=new A.hf(d.a,d.b,e),t=v.f,s=C.b.Pb(t,new A.anh(d))
if(J.k(v.rs(0,s),d)&&d.c.m(0,e))return v
x=B.eW(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.b9E(x,v.a,v.c,v.b,w)},
$iH:1}
A.aKe.prototype={
A(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gV(d){return this.c}}
A.aX0.prototype={}
A.hf.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.ah(e)!==B.V(this))return!1
return e instanceof A.hf&&e.a===this.a&&e.b===this.b},
gI(d){return B.aG(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gaai(){var x=this.a,w=this.b,v=new B.cp(new Float64Array(3))
v.ut(x,w,-x-w)
return v}}
A.a9X.prototype={}
A.Zd.prototype={
p(d){var x=this.c,w=B.i(x).h("lH<e5.E,zw>")
return B.aD(B.aw(new B.lH(x,new A.aoH(this),w),!0,w.h("H.E")),C.m,null,C.aY,C.l,null)}}
A.zw.prototype={
p(d){var x=null,w=!this.d?x:D.a2W
return B.R(x,B.bbf(!1,w,C.h,C.Pi,0,2,!0,this.c,x,4,x,x,8,x,4,x,x,new A.aM_(this),C.dL,x,x),C.h,x,x,x,x,60,x,x,D.a0t,x,x,60)}}
A.a11.prototype={
p(d){var x=null,w=B.e_([C.n,C.jQ,C.ng,C.wI,D.wB],y.G),v=this.c
return B.a6(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.m6,C.uf,x,x),new A.Zd(w,v.c,this.d,x)],y.p),C.aH,x,C.j,C.l,C.p)}}
A.a5S.prototype={}
var z=a.updateTypes(["~()","~(DD)","J(hf)","~(NF)","~(DC)","~(kQ)","~(jl)","~(hf?)","zw(j)"])
A.aT5.prototype={
$0(){},
$S:0}
A.b0F.prototype={
$0(){var x=this.a
x.e=x.e.aJH(this.b)},
$S:0}
A.b0G.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.by(new Float64Array(16))
x.u7()
w=r.e
w=w.gvS(w)
v=r.e
x.pg(0,t/2-w.a/2,s/2-v.gvS(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.gvS(x)
return B.iZ(B.dx(B.cs(C.aN,new A.KR(new B.Y(t,s,t,s),B.bbs(B.hg(u,u,u,new A.a9W(r.e,u),x)),0.01,r.gaAu(),r.f,r.d),C.A,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaAH(),u,u,u),C.am,u,u,u,u),C.t,u)},
$S:775}
A.b0M.prototype={
$0(){var x=this.a
x.E(new A.b0L(x))},
$S:0}
A.b0L.prototype={
$0(){var x,w="_controllerReset",v=this.a,u=B.c(v.w,w)
u.sl(0,u.a)
u=v.f.a
x=v.x
v.r=new B.F(B.c(v.w,w),new B.oI(u,x),y.d.h("F<W.T>"))
B.c(v.w,w).e=C.hZ
v.r.a.ab(0,v.gU8())
B.c(v.w,w).oT(0)},
$S:0}
A.b0K.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bde(new A.b0J(w),x,y.l)},
$S:0}
A.b0J.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.R(x,new A.a11(v,new A.b0I(w,d),x),C.h,x,x,x,x,150,x,x,C.i0,x,x,1/0)},
$S:776}
A.b0I.prototype={
$1(d){var x=this.a
x.E(new A.b0H(x,d,this.b))},
$S:777}
A.b0H.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aJG(v,this.b)
B.bw(this.c,!1).tE(null)},
$S:0}
A.aKf.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.af7(d,B.U(C.d.al(255*(J.k(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aQ()?B.aP():new B.aL(new B.aO())
this.b.Bm(v,C.Ov,x)},
$S:z+7}
A.anj.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.ani.prototype={
$1(d){var x=this.a
return new B.l(d.a+x.a,d.b+x.b)},
$S:240}
A.anh.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.aoH.prototype={
$1(d){var x=this.a
return new A.zw(d,d.m(0,x.d),new A.aoG(x,d),null)},
$S:z+8}
A.aoG.prototype={
$0(){this.a.e.$1(this.b)},
$S:13}
A.aM_.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.Wg.prototype
x.alk=x.k
x=A.WW.prototype
x.amd=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.RJ.prototype,"gayw","ayx",1)
x(v,"gaAw","aAx",3)
x(v,"gaAs","aAt",4)
x(v,"gayy","ayz",5)
w(v,"gN_","azX",0)
w(v,"gUc","aAL",0)
w(v=A.UW.prototype,"gU8","azY",0)
x(v,"gaAu","aAv",1)
x(v,"gaAH","aAI",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.IN,B.hI)
u(B.a0,[A.a88,A.a9X,A.aX0,A.hf,A.a5S])
u(B.z,[A.KR,A.tx])
u(B.D,[A.Wg,A.WW])
v(A.RJ,A.Wg)
u(B.hw,[A.aT5,A.b0F,A.b0M,A.b0L,A.b0K,A.b0H,A.aoG,A.aM_])
u(B.p,[A.adC,A.Zd,A.zw,A.a11])
v(A.a8G,B.c3)
v(A.G_,B.pJ)
v(A.UW,A.WW)
v(A.b0G,B.i6)
u(B.d0,[A.b0J,A.b0I,A.aKf,A.anj,A.ani,A.anh,A.aoH])
v(A.a9W,B.oe)
v(A.Y7,A.a9X)
v(A.aKe,B.KW)
x(A.Wg,B.co)
x(A.WW,B.co)
w(A.a9X,B.jb)})()
B.aW(b.typeUniverse,JSON.parse('{"IN":{"hI":["th"],"fr":["th"]},"KR":{"z":[],"d":[]},"RJ":{"D":["KR"]},"adC":{"p":[],"d":[]},"a8G":{"c3":["by"],"ar":[]},"G_":{"T":[]},"tx":{"z":[],"d":[]},"UW":{"D":["tx"]},"a9W":{"ar":[]},"Y7":{"jb":["hf?"],"H":["hf?"],"jb.E":"hf?"},"zw":{"p":[],"d":[]},"Zd":{"p":[],"d":[]},"a11":{"p":[],"d":[]}}'))
var y=(function rtii(){var x=B.a_
return{X:x("hf"),G:x("j"),s:x("B"),h:x("v<hf>"),g:x("v<l>"),p:x("v<d>"),z:x("ab<D<z>>"),d:x("oI"),O:x("iB<C>"),C:x("rQ"),x:x("y"),U:x("th"),L:x("a5<l>"),l:x("d")}})();(function constants(){D.hS=new B.j(4291677645)
D.Ox=new A.hf(0,0,D.hS)
D.wB=new B.j(4280756007)
D.a0t=new B.Y(2,0,2,0)
D.a1F=new B.az(57686,"MaterialIcons",null,!1)
D.a2W=new B.bB(D.a1F,null,C.n,null,null)
D.a2h=new B.az(58659,"MaterialIcons",null,!1)
D.a3H=new B.bB(D.a2h,null,null,null,null)
D.ml=new A.G_(0,"pan")
D.uW=new A.G_(1,"scale")
D.azL=new A.G_(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bLP","boU",()=>B.b([B.b3(A.b9O(B.b1()),"Triangles"),B.b3(A.b9O(B.b1()),"TrianglesStrip"),B.b3(A.b9O(B.b1()),"TriangleFan")],B.a_("v<m>")))})()}
$__dart_deferred_initializers__["sMCpo3rmlVDrjknmfDzoaih6jrU="] = $__dart_deferred_initializers__.current
