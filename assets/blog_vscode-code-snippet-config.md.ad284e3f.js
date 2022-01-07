import{_ as n,c as s,o as t,a}from"./app.a7b90192.js";const d='{"title":"VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E","description":"","frontmatter":{"title":"VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E","date":"2018/04/15","categories":["\u6280\u672F\u7B14\u8BB0"],"tags":["\u524D\u7AEF","VSCode"]},"headers":[{"level":2,"title":"\u914D\u7F6E\u65B9\u5F0F","slug":"\u914D\u7F6E\u65B9\u5F0F"},{"level":2,"title":".html \u914D\u7F6E","slug":"html-\u914D\u7F6E"},{"level":2,"title":".vue \u914D\u7F6E","slug":"vue-\u914D\u7F6E"}],"relativePath":"blog/vscode-code-snippet-config.md","lastUpdated":1641375521386}',o={},p=a(`<h1 id="vscode-\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E" tabindex="-1">VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E <a class="header-anchor" href="#vscode-\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E" aria-hidden="true">#</a></h1><p>VSCode \u4E2D\u4EE3\u7801\u7247\u6BB5\uFF0C\u662F\u4E00\u6BB5\u9884\u8BBE\u597D\u7684\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u901A\u8FC7\u7B80\u77ED\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u4E00\u5927\u6BB5\u4EE3\u7801\u3002\u901A\u8FC7\u4EE3\u7801\u7247\u6BB5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u4E00\u4E9B\u5E38\u7528\u7684\u4EE3\u7801\u9884\u8BBE\u597D\uFF0C\u7701\u53BB\u4E00\u5B9A\u7684\u5DE5\u4F5C\u91CF</p><h2 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1">\u914D\u7F6E\u65B9\u5F0F <a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u6309 <code>F1</code> \u6216\u8005 <code>ctrl + shift + p</code> \uFF08windows\uFF09\u3001<code>command + shift + p</code> \uFF08mac\uFF09\u6253\u5F00\u547D\u4EE4\u9762\u677F\u3002\u8F93\u5165 <code>\u7247\u6BB5</code> \u6216 <code>Snippet</code> \u5373\u53EF\u627E\u5230\u914D\u7F6E\u5165\u53E3\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/vscode-code-snippet-config/89c774d6-b218-48c7-971b-33ca1d55d210.png" alt="snippets-1"></p><p>\u56DE\u8F66\u7136\u540E\u9009\u62E9\u9700\u8981\u914D\u7F6E\u7684\u8BED\u8A00\u8FDB\u884C\u914D\u7F6E\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/vscode-code-snippet-config/b4d6d5df-875e-4a60-857e-df28c25b32c7.png" alt="snippets-2"></p><p>\u914D\u7F6E\u7684\u8BED\u6CD5\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">Creating your own snippets</a></p><p>\u4E0B\u9762\u6211\u8D34\u51FA\u6211\u7684\u914D\u7F6E\u9879\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002</p><h2 id="html-\u914D\u7F6E" tabindex="-1">.html \u914D\u7F6E <a class="header-anchor" href="#html-\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Init PC html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316PC\u9879\u76EE\u6587\u4EF6</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;init-pc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!DOCTYPE html&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;html lang=\\&quot;\${1:zh-cmn-Hans}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;head&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta charset=\\&quot;UTF-8\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta name=\\&quot;viewport\\&quot; content=\\&quot;width=\${2:device-width}, initial-scale=\${3:1.0}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta http-equiv=\\&quot;X-UA-Compatible\\&quot; content=\\&quot;\${4:ie=edge}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;title&gt;\${5:\u6807\u9898}&lt;/title&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/head&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;body&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;$6&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/body&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/html&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Init PC html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Init mobile html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316\u79FB\u52A8\u7AEF\u9879\u76EE\u6587\u4EF6</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;init-mobile&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!DOCTYPE html&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;html lang=\\&quot;\${1:zh-cmn-Hans}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;head&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta charset=\\&quot;UTF-8\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta name=\\&quot;viewport\\&quot; content=\\&quot;width=\${2:device-width}, initial-scale=\${3:1.0}, user-scalable=\${4:no}, minimum-scale=\${5:1.0}, maximum-scale=\${6:1.0}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;meta http-equiv=\\&quot;X-UA-Compatible\\&quot; content=\\&quot;\${7:ie=edge}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;title&gt;\${8:\u6807\u9898}&lt;/title&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/head&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;body&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;$9&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/body&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/html&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Init mobile html&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="vue-\u914D\u7F6E" tabindex="-1">.vue \u914D\u7F6E <a class="header-anchor" href="#vue-\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Init vue file&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;init-vue2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;div class=\\&quot;$1\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\tname: &#39;$2&#39;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style scoped lang=\\&quot;$3\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u521D\u59CB\u5316.vue\u6587\u4EF6&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Print to console.log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.log(&#39;$1&#39;)$2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8F93\u51FA\u666E\u901A\u65E5\u5FD7\u5230\u63A7\u5236\u53F0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Print to console.warn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.warn(&#39;$1&#39;)$2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8F93\u51FA\u8B66\u544A\u65E5\u5FD7\u5230\u63A7\u5236\u53F0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Print to console.error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;console.error(&#39;$1&#39;)$2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8F93\u51FA\u9519\u8BEF\u65E5\u5FD7\u5230\u63A7\u5236\u53F0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Header comment by QCC&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment-header-qcc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!--&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t* @file: $1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t* @author: \u738B\u6709\u9534 &lt;wangyk@greatld.com&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\t* @Description: $2&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5934\u6CE8\u91CA&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),e=[p];function c(u,l,i,r,k,q){return t(),s("div",null,e)}var h=n(o,[["render",c]]);export{d as __pageData,h as default};
