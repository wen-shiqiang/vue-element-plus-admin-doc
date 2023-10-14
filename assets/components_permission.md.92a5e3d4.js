import{o as a,c as n,a as s}from"./app.7ce998cd.js";const t='{"title":"Permission 权限组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"在线例子","slug":"在线例子"},{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"指令形式","slug":"指令形式"},{"level":3,"title":"函数形式","slug":"函数形式"},{"level":2,"title":"Permission 属性","slug":"permission-属性"}],"relativePath":"components/permission.md","lastUpdated":1697253892340}',e={},p=s('<h1 id="permission-权限组件"><a class="header-anchor" href="#permission-权限组件" aria-hidden="true">#</a> Permission 权限组件</h1><p>用于颗粒级别的按钮权限组件</p><p>Permission 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Permission" target="_blank" rel="noopener noreferrer">src/components/Permission</a> 内</p><h2 id="在线例子"><a class="header-anchor" href="#在线例子" aria-hidden="true">#</a> 在线例子</h2><p><a href="https://element-plus-admin.cn/#/authorization/test" target="_blank" rel="noopener noreferrer">在线例子</a></p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>由于项目中的颗粒级别的权限，是放在路由表中，所以会判断在当前路由 <code>meta.permission</code> 是否包含传入的权限值，有的话则展示。</p><p>如果权限实现不一致的话，可以自行改造下。</p><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Permission</span> <span class="token attr-name">permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Add <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="指令形式"><a class="header-anchor" href="#指令形式" aria-hidden="true">#</a> 指令形式</h3><p>权限控制目前还提供了指令的使用方式，切已经全局注册，所以可以在任意组件中使用 <code>v-hasPermi</code></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">v-hasPermi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>add<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Add <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="函数形式"><a class="header-anchor" href="#函数形式" aria-hidden="true">#</a> 函数形式</h3><p>除了以上两种，还可以使用函数的形式进行控制</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hasPermi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Permission&#39;</span>\n\n</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hasPermi(<span class="token punctuation">&#39;</span>add<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Add <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="permission-属性"><a class="header-anchor" href="#permission-属性" aria-hidden="true">#</a> Permission 属性<span id="Permission"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>permission</td><td>权限值</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',19);e.render=function(s,t,e,o,c,l){return a(),n("div",null,[p])};export default e;export{t as __pageData};
