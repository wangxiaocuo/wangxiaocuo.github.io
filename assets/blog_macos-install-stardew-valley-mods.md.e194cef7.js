import{_ as a,c as t,o as e,a as s}from"./app.a7b90192.js";const g='{"title":"MacOS \u5B89\u88C5\u300C\u661F\u9732\u8C37\u7269\u8BED\u300D\u6A21\u7EC4","description":"","frontmatter":{"title":"MacOS \u5B89\u88C5\u300C\u661F\u9732\u8C37\u7269\u8BED\u300D\u6A21\u7EC4","date":"2021/10/29 16:00","categories":["\u6E38\u620F\u7269\u8BED"],"tags":["MacOS","\u6E38\u620F","\u661F\u9732\u8C37\u7269\u8BED"]},"headers":[{"level":2,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C"},{"level":3,"title":"\u5148\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED","slug":"\u5148\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED"},{"level":3,"title":"Mono","slug":"mono"},{"level":3,"title":"SMAPI","slug":"smapi"},{"level":2,"title":"\u6B63\u5F0F\u5F15\u5165\u6A21\u7EC4","slug":"\u6B63\u5F0F\u5F15\u5165\u6A21\u7EC4"},{"level":3,"title":"\u4E0B\u8F7D\u6A21\u7EC4","slug":"\u4E0B\u8F7D\u6A21\u7EC4"},{"level":3,"title":"\u5B89\u88C5\u6A21\u7EC4","slug":"\u5B89\u88C5\u6A21\u7EC4"},{"level":3,"title":"\u542F\u52A8\u661F\u9732\u8C37\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u6B63\u786E\u52A0\u8F7D","slug":"\u542F\u52A8\u661F\u9732\u8C37\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u6B63\u786E\u52A0\u8F7D"},{"level":2,"title":"\u6A21\u7EC4\u63A8\u8350","slug":"\u6A21\u7EC4\u63A8\u8350"}],"relativePath":"blog/macos-install-stardew-valley-mods.md","lastUpdated":1641378262712}',d={},o=s('<h1 id="macos-\u5B89\u88C5\u300C\u661F\u9732\u8C37\u7269\u8BED\u300D\u6A21\u7EC4" tabindex="-1">MacOS \u5B89\u88C5\u300C\u661F\u9732\u8C37\u7269\u8BED\u300D\u6A21\u7EC4 <a class="header-anchor" href="#macos-\u5B89\u88C5\u300C\u661F\u9732\u8C37\u7269\u8BED\u300D\u6A21\u7EC4" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u5148\u770B\u770B<a href="https://stardewvalleywiki.com/Modding:Installing_SMAPI_on_Mac" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6559\u7A0B</a>\uFF0C\u8FD9\u7BC7\u535A\u6587\u662F\u5BF9\u5B98\u65B9\u6559\u7A0B\u7684\u8865\u5145\u548C\u5C55\u5F00\u3002</p><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><h3 id="\u5148\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED" tabindex="-1">\u5148\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED <a class="header-anchor" href="#\u5148\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED" aria-hidden="true">#</a></h3><p>\u8BF7\u5728\u5B89\u88C5\u597D\u661F\u9732\u8C37\u7269\u8BED\u4E4B\u540E\u518D\u7EE7\u7EED\u64CD\u4F5C\u3002</p><h3 id="mono" tabindex="-1">Mono <a class="header-anchor" href="#mono" aria-hidden="true">#</a></h3><blockquote><p>\u5B98\u65B9\u7684\u6559\u7A0B\u91CC\u9762\uFF0C\u63D0\u793A <code>As of the upcoming SMAPI 3.13.0: Install [.NET 5](https://dotnet.microsoft.com/download/dotnet/5.0) instead.</code>\uFF0C\u4ECE\u5373\u5C06\u63A8\u51FA\u7684 SMAPI 3.13.0 \u5F00\u59CB\uFF0C\u6539\u4E3A\u5B89\u88C5 <code>.NET 5</code>\u3002\u6211\u6B64\u523B\u7684 SMAPI \u6700\u65B0\u7248\u672C\u662F <code>3.12.8</code>\uFF0C\u5982\u679C\u4F60\u770B\u5230\u8FD9\u7BC7\u6559\u7A0B\u65F6\uFF0C\u7248\u672C\u5DF2\u7ECF\u5230\u4E86 <code>3.13.0+</code>\uFF0C\u8BF7\u5B89\u88C5 <a href="https://dotnet.microsoft.com/download/dotnet/5.0" target="_blank" rel="noopener noreferrer">.NET 5</a>\u3002</p></blockquote><p><strong>Mono</strong> \u662F\u4E00\u4E2A\u8F6F\u4EF6\u5E73\u53F0\uFF0C\u65E8\u5728\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u8F7B\u677E\u521B\u5EFA <a href="https://www.dotnetfoundation.org/" target="_blank" rel="noopener noreferrer">.NET Foundation \u7684</a>\u8DE8\u5E73\u53F0\u5E94\u7528\u7A0B\u5E8F\u90E8\u5206\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0CMono \u53EF\u4EE5\u8BA9 MacOS \u8FD0\u884C Windows \u7684\u8F6F\u4EF6\u3002</p><h4 id="\u4E0B\u8F7D-mono" tabindex="-1">\u4E0B\u8F7D Mono <a class="header-anchor" href="#\u4E0B\u8F7D-mono" aria-hidden="true">#</a></h4><p>\u6253\u5F00<a href="https://www.mono-project.com/download/stable/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a>\uFF0C\u70B9\u51FB <code>Download Mono 6.12.0 (Stable channel)</code> \u4E0B\u8F7D\u7A33\u5B9A\u7248\u672C\u3002\u4E0D\u5EFA\u8BAE\u4E0B\u8F7D Visual Studio \u7684\u7248\u672C\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/3acbd878-9fce-43ed-80ce-c195e6d8a8b5.png" alt=""></p><h4 id="\u5B89\u88C5-mono" tabindex="-1">\u5B89\u88C5 Mono <a class="header-anchor" href="#\u5B89\u88C5-mono" aria-hidden="true">#</a></h4><p>\u53CC\u51FB\u6253\u5F00\u5B89\u88C5\u5305\uFF0C\u6309\u6B65\u9AA4\u5B89\u88C5\uFF0C\u5B89\u88C5\u4F4D\u7F6E\u9009<strong>Macintosh HD</strong>\u3002</p><h3 id="smapi" tabindex="-1">SMAPI <a class="header-anchor" href="#smapi" aria-hidden="true">#</a></h3><p><code>SMAPI</code> \u662F<strong>\u661F\u9732\u8C37\u7269\u8BED</strong>\u7684\u6A21\u7EC4\u52A0\u8F7D\u5668\u3002</p><h4 id="\u4E0B\u8F7D-smapi" tabindex="-1">\u4E0B\u8F7D SMAPI <a class="header-anchor" href="#\u4E0B\u8F7D-smapi" aria-hidden="true">#</a></h4><p>\u6253\u5F00<a href="https://smapi.io/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a>\uFF0C\u70B9\u51FB <code>Download SMAPI 3.12.8</code> \u6309\u94AE\uFF0C\u9009\u62E9 <code>Direct download</code> \u76F4\u63A5\u4E0B\u8F7D\u5B89\u88C5\u5305\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/15e0d708-7848-4ce5-a16a-c1b3a62e853c.png" alt=""></p><h4 id="\u5B89\u88C5-smapi" tabindex="-1">\u5B89\u88C5 SMAPI <a class="header-anchor" href="#\u5B89\u88C5-smapi" aria-hidden="true">#</a></h4><p>\u89E3\u538B\u540E\uFF0C\u53CC\u51FB\u6253\u5F00 <code>SMAPI 3.12.8 installer</code> \u6587\u4EF6\u5939\u91CC\u7684 <code>install on macOS.command</code> \u6587\u4EF6\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/76490069-0548-46be-869a-caac59b3d26f.png" alt=""></p><p>\u53EF\u80FD\u4F1A\u63D0\u793A\u4E00\u4E0B\u65E0\u6CD5\u5B89\u88C5\u7684\u4FE1\u606F\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/e888d146-823d-481c-9de5-bbbf08e6d74d.png" alt=""></p><p>\u4E0D\u8981\u614C\uFF0C\u5728 Mac \u7684\u300C\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E\u300D-\u300C\u5B89\u5168\u6027\u4E0E\u9690\u79C1\u300D-\u300C\u901A\u7528\u300D\u4E2D\u53EF\u4EE5\u770B\u5230 <code>\u5DF2\u963B\u6B62\u4F7F\u7528\u201Cinstall on macOS.command\u201D\uFF0C\u56E0\u4E3A\u6765\u81EA\u8EAB\u4EFD\u4E0D\u660E\u7684\u5F00\u53D1\u8005\u3002</code>\u3002</p><p>\u70B9\u51FB<code>\u4ECD\u8981\u6253\u5F00</code>\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/f27529c4-29ef-43d9-9662-95773211080d.png" alt=""></p><p>SMAPI MacOS \u5B89\u88C5\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u542F\u52A8\u7EC8\u7AEF\uFF0C\u63A5\u4E0B\u6765\u6709\u4E09\u6B65\u9700\u8981\u5728\u7EC8\u7AEF\u64CD\u4F5C\u3002</p><ol><li>\u9700\u8981\u9009\u62E9\u6587\u5B57\u4E3B\u9898\uFF0C\u8FD9\u91CC\u6211\u9009\u62E9<code>2</code>\uFF0C\u8F93\u5165<code>2</code>\u7136\u540E\u56DE\u8F66\u3002</li></ol><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/0794e295-2979-4034-829c-56572d3ccc17.png" alt=""></p><ol start="2"><li>\u9700\u8981\u9009\u62E9\u5B89\u88C5\u8DEF\u5F84\uFF0C\u5982\u679C\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86\u661F\u9732\u8C37\u7269\u8BED\uFF0C\u5B83\u4F1A\u81EA\u52A8\u8BC6\u522B\u5230\uFF0C\u53EA\u9700\u8981\u8F93\u5165<code>1</code>\u7136\u540E\u56DE\u8F66\u3002</li></ol><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/628159ef-015f-49fb-bf99-6cc38aaf1e5d.png" alt=""></p><ol start="3"><li>\u9700\u8981\u9009\u62E9\u662F<strong>\u5B89\u88C5</strong>\u8FD8\u662F<strong>\u5378\u8F7D</strong>\uFF0C\u9009<code>1</code>\u8FDB\u884C\u5B89\u88C5\u3002</li></ol><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/83b9b9d1-54a8-495f-98f6-fd0090c19a60.png" alt=""></p><p>\u6700\u540E\u53EF\u4EE5\u770B\u5230\u5B89\u88C5\u6210\u529F\u7684\u63D0\u793A\u3002</p><p>\u540C\u65F6\u8BE5\u7A97\u53E3\u5305\u542B\u6E38\u620F\u5B89\u88C5\u76EE\u5F55\uFF0C\u5982\u679C\u4F60\u5728\u4E0A\u4E00\u6B65\u9009\u62E9\u7684\u662F\u9ED8\u8BA4\u76EE\u5F55\uFF0C\u4E00\u822C\u8DEF\u5F84\u4E3A <code>/Users/&lt;\u4F60\u7684 MacOS \u5F53\u524D\u7528\u6237\u540D&gt;/Library/Application Support/Steam/steamapps/common/Stardew Valley/Contents/MacOS/</code>\u3002\u590D\u5236\u4FDD\u5B58\u4E0B\u6765\uFF0C\u5F85\u4F1A\u513F\u5F15\u5165\u6A21\u7EC4\u7684\u9700\u8981\u7528\u5230\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/3845e2cc-913d-4a03-9a59-b4f54e8a50ec.png" alt=""></p><h2 id="\u6B63\u5F0F\u5F15\u5165\u6A21\u7EC4" tabindex="-1">\u6B63\u5F0F\u5F15\u5165\u6A21\u7EC4 <a class="header-anchor" href="#\u6B63\u5F0F\u5F15\u5165\u6A21\u7EC4" aria-hidden="true">#</a></h2><p>\u524D\u9762\u7684\u90FD\u662F\u6A21\u7EC4\u5B89\u88C5\u7684\u51C6\u5907\u5DE5\u4F5C\uFF0C\u63A5\u4E0B\u6765\u4ECB\u7ECD\u600E\u4E48\u4E0B\u8F7D\u548C\u5B89\u88C5\u6A21\u7EC4\u3002</p><h3 id="\u4E0B\u8F7D\u6A21\u7EC4" tabindex="-1">\u4E0B\u8F7D\u6A21\u7EC4 <a class="header-anchor" href="#\u4E0B\u8F7D\u6A21\u7EC4" aria-hidden="true">#</a></h3><p>\u6211\u7684\u6A21\u7EC4\u90FD\u662F\u5728 <a href="https://www.nexusmods.com/stardewvalley/mods/" target="_blank" rel="noopener noreferrer">NEXUSMODS\uFF08N \u7F51\uFF09</a> \u4E0B\u8F7D\u7684\u3002</p><p>N \u7F51\u7684\u6A21\u7EC4\u4E0B\u8F7D\u90FD\u662F\u514D\u8D39\u7684\uFF0C\u4E0B\u8F7D\u754C\u9762\u4E0A\u4F1A\u6709\u8D5E\u52A9\u5F00\u53D1\u8005\u7684\u63D0\u793A\uFF0C\u6709\u6761\u4EF6\u7684\u53EF\u4EE5\u652F\u6301\u4E00\u4E0B\u3002</p><blockquote><p>\u6A21\u7EC4\u5176\u5B9E\u5206\u4E3A\u4E24\u7C7B\uFF1A\u4E00\u7C7B\u662F\u300C\u76AE\u80A4\u6A21\u7EC4\u300D\uFF0C\u4E0D\u5F71\u54CD\u6E38\u620F\u672C\u8EAB\u7684\u529F\u80FD\uFF0C\u53EA\u662F\u6539\u53D8\u5916\u8C8C\uFF1B\u8FD8\u6709\u4E00\u7C7B\u662F\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D\uFF0C\u4F1A\u6539\u53D8\u6E38\u620F\u672C\u8EAB\u7684\u6D41\u7A0B\u6216\u529F\u80FD\u3002</p></blockquote><p>\u6211\u5148\u4EE5 <a href="https://www.nexusmods.com/stardewvalley/mods/2697" target="_blank" rel="noopener noreferrer">Skip Fishing Minigame\uFF08\u8DF3\u8FC7\u9493\u9C7C\u5C0F\u6E38\u620F\uFF09</a> \u8FD9\u4E2A\u6A21\u7EC4\u4E3A\u4F8B\uFF0C\u7B80\u5355\u4ECB\u7ECD\u4E0B\u600E\u4E48\u4E0B\u8F7D\u6A21\u7EC4\u3002</p><ul><li>\u5148\u67E5\u770B\u8BE5\u6A21\u7EC4\u7684\u5B89\u88C5\u8981\u6C42\uFF0C\u6709\u4E9B\u6A21\u7EC4\u4F1A\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6A21\u7EC4\u3002\u5982\u679C\u8981\u6C42\u91CC\u9762\u53EA\u6709 SMAPI\uFF0C\u76F4\u63A5\u4E0B\u8F7D\u4E0D\u7528\u62C5\u5FC3\uFF1B\u5982\u679C\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6A21\u7EC4\uFF0C\u9700\u8981\u628A\u4F9D\u8D56\u7684\u6A21\u7EC4\u4E5F\u4E00\u8D77\u4E0B\u8F7D\u3002</li></ul><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/86d6c1cc-8c63-462e-8931-6ae0fe74b8ea.png" alt=""></p><ul><li>\u8FD9\u91CC Skip Fishing Minigame \u4E0D\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6A21\u7EC4\uFF0C\u76F4\u63A5\u70B9\u51FB <code>MANUAL</code> \u6309\u94AE\uFF0C\u6216\u8005\u6EDA\u52A8\u5230\u4E0B\u9762\uFF0C\u9009\u62E9\u5386\u53F2\u7248\u672C\uFF0C\u70B9\u51FB\u5386\u53F2\u7248\u672C\u7684 <code>MANUAL DOWNLOAD</code>\u3002\u5728\u5F39\u6846\u4E2D\u70B9\u51FB <code>DOWNLOAD</code>\uFF1B</li></ul><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/8374dd83-1ef6-448e-90b7-0d87bab8bcfa.png" alt=""></p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/8b89c930-140a-4455-a9ae-6d4f70d68457.png" alt=""></p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/e59299cb-8615-4826-9ab4-cf2d92f5c4e8.png" alt=""></p><ul><li>\u5982\u679C\u4F60\u6CA1\u6709\u767B\u5F55\uFF0C\u5B83\u4F1A\u63D0\u793A\u4F60\u5FC5\u987B\u5148\u767B\u5F55\u624D\u80FD\u4E0B\u8F7D\u3002</li></ul><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/666d80b5-3e93-46d3-93c8-c53c211525af.png" alt=""></p><blockquote><p>\u6CE8\u610F\uFF0C\u5982\u679C\u4F60\u662F\u6CA1\u6709\u8D26\u6237\uFF0C\u6CE8\u518C\u7684\u65F6\u5019\u6709\u53EF\u80FD\u4F1A\u9700\u8981\u4F60\u4EA4\u4E92\u9A8C\u8BC1\uFF0C\u8FD9\u65F6\u5019\u53EF\u80FD\u9700\u8981<code>\u79D1\u5B66\u4E0A\u7F51</code>\u624D\u80FD\u5B8C\u6210\u9A8C\u8BC1\u2026\u2026</p></blockquote><ul><li>\u6700\u540E\u9009\u62E9 <code>SLOW DOWNLOAD</code>\uFF0C\u767D\u5AD6\u4E0B\u8F7D\uFF0C\u901F\u5EA6\u6BD4\u8F83\u6162\u3002\u6709\u6761\u4EF6\u7684\u7B49\u4E0D\u53CA\u7684\u53EF\u4EE5\u4EA4\u4E2A\u4F1A\u5458\u5FEB\u901F\u4E0B\u8F7D\u3002</li></ul><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/cf5ab78f-cae0-4871-a533-621f1d879cb3.png" alt=""></p><h3 id="\u5B89\u88C5\u6A21\u7EC4" tabindex="-1">\u5B89\u88C5\u6A21\u7EC4 <a class="header-anchor" href="#\u5B89\u88C5\u6A21\u7EC4" aria-hidden="true">#</a></h3><p>\u6253\u5F00\u300C\u8BBF\u8FBE\u300D\uFF0C\u5728\u9876\u90E8\u64CD\u4F5C\u83DC\u5355\u4E2D\uFF0C\u70B9\u51FB\u300C\u524D\u5F80\u300D-\u300C\u524D\u5F80\u6587\u4EF6\u5939\u300D\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/3364616a-8584-4224-a4b9-ca72f084e2d7.png" alt=""></p><p>\u5728\u5F39\u51FA\u6846\u4E2D\u8F93\u5165\u4E4B\u524D\u590D\u5236\u7684\u6E38\u620F\u8DEF\u5F84\uFF0C\u56DE\u8F66\u6216\u70B9\u51FB\u300C\u524D\u5F80\u300D\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/18de98c9-a308-4280-8319-10e2b4c6abb2.png" alt=""></p><p>\u8BE5\u6E38\u620F\u76EE\u5F55\u4E0B\u9762\u7684 <code>Mods</code> \u6587\u4EF6\u5939\u5373\u662F\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D\u5B58\u653E\u7684\u6587\u4EF6\u5939\u3002\u53EF\u4EE5\u770B\u5230\u91CC\u9762\u5DF2\u7ECF\u6709\u4E86\u4E09\u4E2A\u6A21\u7EC4\uFF0C\u8FD9\u662F SMAPI \u81EA\u52A8\u5E2E\u6211\u4EEC\u5B89\u88C5\u7684\uFF0C\u4E0D\u7528\u7BA1\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/dbb17f7b-cd67-4dc5-b123-4d96df415523.png" alt=""></p><h4 id="\u5B89\u88C5\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D" tabindex="-1">\u5B89\u88C5\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D <a class="header-anchor" href="#\u5B89\u88C5\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D" aria-hidden="true">#</a></h4><p>\u628A\u521A\u521A\u4E0B\u8F7D\u7684\u6A21\u7EC4\u89E3\u538B\uFF0C\u5E76\u6574\u4E2A\u590D\u5236\u5230 <code>Mods</code> \u6587\u4EF6\u5939\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/49e53a72-9abc-43b2-b8e1-7b0a1555b005.png" alt=""></p><p>\u6253\u5B8C\u6536\u5DE5\uFF0C\u662F\u4E0D\u662F\u5F88\u7B80\u5355\u3002</p><h4 id="\u5B89\u88C5\u300C\u76AE\u80A4\u6A21\u7EC4\u300D" tabindex="-1">\u5B89\u88C5\u300C\u76AE\u80A4\u6A21\u7EC4\u300D <a class="header-anchor" href="#\u5B89\u88C5\u300C\u76AE\u80A4\u6A21\u7EC4\u300D" aria-hidden="true">#</a></h4><p>\u4E00\u822C\u76AE\u80A4\u7C7B\u6A21\u7EC4\uFF0C\u5728\u4E0B\u8F7D\u7684\u65F6\u5019\uFF0C\u4E0B\u8F7D\u754C\u9762\u4E0A\u4F1A\u63D0\u793A\u600E\u4E48\u5B89\u88C5\u3002\u5373<strong>\u5C06\u6B64\u300Cportraits\u300D\u6587\u4EF6\u5939\u7C98\u8D34\u5230\u300C...Stardew Valley/Content/Portraits\u300D\u6587\u4EF6\u5939\u4E2D</strong>\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/395720cc-345f-4914-bf88-093da2ea36b2.png" alt=""></p><p>\u4E0D\u8FC7\u8FD9\u91CC\u6807\u6CE8\u7684\u662F Windows \u7684\u8DEF\u5F84\uFF0CMacOS \u8DEF\u5F84\u4E3A <code>/Users/&lt;\u4F60\u7684 MacOS \u5F53\u524D\u7528\u6237\u540D&gt;/Library/Application Support/Steam/steamapps/common/Stardew Valley/Contents/Resources/Content/Portraits</code></p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/223579b7-af94-47b0-9a71-3751032fc8c2.png" alt=""></p><blockquote><p>\u76AE\u80A4\u7C7B\u6A21\u7EC4\u7684\u672C\u8D28\u5C31\u662F<em>\u66FF\u6362\u8D34\u56FE</em>\uFF0C\u6240\u4EE5\u6700\u597D\u5907\u4EFD\u4E00\u4E0B\u9ED8\u8BA4\u7684\u300Cportraits\u300D\u6587\u4EF6\u5939\uFF0C\u9632\u6B62\u6A21\u7EC4\u957F\u5230\u66F4\u4E11\uFF0C\u7559\u4E00\u679A\u540E\u6094\u836F\u3002</p></blockquote><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/2bf41638-9075-4391-970e-057625bd086a.png" alt=""></p><h3 id="\u542F\u52A8\u661F\u9732\u8C37\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u6B63\u786E\u52A0\u8F7D" tabindex="-1">\u542F\u52A8\u661F\u9732\u8C37\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u6B63\u786E\u52A0\u8F7D <a class="header-anchor" href="#\u542F\u52A8\u661F\u9732\u8C37\u68C0\u67E5\u6A21\u7EC4\u662F\u5426\u6B63\u786E\u52A0\u8F7D" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\u4E86 SMAPI \u540E\uFF0C\u6BCF\u6B21\u542F\u52A8\u661F\u9732\u8C37\u7269\u8BED\uFF0C\u90FD\u4F1A\u81EA\u52A8\u5F39\u51FA\u4E00\u4E2A\u7EC8\u7AEF\u754C\u9762\uFF0C\u8FD9\u4E2A\u754C\u9762\u5C55\u793A\u7684\u662F\u6E38\u620F\u542F\u52A8\u7684\u8FDB\u7A0B\u4FE1\u606F\uFF0C\u5173\u95ED\u7EC8\u7AEF\u754C\u9762\u5373\u662F\u5173\u95ED\u6E38\u620F\u3002\u4E00\u5F00\u59CB\u7684\u754C\u9762\u4E2D\u4F1A\u5C55\u793A\u300C\u529F\u80FD\u6027\u6A21\u7EC4\u300D\u7684\u52A0\u8F7D\u4FE1\u606F\u3002</p><p>\u5982\u679C\u754C\u9762\u4E2D\u6709\u6807\u7EA2\u7684 <code>Error</code> \u5B57\u6837\uFF0C\u8BF4\u660E\u4F60\u521A\u521A\u6DFB\u52A0\u7684\u6A21\u7EC4\u53EF\u80FD\u4E0D\u517C\u5BB9\u5F53\u524D\u6E38\u620F\uFF08\u4E5F\u53EF\u80FD\u662F\u5176\u4ED6\u539F\u56E0\uFF0C\u5177\u4F53\u539F\u56E0\u770B\u65E5\u5FD7\u6253\u5370\uFF09\uFF0C\u5EFA\u8BAE\u66F4\u6362\u6216\u5220\u9664\u6389\u3002</p><p><img src="https://wxc-open-space.oss-cn-shanghai.aliyuncs.com/macos-install-stardew-valley-mods/73f54053-954f-43d8-b337-c722baaf7df4.png" alt=""></p><h2 id="\u6A21\u7EC4\u63A8\u8350" tabindex="-1">\u6A21\u7EC4\u63A8\u8350 <a class="header-anchor" href="#\u6A21\u7EC4\u63A8\u8350" aria-hidden="true">#</a></h2><table><thead><tr><th>\u82F1\u6587\u540D</th><th>\u4E2D\u6587\u540D</th><th>\u7F16\u53F7</th><th>\u94FE\u63A5</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Content Patcher</td><td>\u5185\u5BB9\u4FEE\u8865\u7A0B\u5E8F</td><td>1915</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/1915" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u8FD9\u662F\u4E00\u4E2A\u6E38\u620F\u5185\u5BB9\u4FEE\u8865\u7684\u7A0B\u5E8F\uFF0C\u5F88\u591A\u529F\u80FD\u6027\u6A21\u7EC4\u90FD\u9700\u8981\u4F9D\u8D56\u5B83\u624D\u80FD\u751F\u6548\uFF0C\u6700\u597D\u88C5\u4E00\u4E0B\u3002 </td></tr><tr><td>stardewvalley anime mods</td><td>\u6751\u6C11\u52A8\u6F2B\u76AE\u80A4</td><td>1839</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/1839" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u76AE\u80A4\u6A21\u7EC4\uFF0C\u4EBA\u6C14\u5F88\u9AD8\u7684\u52A8\u6F2B\u98CE\u683C\u76AE\u80A4\u3002 </td></tr><tr><td>Skip Fishing Minigame</td><td>\u8DF3\u8FC7\u9493\u9C7C\u5C0F\u6E38\u620F</td><td>2697</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/2697" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> 1. \u524D\u671F\u5FEB\u901F\u901A\u8FC7\u9493\u9C7C\u79EF\u7D2F\u91D1\u94B1\uFF1B<br>2. \u8F7B\u677E\u9493\u9C7C\u738B </td></tr><tr><td>Visible Fish - see catchable fish in the water</td><td>\u663E\u793A\u53EF\u4EE5\u9493\u5230\u7684\u9C7C</td><td>8897</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/8897" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u53EF\u4EE5\u5728\u6C34\u4E2D\u770B\u5230\u53EF\u4EE5\u9493\u5230\u7684\u9C7C\u6216\u8005\u7269\u54C1\u7684\u8D34\u56FE </td></tr><tr><td>Gift Taste Helper</td><td>\u793C\u7269\u52A9\u624B</td><td>229</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/229" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u53EA\u8981\u662F\u6709\u4EBA\u7269\u5934\u50CF\u7684\u5730\u65B9\uFF0C\u9F20\u6807\u79FB\u4E0A\u53BB\u53EF\u4EE5\u770B\u5230\u89D2\u8272\u6700\u7231\u7684\u793C\u7269\uFF0C\u7F3A\u70B9\u662F\u770B\u4E0D\u5230\u559C\u6B22\u6216\u7740\u4E00\u822C\u7684\u793C\u7269 </td></tr><tr><td>Simple Crop Label</td><td>\u7B80\u6613\u519C\u4F5C\u7269\u6807\u7B7E</td><td>314</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/314" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u9F20\u6807\u79FB\u5230\u519C\u4F5C\u7269\u6216\u8005\u6811\u6728\u4E0A\uFF0C\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u7684\u540D\u5B57 </td></tr><tr><td>Skull Cavern Elevator</td><td>\u9AB7\u9AC5\u6D1E\u7A74\u7535\u68AF</td><td>963</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/963" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u8BA9\u9AB7\u9AC5\u6D1E\u7A74\u7684\u77FF\u6D1E\u4E5F\u62E5\u6709\u7535\u68AF\u529F\u80FD\uFF0C\u4E0D\u7528\u4E3A\u4E0B\u77FF\u800C\u70E6\u607C\u3002 </td></tr><tr><td>Simple Foliage</td><td>\u7B80\u6613\u6811\u53F6</td><td>8164</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/8164" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u76AE\u80A4\u6A21\u7EC4\uFF0C\u8BA9\u6811\u6728\u66F4\u597D\u770B\u4E00\u4E9B\u3002 </td></tr><tr><td>Friends Forever</td><td>\u6C38\u8FDC\u7684\u670B\u53CB</td><td>1738</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/1738" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u4E0D\u7528\u62C5\u5FC3\u6389\u53CB\u597D\u5EA6\uFF0C\u5982\u679C\u4E0D\u662F\u60F3\u653B\u7565\u7684\u6751\u6C11\uFF0C\u793C\u7269\u968F\u4FBF\u9001\u3002 </td></tr><tr><td>Fishing Made Easy Suite</td><td>\u8BA9\u9493\u9C7C\u53D8\u5F97\u5BB9\u6613</td><td>3623</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/3623" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u8BA9\u9C7C\u5728\u4EFB\u4F55\u65F6\u95F4\u3001\u5B63\u8282\u3001\u5929\u6C14\u51FA\u73B0\uFF0C\u8BA9\u4F20\u8BF4\u4E2D\u7684\u9C7C\u53EF\u4EE5\u91CD\u65B0\u6355\u6349\uFF0C\u8BA9\u4E94\u5F69\u788E\u7247\u6210\u4E3A\u53EF\u4EE5\u9493\u9C7C\u7684\u7269\u54C1\uFF0C\u8BA9\u4F60\u7684\u519C\u573A\u6C60\u5858\u53EF\u4EE5\u9493\u9C7C\uFF0C\u6539\u53D8\u9C7C\u98DF\u7269\u54C1\u7684\u8981\u6C42\uFF0C\u5E76\u589E\u52A0\u9C7C\u5356\u4EF7 </td></tr><tr><td>No Fence Decay</td><td>\u6CA1\u6709\u6805\u680F\u8150\u70C2</td><td>1180</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/1180" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u8BA9\u6805\u680F\u548C\u5927\u95E8\u4E0D\u4F1A\u70C2\u6389\u3002 </td></tr><tr><td>Wear More Rings</td><td>\u591A\u6234\u6212\u6307</td><td>3214</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/3214" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u53EF\u4EE5\u8BA9\u4E3B\u89D2\u6234\u66F4\u591A\u7684\u6212\u6307\u3002\u6CE8\u610F\u8BE5\u6A21\u7EC4\u4F9D\u8D56\u4E8E <a href="https://www.nexusmods.com/stardewvalley/mods/5098" target="_blank"> Generic Mod Config Menu </a> \u548C <a href="https://www.nexusmods.com/stardewvalley/mods/3213" target="_blank"> StardewHack </a></td></tr><tr><td>Stardew Valley Expanded</td><td>\u661F\u9732\u8C37\u6269\u5F20</td><td>3753</td><td><a href="https://www.nexusmods.com/stardewvalley/mods/3753" target="_blank"> \u70B9\u6211\u8DF3\u8F6C </a></td><td> \u540E\u671F\u901A\u5173\u4E86\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\uFF0C\u524D\u671F\u6211\u89C9\u5F97\u6CA1\u5FC5\u8981\u3002 </td></tr></tbody></table>',79),c=[o];function l(n,r,p,i,h,m){return e(),t("div",null,c)}var b=a(d,[["render",l]]);export{g as __pageData,b as default};
