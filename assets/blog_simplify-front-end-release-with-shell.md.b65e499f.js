import{_ as s,c as n,o as a,a as t}from"./app.a7b90192.js";const g='{"title":"\u7528 shell \u811A\u672C\u7B80\u5316\u524D\u7AEF\u9879\u76EE\u53D1\u7248\u94FE\u8DEF","description":"","frontmatter":{"title":"\u7528 shell \u811A\u672C\u7B80\u5316\u524D\u7AEF\u9879\u76EE\u53D1\u7248\u94FE\u8DEF","date":"2021/02/06","categories":["\u6280\u672F\u7B14\u8BB0"],"tags":["\u524D\u7AEF\u53D1\u7248","Shell"]},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u5B9E\u8DF5","slug":"\u5B9E\u8DF5"},{"level":3,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C"},{"level":3,"title":"\u672C\u5730\u53D1\u7248\u811A\u672C","slug":"\u672C\u5730\u53D1\u7248\u811A\u672C"},{"level":3,"title":"\u672C\u5730\u53D1\u7248","slug":"\u672C\u5730\u53D1\u7248"},{"level":3,"title":"\u670D\u52A1\u5668\u7AEF\u62C9\u53D6\u6700\u65B0\u4EE3\u7801","slug":"\u670D\u52A1\u5668\u7AEF\u62C9\u53D6\u6700\u65B0\u4EE3\u7801"},{"level":3,"title":"\u53D1\u7248\u94FE\u8DEF","slug":"\u53D1\u7248\u94FE\u8DEF"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"blog/simplify-front-end-release-with-shell.md","lastUpdated":1641375514239}',e={},o=t(`<h1 id="\u7528-shell-\u811A\u672C\u7B80\u5316\u524D\u7AEF\u9879\u76EE\u53D1\u7248\u94FE\u8DEF" tabindex="-1">\u7528 shell \u811A\u672C\u7B80\u5316\u524D\u7AEF\u9879\u76EE\u53D1\u7248\u94FE\u8DEF <a class="header-anchor" href="#\u7528-shell-\u811A\u672C\u7B80\u5316\u524D\u7AEF\u9879\u76EE\u53D1\u7248\u94FE\u8DEF" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u524D\u7AEF web \u9879\u76EE\u90E8\u7F72\u5206\u4E3A\u51E0\u6B65\uFF1F</p><p>\u5BF9\u4E8E\u4E0D\u61C2 linux \u6216\u8005 jenkins \u7684\u524D\u7AEF\u6765\u8BF4\uFF0C\u5206\u4E3A\u4E24\u6B65\uFF1A</p><ol><li>\u51C6\u5907\u90E8\u7F72\u6587\u4EF6</li><li>\u538B\u7F29\u540E\u53D1\u7ED9\u540E\u7AEF</li></ol><p>\u4EE5\u524D\u6211\u4E00\u822C\u91C7\u7528\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u4E0A\u9762\u7684\u5C0F\u767D\u65B9\u5F0F\uFF0C\u53E6\u4E00\u79CD\u76F4\u63A5\u5728\u670D\u52A1\u5668\u7528 git \u62C9\u4EE3\u7801\uFF0C\u7136\u540E\u7F16\u8BD1\u6253\u5305\u3002nginx \u914D\u7F6E\u4E2D\u628A\u8DEF\u5F84\u6620\u5C04\u5230 dist \u76EE\u5F55\u3002</p><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u6709\u4EE5\u4E0B\u7F3A\u70B9\uFF1A</p><ul><li><code>.git</code> \u76EE\u5F55\u4F1A\u66B4\u9732\u5728\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\u91CC\uFF0C\u5982\u679C\u4E0D\u5728 nginx \u914D\u7F6E\u4E2D\u505A\u76F8\u5173\u5B89\u5168\u9632\u62A4\uFF0C\u4E0D\u5B89\u5168</li><li>\u5728\u670D\u52A1\u5668\u7AEF\u8FDB\u884C <code>npm run build</code> \u64CD\u4F5C\uFF0C\u5360\u7528\u4E86\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u5982\u679C\u6709 npm \u4F9D\u8D56\u9700\u8981\u66F4\u65B0\uFF0C\u5B89\u88C5\u6BD4\u8F83\u9EBB\u70E6\u3002\u7279\u522B\u662F <code>node-sass</code> \u7684\u5B89\u88C5\uFF0C\u6709\u65F6\u5019\u9047\u5230\u4E86\u5014\u5F3A\u7684\u670D\u52A1\u5668\u73AF\u5883\uFF0C\u96BE\u5EA6\u662F\u5730\u72F1\u7EA7\u7684</li></ul><p>\u6709\u4E00\u5929\u6211\u7075\u673A\u4E00\u52A8\uFF0C\u53C2\u8003\u90E8\u7F72\u5728 github pages \u4E0A\u7684\u535A\u5BA2\u7684\u90E8\u7F72\u65B9\u5F0F\uFF0C\u60F3\u5230\u4E86 <code>shell</code> \u811A\u672C\u5E94\u8BE5\u53EF\u4EE5\u7B80\u5316\u53D1\u7248\u94FE\u8DEF\u3002</p><p>\u7406\u8BBA\u53EF\u884C\uFF0C\u5B9E\u8DF5\u5F00\u59CB\u3002</p><h2 id="\u5B9E\u8DF5" tabindex="-1">\u5B9E\u8DF5 <a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a></h2><h3 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h3><p>\u5047\u8BBE gitlab \u4E0A\u6709\u4E00\u4E2A SPA \u7684\u524D\u7AEF\u9879\u76EE\uFF0C\u53EB\u505A <code>oa-admin-web</code> \uFF0C\u9996\u5148\u6211\u9700\u8981\u518D\u5728\u8BE5 gitlab \u4E0A\u5EFA\u4E00\u4E2A\u9879\u76EE\u53EB\u505A <code>oa-admin-web-dist</code></p><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u662F\u4E0D\u9700\u8981\u7F16\u8BD1\u6253\u5305 dist \u76EE\u5F55\u7684\u4F20\u7EDF web \u9879\u76EE\uFF0C\u8BE5\u53D1\u7248\u65B9\u5F0F\u601D\u8DEF\u53EF\u4EE5\u7528\uFF0C\u4F46\u662F\u811A\u672C\u5C31\u9700\u8981\u7A0D\u5FAE\u8C03\u6574\u4E86\u3002\u76F8\u4FE1\u5982\u679C\u4F60\u80FD\u7406\u89E3\u6211\u4E0B\u9762\u7684\u601D\u8DEF\uFF0C\u4FEE\u6539\u57FA\u672C\u4E5F\u5F88\u7B80\u5355\u3002</p></blockquote><h3 id="\u672C\u5730\u53D1\u7248\u811A\u672C" tabindex="-1">\u672C\u5730\u53D1\u7248\u811A\u672C <a class="header-anchor" href="#\u672C\u5730\u53D1\u7248\u811A\u672C" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5728 <code>oa-admin-web</code> \u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFA\u811A\u672C\u6587\u4EF6\u3002\u6839\u636E\u73AF\u5883\u4E0D\u540C\uFF0C\u811A\u672C\u6587\u4EF6\u547D\u540D\u4E5F\u4E0D\u540C\u3002\u5047\u8BBE\u6709 <code>dev</code>\u3001<code>uat</code>\u3001<code>\u751F\u4EA7</code> \u4E09\u4E2A\u73AF\u5883\uFF0C\u5219\u65B0\u5EFA\u4EE5\u4E0B\u4E09\u4E2A\u811A\u672C\u6587\u4EF6\uFF1A</p><ul><li><code>deploy.dev.sh</code></li><li><code>deploy.uat.sh</code></li><li><code>deploy.prod.sh</code></li></ul><p>\u73B0\u5728\u4ECE <code>dev</code> \u73AF\u5883\u5F00\u59CB\u601D\u8003\u811A\u672C\u8BE5\u600E\u4E48\u5199\u3002</p><p>\u6B65\u9AA4\u8BBE\u60F3\u5982\u4E0B</p><ul><li>\u6700\u9876\u90E8\u80AF\u5B9A\u662F\u6253\u5305\u5F53\u524D\u9879\u76EE\u5230 <code>dist</code> \u76EE\u5F55</li><li>\u5176\u6B21\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5728\u670D\u52A1\u5668\u7AEF\u7528\u4E8E\u62C9\u53D6\u5BF9\u5E94\u73AF\u5883\u6700\u65B0\u4EE3\u7801\u7684\u7684\u811A\u672C\u653E\u5728 <code>dist</code> \u76EE\u5F55</li><li>\u62C9\u53D6\u5B8C\u4E3A\u4E86\u5B89\u5168\u8003\u8651\uFF0C\u5F97\u628A\u670D\u52A1\u5668\u4E0A\u7684 <code>.git</code> \u7ED9\u5220\u6389</li><li>\u7136\u540E\u9700\u8981\u7528 git \u628A <code>dist</code> \u76EE\u5F55\u7ED9\u7BA1\u7406\u8D77\u6765</li><li>\u6700\u540E\u5173\u8054\u8FDC\u7A0B <code>oa-admin-web-dist</code> \u4ED3\u5E93\uFF0C\u628A\u672C\u5730 <code>dist</code> \u7ED9\u63D0\u4EA4\u8FDC\u7A0B</li></ul><p>\u4E0B\u9762\u662F <code>deploy.dev.sh</code> \u7684\u5185\u5BB9</p><div class="language-shell"><pre><code><span class="token comment"># deploy.dev.sh</span>
<span class="token comment"># \u5206\u652F\u540D</span>
<span class="token assign-left variable">branch</span><span class="token operator">=</span><span class="token string">&quot;dev&quot;</span>
<span class="token comment"># \u90E8\u7F72\u7684\u4ED3\u5E93\u5730\u5740\uFF08http\uFF09</span>
<span class="token assign-left variable">http_repository</span><span class="token operator">=</span><span class="token string">&quot;http://xxx/oa-admin-web-dist.git&quot;</span>
<span class="token comment"># \u90E8\u7F72\u7684\u4ED3\u5E93\u5730\u5740\uFF08ssh\uFF09</span>
<span class="token assign-left variable">ssh_repository</span><span class="token operator">=</span><span class="token string">&quot;ssh://gitxxx/oa-admin-web-dist.git&quot;</span>
<span class="token comment"># \u6253\u5305\u5F53\u524D\u9879\u76EE</span>
<span class="token function">npm</span> run build
<span class="token comment"># \u8FDB\u5165 dist \u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> dist
<span class="token comment"># \u5728 dist \u76EE\u5F55\u521B\u5EFA pull.sh\uFF0C\u5E76\u5199\u5165\u4E00\u7CFB\u5217\u7528\u4E8E\u62C9\u4EE3\u7801\u7684\u811A\u672C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git init&quot;</span> <span class="token operator">&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git add .&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git commit -m <span class="token entity" title="\\&quot;">\\&quot;</span>\u521D\u59CB\u5316<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token comment"># \u8FD9\u91CC\u9700\u8981\u7528 oa-admin-web-dist.git \u4ED3\u5E93\u7684 http/https \u8DEF\u5F84\uFF0C\u5728\u670D\u52A1\u5668\u7AEF\u62C9\u4EE3\u7801\u4E0D\u7528 ssh \u5F62\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git remote add origin <span class="token variable">\${http_repository}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git fetch&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git checkout <span class="token variable">\${branch}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git reset --hard origin/<span class="token variable">\${branch}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;rm -rf .git&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token comment"># \u521D\u59CB\u5316 git</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># \u5F53\u524D\u65F6\u95F4</span>
<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>
<span class="token comment"># \u63D0\u4EA4\u4EBA</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> config user.name<span class="token variable">)</span></span>
<span class="token function">git</span> commit -m <span class="token string">&quot;<span class="token variable">\${username}</span> \u5728 <span class="token variable">\${time}</span> \u53D1\u7248&quot;</span>
<span class="token function">git</span> checkout -b <span class="token variable">\${branch}</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token variable">\${ssh_repository}</span>
<span class="token comment"># \u5F3A\u5236\u8986\u76D6\u8FDC\u7A0B\u5206\u652F\u4EE3\u7801</span>
<span class="token function">git</span> push -u --force origin <span class="token variable">\${branch}</span>
</code></pre></div><p><code>uat</code> \u73AF\u5883\u7684\u811A\u672C\u4E0E <code>dev</code> \u73AF\u5883\u9664\u4E86\u5206\u652F\u540D\u5176\u4F59\u6CA1\u6709\u5DEE\u522B\u3002</p><p><code>prod</code> \u73AF\u5883\u7A0D\u5FAE\u6709\u70B9\u5DEE\u522B\uFF0C\u5199\u5165 <code>dist</code> \u7684 <code>pull.sh</code> \u811A\u672C\u4E2D\u4E0D\u9700\u8981 <code>git checkout master</code>\uFF0C\u56E0\u4E3A\u521D\u59CB\u5316\u4ED3\u5E93\u65F6\uFF0C\u9ED8\u8BA4\u5C31\u5728 <code>master</code> \u5206\u652F</p><div class="language-shell"><pre><code><span class="token comment"># deploy.prod.sh</span>
<span class="token comment"># \u5206\u652F\u540D</span>
<span class="token assign-left variable">branch</span><span class="token operator">=</span><span class="token string">&quot;master&quot;</span>
<span class="token comment"># \u90E8\u7F72\u7684\u4ED3\u5E93\u5730\u5740\uFF08http\uFF09</span>
<span class="token assign-left variable">http_repository</span><span class="token operator">=</span><span class="token string">&quot;http://xxx/oa-admin-web-dist.git&quot;</span>
<span class="token comment"># \u90E8\u7F72\u7684\u4ED3\u5E93\u5730\u5740\uFF08ssh\uFF09</span>
<span class="token assign-left variable">ssh_repository</span><span class="token operator">=</span><span class="token string">&quot;ssh://gitxxx/oa-admin-web-dist.git&quot;</span>
<span class="token comment"># \u6253\u5305\u5F53\u524D\u9879\u76EE</span>
<span class="token function">npm</span> run build
<span class="token comment"># \u8FDB\u5165 dist \u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> dist
<span class="token comment"># \u5728 dist \u76EE\u5F55\u521B\u5EFA pull.sh\uFF0C\u5E76\u5199\u5165\u4E00\u7CFB\u5217\u7528\u4E8E\u62C9\u4EE3\u7801\u7684\u811A\u672C</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git init&quot;</span> <span class="token operator">&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git add .&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git commit -m <span class="token entity" title="\\&quot;">\\&quot;</span>\u521D\u59CB\u5316<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token comment"># \u8FD9\u91CC\u9700\u8981\u7528 oa-admin-web-dist.git \u4ED3\u5E93\u7684 http/https \u8DEF\u5F84\uFF0C\u5728\u670D\u52A1\u5668\u7AEF\u62C9\u4EE3\u7801\u4E0D\u7528 ssh \u5F62\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git remote add origin <span class="token variable">\${http_repository}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git fetch&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git checkout <span class="token variable">\${branch}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;git reset --hard origin/<span class="token variable">\${branch}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;rm -rf .git&quot;</span> <span class="token operator">&gt;&gt;</span> pull.sh
<span class="token comment"># \u521D\u59CB\u5316 git</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># \u5F53\u524D\u65F6\u95F4</span>
<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>
<span class="token comment"># \u63D0\u4EA4\u4EBA</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> config user.name<span class="token variable">)</span></span>
<span class="token function">git</span> commit -m <span class="token string">&quot;<span class="token variable">\${username}</span> \u5728 <span class="token variable">\${time}</span> \u53D1\u7248&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token variable">\${ssh_repository}</span>
<span class="token comment"># \u5F3A\u5236\u8986\u76D6\u8FDC\u7A0B\u5206\u652F\u4EE3\u7801</span>
<span class="token function">git</span> push -u --force origin <span class="token variable">\${branch}</span>
</code></pre></div><h3 id="\u672C\u5730\u53D1\u7248" tabindex="-1">\u672C\u5730\u53D1\u7248 <a class="header-anchor" href="#\u672C\u5730\u53D1\u7248" aria-hidden="true">#</a></h3><p>\u53EA\u9700\u8981\u7EC8\u7AEF cd \u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u6572 <code>sh &lt;\u53D1\u7248\u811A\u672C\u6587\u4EF6\u540D&gt;</code>\u3002\u6BD4\u5982\u6211\u8981\u53D1\u4E2A <code>uat</code> \u73AF\u5883\uFF0C\u5219\u6572 <code>sh deploy.uat.sh</code> \u3002</p><blockquote><p>\u6CE8\u610F\uFF1Awindows \u7535\u8111\u7684 cmd \u7EC8\u7AEF\u4E0D\u80FD\u7528 sh \u547D\u4EE4\uFF0C\u9700\u8981\u7528 powershell \u6216 git bash</p></blockquote><h3 id="\u670D\u52A1\u5668\u7AEF\u62C9\u53D6\u6700\u65B0\u4EE3\u7801" tabindex="-1">\u670D\u52A1\u5668\u7AEF\u62C9\u53D6\u6700\u65B0\u4EE3\u7801 <a class="header-anchor" href="#\u670D\u52A1\u5668\u7AEF\u62C9\u53D6\u6700\u65B0\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u4E0A\u9762\u53D1\u7248\u7684\u811A\u672C\u4F1A\u5728 <code>dist</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>pull.sh</code>\u3002\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-shell"><pre><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;\u521D\u59CB\u5316&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin http://xxx/oa-admin-web-dist.git
<span class="token function">git</span> fetch
<span class="token function">git</span> checkout uat
<span class="token function">git</span> reset --hard origin/uat
<span class="token function">rm</span> -rf .git
</code></pre></div><p>\u4EE5\u4E0A\u4E00\u7CFB\u5217\u547D\u4EE4\u7684\u4F5C\u7528\u662F\uFF1A</p><ul><li>\u521D\u59CB\u5316\u4ED3\u5E93</li><li>\u5173\u8054\u8FDC\u7A0B <code>dist</code> \u4ED3\u5E93</li><li><code>fetch</code> \u6700\u65B0\u4EE3\u7801</li><li>\u5F53\u524D\u4EE3\u7801\u6307\u5411\u6700\u65B0\u7684\u5206\u652F\u4EE3\u7801\uFF08\u4E0D\u540C\u5206\u652F\u662F\u53D1\u7248\u7684\u811A\u672C\u9884\u8BBE\u597D\u7684\uFF09</li></ul><p>\u5F53\u7136\u7B2C\u4E00\u6B21\u5728\u670D\u52A1\u7AEF\u662F\u4ECE 0 \u5230 1 \u7684\u8FC7\u7A0B\uFF0C\u6240\u9700\u8981\u521D\u59CB\u5316\u4E00\u4E0B\u3002</p><p>\u5047\u8BBE\u6211\u7684\u9879\u76EE\u90FD\u90E8\u7F72\u5728\u670D\u52A1\u5668\u7684 <code>/data/www/</code> \u4E0B\uFF0C\u90A3\u4E48\u6211\u5148\u5728\u8BE5\u8DEF\u5F84\u521B\u5EFA <code>oa-admin-web-dist</code> \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u624B\u52A8\u6267\u884C\u4E00\u4E0B <code>pull.sh</code>\u7684\u6240\u6709\u547D\u4EE4\u3002</p><h3 id="\u53D1\u7248\u94FE\u8DEF" tabindex="-1">\u53D1\u7248\u94FE\u8DEF <a class="header-anchor" href="#\u53D1\u7248\u94FE\u8DEF" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0A\u5DE5\u4F5C\u505A\u5B8C\u4E4B\u540E\uFF0C\u4EE5\u540E\u7684\u53D1\u7248\u7684\u94FE\u8DEF\u5C31\u5F88\u7B80\u5355\u4E86\u3002\u5047\u8BBE\u9700\u8981\u53D1\u7248\u751F\u4EA7\u73AF\u5883\uFF1A</p><ul><li>\u524D\u7AEF er \u6572\u547D\u4EE4 <code>sh deploy.prod.sh</code></li><li>\u540E\u7AEF er \u6216\u8005\u61C2 linux \u7684\u524D\u7AEF er \u5230\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u9879\u76EE\u8DEF\u5F84\uFF0C\u6572 <code>pull.sh</code></li></ul><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u867D\u7136\u6BD4\u8D77\u7EE7\u627F\u4E86 jenkins \u7684\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u663E\u5F97\u5F88 low\uFF0C\u4F46\u662F\u5E94\u4ED8\u4E00\u4E9B\u5C0F\u9879\u76EE\u6216\u8005\u9891\u7E41\u53D1\u7248\u7684\u9879\u76EE\uFF0C\u8FD8\u662F\u5F88\u5B9E\u7528\u7684\u3002</p>`,40),p=[o];function l(c,i,r,d,u,k){return a(),n("div",null,p)}var m=s(e,[["render",l]]);export{g as __pageData,m as default};
