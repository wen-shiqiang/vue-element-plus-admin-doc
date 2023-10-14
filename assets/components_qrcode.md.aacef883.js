import{o as t,c as a,a as n}from"./app.4a0e9503.js";const s='{"title":"Qrcode 二维码组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Qrcode 属性","slug":"qrcode-属性"},{"level":2,"title":"Qrcode 事件","slug":"qrcode-事件"}],"relativePath":"components/qrcode.md","lastUpdated":1697253865808}',e={},d=n('<h1 id="qrcode-二维码组件"><a class="header-anchor" href="#qrcode-二维码组件" aria-hidden="true">#</a> Qrcode 二维码组件</h1><p>基于 <code>qrcode</code> 封装。</p><p>Qrcode 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Qrcode" target="_blank" rel="noopener noreferrer">src/components/Qrcode</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>更复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/qrcode" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Qrcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Qrcode&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Qrcode</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue-element-plus-admin<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="qrcode-属性"><a class="header-anchor" href="#qrcode-属性" aria-hidden="true">#</a> Qrcode 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>tag</td><td>以什么标签生成二维码</td><td><code>string</code></td><td>canvas/img</td><td>canvas</td></tr><tr><td>text</td><td>二维码内容</td><td><code>string</code>/<code>Array</code></td><td>-</td><td>-</td></tr><tr><td>options</td><td>qrcode.js 配置项</td><td><code>QRCodeRenderersOptions</code></td><td>-</td><td>{}</td></tr><tr><td>width</td><td>二维码宽度</td><td><code>number</code></td><td>-</td><td>200</td></tr><tr><td>logo</td><td>二维码 logo</td><td><code>QrcodeLogo</code>/<code>string</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>二维码是否过期</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>disabledText</td><td>二维码过期提示内容</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="qrcode-事件"><a class="header-anchor" href="#qrcode-事件" aria-hidden="true">#</a> Qrcode 事件</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>done</td><td>生成二维码后的回调</td><td>-</td></tr><tr><td>click</td><td>二维码点击事件</td><td>-</td></tr><tr><td>disabled-click</td><td>二维码过期后点击事件</td><td>-</td></tr></tbody></table>',10);e.render=function(n,s,e,o,c,p){return t(),a("div",null,[d])};export default e;export{s as __pageData};
