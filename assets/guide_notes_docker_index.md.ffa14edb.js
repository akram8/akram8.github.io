import{_ as n,c as a,o as s,d as e}from"./app.ca221e37.js";const h='{"title":"Docker \u7B80\u5355\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":3,"title":"Docker \u7B80\u5355\u4F7F\u7528","slug":"docker-\u7B80\u5355\u4F7F\u7528"}],"relativePath":"guide/notes/docker/index.md"}',c={},t=e(`<h3 id="docker-\u7B80\u5355\u4F7F\u7528" tabindex="-1">Docker \u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#docker-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h3><ul><li><h4 id="\u955C\u50CF\u641C\u7D22" tabindex="-1">\u955C\u50CF\u641C\u7D22 <a class="header-anchor" href="#\u955C\u50CF\u641C\u7D22" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code><span class="token comment"># \u901A\u8FC7\u547D\u4EE4\u67E5\u770B</span>
<span class="token number">1</span>. <span class="token function">docker</span> search <span class="token punctuation">[</span>image name<span class="token punctuation">]</span>
<span class="token comment"># \u901A\u8FC7hub\u7F51\u7AD9\u67E5\u770B</span>
<span class="token number">2</span>. https://hub.docker.com/
</code></pre></div><ul><li><h4 id="\u955C\u50CF\u4E0B\u8F7D-\u5E76-\u8FD0\u884C-nginx\u4E3A\u4F8B" tabindex="-1">\u955C\u50CF\u4E0B\u8F7D \u5E76 \u8FD0\u884C (Nginx\u4E3A\u4F8B) <a class="header-anchor" href="#\u955C\u50CF\u4E0B\u8F7D-\u5E76-\u8FD0\u884C-nginx\u4E3A\u4F8B" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code>
<span class="token comment"># \u4E0B\u8F7Dnginx\u955C\u50CF\uFF0C\u6CA1\u6709\u6307\u5B9A\u7248\u672C\u5219\u4E0B\u8F7D\u6700\u65B0\u7248\u672C docker pull [image name]</span>
<span class="token number">1</span>. <span class="token function">docker</span> pull nginx

<span class="token comment"># \u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C</span>
<span class="token number">2</span>. <span class="token function">docker</span> run <span class="token parameter variable">--name</span> my-nginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 nginx

<span class="token comment"># \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u5BB9\u5668\uFF08\u8FD0\u884C\u53EF\u4EE5\u67E5\u5230\u540D\u4E3A\uFF1Amy-nginx\u5BB9\u5668\uFF09</span>
<span class="token number">3</span>. <span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u8FDB\u5165my-nginx\u5BB9\u5668</span>
<span class="token number">4</span>. <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-nginx /bin/bash

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u5185\u7684 usr/share/nginx/hmtl \u76EE\u5F55\u5E76\u4FEE\u6539index.html\u6587\u4EF6</span>
<span class="token number">5</span>. <span class="token builtin class-name">cd</span> usr/share/nginx/html
<span class="token number">6</span>. <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello world !!!&#39;</span> <span class="token operator">&gt;</span> index.html

<span class="token comment"># \u901A\u8FC7cat \u67E5\u770B\u4FEE\u6539\u5185\u5BB9</span>
<span class="token number">7</span>. <span class="token function">cat</span> index.html

</code></pre></div><ul><li><h4 id="\u57FA\u4E8E\u5BB9\u5668\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF" tabindex="-1">\u57FA\u4E8E\u5BB9\u5668\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF <a class="header-anchor" href="#\u57FA\u4E8E\u5BB9\u5668\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code><span class="token comment"># -a : \u63D0\u4EA4\u7684\u955C\u50CF\u4F5C\u8005</span>
<span class="token comment"># -c : \u4F7F\u7528Dockerfile\u6307\u4EE4\u6765\u521B\u5EFA\u955C\u50CF</span>
<span class="token comment"># -m : \u63D0\u4EA4\u65F6\u7684\u8BF4\u660E\u6587\u5B57</span>
<span class="token comment"># -p : \u5728commit\u65F6\uFF0C\u5C06\u5BB9\u5668\u6682\u505C</span>

<span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;This is my nginx image&quot;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;akram&quot;</span> my-nginx:v1
</code></pre></div><ul><li><h4 id="\u67E5\u770B\u81EA\u5236\u955C\u50CF" tabindex="-1">\u67E5\u770B\u81EA\u5236\u955C\u50CF <a class="header-anchor" href="#\u67E5\u770B\u81EA\u5236\u955C\u50CF" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code><span class="token function">docker</span> images my-nginx:v1
</code></pre></div><ul><li><h4 id="\u5BFC\u51FA\u955C\u50CF-\u5BFC\u5165\u955C\u50CF" tabindex="-1">\u5BFC\u51FA\u955C\u50CF &amp; \u5BFC\u5165\u955C\u50CF <a class="header-anchor" href="#\u5BFC\u51FA\u955C\u50CF-\u5BFC\u5165\u955C\u50CF" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code><span class="token comment"># \u5BFC\u51FA\u955C\u50CF</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> my-nginx.tar my-nginx:v1

<span class="token comment"># \u5BFC\u5165\u955C\u50CF</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> my-nginx.tar
</code></pre></div><ul><li><h4 id="\u5BB9\u5668\u4E0E\u955C\u50CF\u5220\u9664" tabindex="-1">\u5BB9\u5668\u4E0E\u955C\u50CF\u5220\u9664 <a class="header-anchor" href="#\u5BB9\u5668\u4E0E\u955C\u50CF\u5220\u9664" aria-hidden="true">#</a></h4></li></ul><div class="language-bash"><pre><code><span class="token comment"># \u5220\u9664\u5BB9\u5668 docker rm -f [\u5BB9\u5668\u540D]</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> nginx

<span class="token comment"># \u5220\u9664\u955C\u50CF docker rmi [\u955C\u50CF\u540D]</span>
<span class="token function">docker</span> rmi nginx
</code></pre></div><ul><li><h4 id="docker-\u5BB9\u5668\u6587\u4EF6\u4E0A\u4F20\u4E0E\u4E0B\u8F7D" tabindex="-1">Docker \u5BB9\u5668\u6587\u4EF6\u4E0A\u4F20\u4E0E\u4E0B\u8F7D <a class="header-anchor" href="#docker-\u5BB9\u5668\u6587\u4EF6\u4E0A\u4F20\u4E0E\u4E0B\u8F7D" aria-hidden="true">#</a></h4></li></ul><p>\u4E0A\u4F20\uFF1A</p><div class="language-bash"><pre><code><span class="token comment"># \u4E0A\u4F20\u547D\u4EE4</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> SRC_PATH CONTAINER:DEST_PATH 

<span class="token comment"># \u53C2\u6570\u8BF4\u660E</span>
OPTIONS\uFF1A \u53EF\u9009\u53C2\u6570\u4E3A -L\uFF0C\u8868\u793A\u4FDD\u6301\u6E90\u76EE\u6807\u4E2D\u7684\u94FE\u63A5\uFF1B
SRC_PATH\uFF1A\u4E3A\u4E3B\u673A\u4E2D\u8981\u4E0A\u4F20\u5230\u5BB9\u5668\u7684\u6587\u4EF6\u8DEF\u5F84\uFF1B
CONTAINER\uFF1A\u4E3A\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D\u79F0\uFF1B
DEST_PATH\uFF1A\u4E3A\u8981\u5B58\u653E\u4E0A\u4F20\u6587\u4EF6\u7684\u5BB9\u5668\u8DEF\u5F84\uFF1B

<span class="token comment"># \u4F8B\u5982\uFF1Awindows\u7CFB\u7EDF\u4E0B\u3010F\u76D8\u4E0B\u7684material\u3011\u6587\u4EF6\u5939\u4E0A\u4F20\u5230 \u3010my-nginx\u3011\u5BB9\u5668\u3010home\u3011\u76EE\u5F55\u4E0B</span>
<span class="token function">docker</span> <span class="token function">cp</span> F:/Code/gitlab/material/ my-nginx:/home/
</code></pre></div><p>\u4E0B\u8F7D\uFF1A</p><div class="language-bash"><pre><code><span class="token comment"># \u4E0B\u8F7D\u547D\u4EE4\u4E3A\uFF1A</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER:SRC_PATH DEST_PATH

<span class="token comment"># \u53C2\u6570\u8BF4\u660E\uFF1A</span>
OPTIONS\uFF1A \u53EF\u9009\u53C2\u6570\u4E3A -L\uFF0C\u8868\u793A\u4FDD\u6301\u6E90\u76EE\u6807\u4E2D\u7684\u94FE\u63A5\uFF1B
CONTAINER\uFF1A\u4E3A\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D\u79F0\uFF1B
SRC_PATH\uFF1A\u4E3A\u5BB9\u5668\u7684\u6587\u4EF6\u8DEF\u5F84\uFF1B
DEST_PATH\uFF1A\u4E3A\u5B58\u653E\u4E0B\u8F7D\u6587\u4EF6\u7684\u4E3B\u673A\u76EE\u5F55\u8DEF\u5F84\uFF1B

<span class="token comment"># \u4F8B\u5982\uFF1A\u8868\u793A\u4E0B\u8F7D redis \u5BB9\u5668\u4E2D\u8DEF\u5F84\u4E3A /data/temp.txt \u7684\u6587\u4EF6\u5230\u4E3B\u952E\u76EE\u5F55 /home/ \u4E2D\u3002</span>
<span class="token function">docker</span> <span class="token function">cp</span> redis:/data/temp.txt /home/ 
</code></pre></div>`,18),o=[t];function p(l,i,r,d,m,k){return s(),a("div",null,o)}var g=n(c,[["render",p]]);export{h as __pageData,g as default};
