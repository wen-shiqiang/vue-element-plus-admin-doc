import{o as n,c as a,a as s}from"./app.7ce998cd.js";const t='{"title":"Waterfall 瀑布流组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Waterfall 属性","slug":"waterfall-属性"},{"level":2,"title":"Waterfall 事件","slug":"waterfall-事件"}],"relativePath":"components/waterfall.md","lastUpdated":1697253892340}',p={},o=s('<h1 id="waterfall-瀑布流组件"><a class="header-anchor" href="#waterfall-瀑布流组件" aria-hidden="true">#</a> Waterfall 瀑布流组件</h1><p>瀑布流组件</p><p>Waterfall 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Waterfall" target="_blank" rel="noopener noreferrer">src/components/Waterfall</a> 内</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>data 数据必须带有高度字段，用于确保计算出正确的位置</p></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Waterfall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Waterfall&#39;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> toAnyString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils&#39;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> list<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 随机 100, 500 之间的整数</span>\n    <span class="token keyword">const</span> height <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> width <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n      Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        width<span class="token punctuation">,</span>\n        height<span class="token punctuation">,</span>\n        id<span class="token operator">:</span> <span class="token function">toAnyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        image_uri<span class="token operator">:</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">]</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    end<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">loadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waterfall</span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n      src: <span class="token punctuation">&#39;</span>image_uri<span class="token punctuation">&#39;</span>,\n      height: <span class="token punctuation">&#39;</span>height<span class="token punctuation">&#39;</span>\n    }<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadMore<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="waterfall-属性"><a class="header-anchor" href="#waterfall-属性" aria-hidden="true">#</a> Waterfall 属性<span id="Waterfall"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>要展示的数据</td><td><code>Array</code></td><td>-</td><td>-</td></tr><tr><td>reset</td><td>窗口变化是否重新布局</td><td><code>boolean</code></td><td>true/false</td><td>true</td></tr><tr><td>width</td><td>每个项的宽度</td><td><code>number</code></td><td>-</td><td>200</td></tr><tr><td>gap</td><td>每个项的间距</td><td><code>number</code></td><td>-</td><td>20</td></tr><tr><td>loadingText</td><td>加载中文字</td><td><code>string</code></td><td>-</td><td>加载中...</td></tr><tr><td>loading</td><td>是否加载中</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>end</td><td>是否加载结束</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>endText</td><td>是否加载结束文字</td><td><code>string</code></td><td>-</td><td>没有更多了</td></tr><tr><td>props</td><td>字段别名</td><td><code>object</code></td><td>-</td><td>{ src: &#39;src&#39;, height: &#39;height&#39; }</td></tr></tbody></table><h2 id="waterfall-事件"><a class="header-anchor" href="#waterfall-事件" aria-hidden="true">#</a> Waterfall 事件</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>loadMore</td><td>加载更多事件</td><td>-</td></tr></tbody></table>',10);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
