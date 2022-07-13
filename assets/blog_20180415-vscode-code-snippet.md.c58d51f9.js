import{_ as s,c as n,o as a,a as o}from"./app.228f4434.js";var l="/assets/89c774d6-b218-48c7-971b-33ca1d55d210.2a05a50c.png",p="/assets/b4d6d5df-875e-4a60-857e-df28c25b32c7.397e0a55.png";const d=JSON.parse('{"title":"VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E","description":"","frontmatter":{"title":"VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E","tags":["VSCode"]},"headers":[{"level":2,"title":"\u914D\u7F6E\u65B9\u5F0F","slug":"\u914D\u7F6E\u65B9\u5F0F"},{"level":2,"title":"\u914D\u7F6E\u53C2\u8003","slug":"\u914D\u7F6E\u53C2\u8003"},{"level":3,"title":".html \u914D\u7F6E","slug":"html-\u914D\u7F6E"},{"level":3,"title":".vue \u914D\u7F6E","slug":"vue-\u914D\u7F6E"}],"relativePath":"blog/20180415-vscode-code-snippet.md"}'),t={name:"blog/20180415-vscode-code-snippet.md"},e=o('<h1 id="vscode-\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E" tabindex="-1">VSCode \u4EE3\u7801\u7247\u6BB5\u914D\u7F6E <a class="header-anchor" href="#vscode-\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E" aria-hidden="true">#</a></h1><p>VSCode \u4E2D\u4EE3\u7801\u7247\u6BB5\uFF0C\u662F\u4E00\u6BB5\u9884\u8BBE\u597D\u7684\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u901A\u8FC7\u7B80\u77ED\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u5927\u6BB5\u9884\u8BBE\u597D\u7684\u4EE3\u7801\uFF0C\u7701\u53BB\u4E00\u5B9A\u7684\u5DE5\u4F5C\u91CF\u3002</p><h2 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1">\u914D\u7F6E\u65B9\u5F0F <a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u6309 <code>F1</code> \u6216\u8005 <code>ctrl + shift + p</code> \uFF08windows\uFF09\u3001<code>command + shift + p</code> \uFF08mac\uFF09\u6253\u5F00\u547D\u4EE4\u9762\u677F\u3002\u8F93\u5165 <code>\u7247\u6BB5</code> \u6216 <code>Snippet</code> \u5373\u53EF\u627E\u5230\u914D\u7F6E\u5165\u53E3\u3002</p><p><img src="'+l+'" alt="snippets-1"></p><p>\u56DE\u8F66\u7136\u540E\u9009\u62E9\u9700\u8981\u914D\u7F6E\u7684\u8BED\u8A00\u8FDB\u884C\u914D\u7F6E\u3002</p><p><img src="'+p+`" alt="snippets-2"></p><p>\u914D\u7F6E\u7684\u8BED\u6CD5\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noopener noreferrer">Creating your own snippets</a></p><h2 id="\u914D\u7F6E\u53C2\u8003" tabindex="-1">\u914D\u7F6E\u53C2\u8003 <a class="header-anchor" href="#\u914D\u7F6E\u53C2\u8003" aria-hidden="true">#</a></h2><h3 id="html-\u914D\u7F6E" tabindex="-1">.html \u914D\u7F6E <a class="header-anchor" href="#html-\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Init PC html</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// \u521D\u59CB\u5316PC\u9879\u76EE\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">init-pc</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;!DOCTYPE html&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;html lang=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">\${1:zh-cmn-Hans}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;head&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta charset=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">UTF-8</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta name=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">viewport</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;"> content=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">width=\${2:device-width}, initial-scale=\${3:1.0}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta http-equiv=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">X-UA-Compatible</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;"> content=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">\${4:ie=edge}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;title&gt;\${5:\u6807\u9898}&lt;/title&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/head&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;body&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">$6</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/body&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/html&gt;</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Init PC html</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Init mobile html</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// \u521D\u59CB\u5316\u79FB\u52A8\u7AEF\u9879\u76EE\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">init-mobile</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;!DOCTYPE html&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;html lang=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">\${1:zh-cmn-Hans}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;head&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta charset=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">UTF-8</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta name=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">viewport</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;"> content=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">width=\${2:device-width}, initial-scale=\${3:1.0}, user-scalable=\${4:no}, minimum-scale=\${5:1.0}, maximum-scale=\${6:1.0}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;meta http-equiv=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">X-UA-Compatible</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;"> content=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">\${7:ie=edge}</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;title&gt;\${8:\u6807\u9898}&lt;/title&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/head&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;body&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">$9</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/body&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/html&gt;</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Init mobile html</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="vue-\u914D\u7F6E" tabindex="-1">.vue \u914D\u7F6E <a class="header-anchor" href="#vue-\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Init vue file</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">init-vue2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;template&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;div class=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">$1</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">&lt;/div&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/template&gt;</span><span style="color:#F286C4;">\\n</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;script&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">export default {</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">name: &#39;$2&#39;,</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/script&gt;</span><span style="color:#F286C4;">\\n</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;style scoped lang=</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">$3</span><span style="color:#F286C4;">\\&quot;</span><span style="color:#E7EE98;">&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;/style&gt;</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u521D\u59CB\u5316.vue\u6587\u4EF6</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Print to console.log</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">log</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">console.log(&#39;$1&#39;)$2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u8F93\u51FA\u666E\u901A\u65E5\u5FD7\u5230\u63A7\u5236\u53F0</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Print to console.warn</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">warn</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">console.warn(&#39;$1&#39;)$2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u8F93\u51FA\u8B66\u544A\u65E5\u5FD7\u5230\u63A7\u5236\u53F0</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Print to console.error</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">error</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">console.error(&#39;$1&#39;)$2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u8F93\u51FA\u9519\u8BEF\u65E5\u5FD7\u5230\u63A7\u5236\u53F0</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Header comment by QCC</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">comment-header-qcc</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&lt;!--</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">* @file: $1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">* @author: \u738B\u6709\u9534 &lt;wangyk@greatld.com&gt;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">* @Description: $2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">--&gt;</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u5934\u6CE8\u91CA</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">Print a try catch</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">		</span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">prefix</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">try</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">		</span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">body</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">			</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">try {</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">$1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">} catch (error) {</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">\\t</span><span style="color:#E7EE98;">console.warn(error)</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">		],</span></span>
<span class="line"><span style="color:#F6F6F4;">		</span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">description</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Print a try catch</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">	}</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div>`,13),c=[e];function F(r,E,y,u,i,q){return a(),n("div",null,c)}var C=s(t,[["render",F]]);export{d as __pageData,C as default};
