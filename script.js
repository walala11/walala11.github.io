const slides = [
  {
    type: "cover",
    kicker: "红色资源数字化 H5 作品",
    title: "从石库门到南湖红船",
    body: "这不是把两处景点简单并列，而是把“会议为何发生、为何转移、如何完成、留下什么精神遗产”做成一条可阅读、可观看、可互动的历史链条。",
    visual: `
      <div class="route-hero">
        <div class="route-card shanghai"><b>上海</b><span>望志路 106 号</span><small>组织创建的现场</small></div>
        <div class="route-line"><i></i><i></i><i></i></div>
        <div class="route-card jiaxing"><b>嘉兴</b><span>南湖画舫</span><small>会议完成的现场</small></div>
      </div>`
  },
  {
    kicker: "01 / 选题定位",
    title: "一大会址与南湖红船不是两个孤立符号",
    body: "上海石库门提供了秘密开会、讨论纲领、建立组织的现实空间；嘉兴南湖则见证了会议在外部干扰后继续完成。作品把二者放在同一条叙事线上：从思想传播到组织创建，从城市里弄到湖上画舫，从会议过程到精神提炼。",
    visual: `
      <div class="evidence-grid">
        <article><b>空间</b><span>石库门住宅、里弄环境、法租界背景，说明会议隐蔽性。</span></article>
        <article><b>事件</b><span>1921 年 7 月下旬在上海召开，后转移到嘉兴南湖继续。</span></article>
        <article><b>人物</b><span>各地早期共产党组织代表与共产国际代表共同参与。</span></article>
        <article><b>成果</b><span>通过党的纲领和决议，产生中央领导机构。</span></article>
      </div>`
  },
  {
    kicker: "02 / 历史前提",
    title: "为什么 1921 年会出现这样一次秘密会议",
    body: "近代以来，中国在民族危机、制度危机和社会动员困境中反复寻找出路。新文化运动打开思想讨论空间，五四运动推动青年、工人和知识分子的政治觉醒，马克思主义传播与各地早期组织建立，使“成立一个全国性政党”从观念变成了可操作的行动。",
    visual: `
      <div class="timeline">
        <div><time>1915 前后</time><p>新文化运动兴起，民主、科学、社会改造等议题进入公共讨论。</p></div>
        <div><time>1919</time><p>五四运动扩大社会动员，工人阶级开始以更醒目的方式进入政治现场。</p></div>
        <div><time>1920</time><p>上海、北京等地早期共产党组织相继建立，出版、翻译、工人夜校等工作展开。</p></div>
        <div><time>1921</time><p>各地代表汇集上海，召开中国共产党第一次全国代表大会。</p></div>
      </div>`
  },
  {
    kicker: "03 / 上海会址",
    title: "石库门的意义：它是一次组织化开端的现场",
    body: "一大会址位于当年上海法租界望志路一带，外观是普通石库门住宅。正因为普通，它适合秘密会谈；也正因为地处上海，它连接出版、工运、翻译、联络等早期革命活动。H5 中保留黑白资料图，是为了让观众先看到“真实空间”，再进入后续解释。",
    visual: `
      <figure class="photo-frame">
        <img src="assets/archive/site-bw.jpg" alt="中共一大会址黑白历史资料图">
        <figcaption>中共一大会址黑白资料图。页面以史料图作为第一层依据，再展开结构化说明。</figcaption>
      </figure>`
  },
  {
    kicker: "04 / 修复前后",
    title: "一大会址图像对比：修复图只做辅助，不替代史料",
    body: "对比页保留“原始黑白资料图”和“修复上色效果”两张图：左侧用于确认资料来源和历史质感，右侧用于帮助观众辨认建筑、门窗、街面层次。展示时明确标注修复图是视觉辅助，不能把算法推断当成原始证据。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/site-bw.jpg" alt="中共一大会址黑白图"><figcaption>修复前：原始黑白资料图</figcaption></figure>
        <figure><img src="assets/archive/site-colorized.png" alt="中共一大会址修复上色图"><figcaption>修复后：辅助上色效果</figcaption></figure>
      </div>`
  },
  {
    kicker: "05 / 会议转移",
    title: "从上海到南湖：地点变化背后是会议目标的延续",
    body: "会议后期受到干扰后，代表转移到嘉兴南湖继续议程。这里的重点不是“换了一个风景更好的地点”，而是组织纪律、议程意识和政治目标没有被突发情况打断。H5 用路线图呈现转移过程，让观众理解“中断”与“完成”之间的张力。",
    visual: `
      <div class="transfer-map">
        <div class="station"><b>上海</b><span>秘密召开</span><small>讨论纲领、决议、组织原则</small></div>
        <div class="track"><i></i><i></i><i></i><i></i></div>
        <div class="station"><b>嘉兴</b><span>继续会议</span><small>完成议程，宣告新的政党诞生</small></div>
      </div>`
  },
  {
    kicker: "06 / 南湖红船",
    title: "红船的价值：把抽象的建党历史落到具体空间",
    body: "南湖画舫承载的是会议继续完成的关键瞬间。它不是孤立的纪念物，而是一次政治行动在复杂环境中完成的空间证据。作品在这一页不做过度渲染，只用黑白资料图和简短注释，把观众注意力放回“会议如何完成”。",
    visual: `
      <figure class="photo-frame">
        <img src="assets/archive/boat-bw.jpg" alt="南湖红船黑白历史资料图">
        <figcaption>南湖红船相关黑白资料图。它在页面中作为“会议完成地”的视觉锚点。</figcaption>
      </figure>`
  },
  {
    kicker: "07 / 修复前后",
    title: "南湖红船图像对比：第二组对比图已保留",
    body: "这一页恢复并保留第二张修复后图片。左图强调资料本身的年代感，右图帮助观众辨认船体、湖面、岸线和树影关系。为了减少 AI 痕迹，页面说明会把它定位为“辅助识别图”，不把它包装成真实彩色照片。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/boat-bw.jpg" alt="南湖红船黑白图"><figcaption>修复前：原始黑白资料图</figcaption></figure>
        <figure><img src="assets/archive/boat-colorized.png" alt="南湖红船修复上色图"><figcaption>修复后：辅助上色效果</figcaption></figure>
      </div>`
  },
  {
    kicker: "08 / 会议成果",
    title: "一大的成果不是“开过一次会”，而是建立了组织框架",
    body: "会议讨论并通过党的纲领、决议等内容，确定政党的性质、奋斗目标和组织原则，并产生中央领导机构。数字化表达不能只写“意义重大”，更要让观众看见：一个新的政治组织如何从分散的地方力量，走向全国性组织建设。",
    visual: `
      <div class="matrix">
        <div class="head"><span>成果</span><span>具体内容</span><span>展陈表达</span></div>
        <div><span>纲领</span><span>确立党的性质、目标和组织原则</span><span>用关键词卡片呈现制度化表达</span></div>
        <div><span>决议</span><span>强调宣传、工人运动和组织工作</span><span>连接“思想传播”和“群众工作”</span></div>
        <div><span>机构</span><span>产生中央领导机构</span><span>说明从地方小组走向集中领导</span></div>
      </div>`
  },
  {
    kicker: "09 / 红船精神",
    title: "精神阐释要回到历史现场，而不是只喊口号",
    body: "“开天辟地、敢为人先”的首创精神，对应的是在旧制度和旧道路之外寻找新道路；“坚定理想、百折不挠”的奋斗精神，对应的是会议受干扰后仍然继续推进；“立党为公、忠诚为民”的奉献精神，对应的是把政党目标与人民解放、社会改造联系起来。",
    visual: `
      <div class="spirit-board">
        <article><b>首创</b><p>从思想传播走向政党创建，不只是讨论主义，而是建立组织。</p></article>
        <article><b>奋斗</b><p>面对搜查和转移，会议议程没有停止，目标没有松动。</p></article>
        <article><b>奉献</b><p>把个人选择放入民族独立、人民解放和社会改造的公共目标中。</p></article>
      </div>`
  },
  {
    kicker: "10 / 知识图谱",
    title: "把人物、地点、文件、精神放到同一张关系网里",
    body: "作品的知识图谱不是装饰，而是帮助观众把碎片信息归位：上海会址回答“从哪里开始”，南湖红船回答“如何完成”，纲领和决议回答“建立什么”，红船精神回答“后来如何被概括和传承”。",
    visual: `
      <div class="graph">
        <span class="node main">中共一大</span>
        <span class="node n1">上海会址</span>
        <span class="node n2">南湖红船</span>
        <span class="node n3">纲领与决议</span>
        <span class="node n4">红船精神</span>
        <span class="node n5">早期组织</span>
      </div>`
  },
  {
    kicker: "11 / 数字化方法",
    title: "数字化不是堆特效，而是让资料更容易被理解",
    body: "本作品采用“史料图 + 对比修复 + 结构卡片 + 路线图 + 互动检测”的组合。图像修复只解决辨认问题；结构卡片解决信息分层；互动题检验观众是否理解“转移并不等于中断”这一关键逻辑。",
    visual: `
      <div class="method-list">
        <div><b>史料底图</b><span>先看原始图，避免视觉效果压过史料本身。</span></div>
        <div><b>辅助修复</b><span>保留“修复前/修复后”并列，明确修复图的推断属性。</span></div>
        <div><b>关系重组</b><span>用时间线、矩阵、图谱把文字资料转成可扫读结构。</span></div>
        <div><b>互动反馈</b><span>用选择题让观众确认自己理解的是历史逻辑而非表面信息。</span></div>
      </div>`
  },
  {
    kicker: "12 / 展陈脚本",
    title: "如果做成 60 秒微视频，应围绕三个问题推进",
    body: "短视频版本不需要把资料念成流水账。前 15 秒提出近代中国道路追问；中间 30 秒用上海会址、会议转移、南湖红船形成事件推进；最后 15 秒回到红船精神，说明它为什么能从一个历史现场转化为今天仍可理解的价值表达。",
    visual: `
      <div class="storyboard">
        <div><b>开场</b><span>黑白会址图淡入，字幕提出“为什么需要一个新的组织？”</span></div>
        <div><b>转折</b><span>路线从上海移向嘉兴，强调外部干扰与会议继续。</span></div>
        <div><b>完成</b><span>红船图出现，叠加纲领、决议、中央领导机构三个关键词。</span></div>
        <div><b>收束</b><span>用首创、奋斗、奉献对应历史现场，而不是空喊口号。</span></div>
      </div>`
  },
  {
    kicker: "13 / 互动检测",
    title: "理解检测：南湖转移最能说明什么",
    body: "互动页不是为了凑形式，而是把全篇最关键的理解点压缩成一道题：会议地点变了，但会议目标、议程推进和组织创建没有被打断。答题反馈会解释为什么这个选择成立。",
    visual: `
      <div class="quiz-panel">
        <h3>中共一大后期转移到嘉兴南湖继续举行，最能说明什么？</h3>
        <div class="quiz-options">
          <button data-ok="false">会议只是临时改换参观地点</button>
          <button data-ok="true">会议目标没有被干扰中断，革命信念与组织纪律继续推进</button>
          <button data-ok="false">会议内容和建党目标发生了根本变化</button>
        </div>
        <p id="quizResult" class="quiz-result"></p>
      </div>`
  },
  {
    kicker: "14 / 引用与边界",
    title: "资料使用要说明来源，也要说明加工边界",
    body: "页面中使用的历史图片应标注为公开资料图；修复上色图应标注为辅助效果。文字部分以重新组织、概括和解释为主，不大段搬运原文。这样既能满足作品展示，也能让观众知道哪些是史实依据，哪些是数字化处理。",
    visual: `
      <div class="source-grid">
        <article><b>图像来源</b><span>公开历史资料图，用于展示会址与红船的基本形貌。</span></article>
        <article><b>加工说明</b><span>上色图仅作辅助辨认，不视为真实彩色史料。</span></article>
        <article><b>文字策略</b><span>围绕事实、关系、意义重新组织，避免空泛套话。</span></article>
        <article><b>展示边界</b><span>不虚构历史细节，不用视觉效果替代史料判断。</span></article>
      </div>`
  },
  {
    kicker: "15 / 作品总结",
    title: "让红色资源从“看过”走向“看懂”",
    body: "这版 H5 的核心不是把页面做得热闹，而是让观众沿着清晰路径理解：近代中国为什么需要新的政治组织，一大如何在上海召开并在南湖完成，红船精神为什么不是抽象口号，而是从具体历史行动中提炼出来的价值结构。",
    visual: `
      <div class="final-panel">
        <b>提交网址</b>
        <span>https://walala11.github.io/</span>
        <p>16 页 H5 翻页作品；包含史料图、修复前后对比、时间线、路线图、知识图谱、展陈脚本和互动检测。</p>
      </div>`
  }
];

const deck = document.getElementById("deck");
const dots = document.getElementById("dots");
const pageNow = document.getElementById("pageNow");
const pageTotal = document.getElementById("pageTotal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let current = 0;

function renderSlides() {
  pageTotal.textContent = String(slides.length);
  deck.innerHTML = slides.map((slide, index) => {
    const isCover = slide.type === "cover";
    return `
      <section class="slide ${isCover ? "cover" : ""}" data-index="${index}">
        <div class="content">
          <div class="text-block">
            <p class="kicker">${slide.kicker}</p>
            ${isCover ? `<h1>${slide.title}</h1>` : `<h2>${slide.title}</h2>`}
            <p class="body-copy">${slide.body}</p>
          </div>
          <div class="visual">${slide.visual}</div>
        </div>
      </section>`;
  }).join("");

  dots.innerHTML = slides.map((_, index) =>
    `<button class="dot" type="button" aria-label="第 ${index + 1} 页" data-index="${index}"></button>`
  ).join("");
}

function update() {
  deck.style.transform = `translateY(-${current * 100}vh)`;
  pageNow.textContent = String(current + 1);
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  document.querySelectorAll(".dot").forEach((dot, index) => dot.classList.toggle("active", index === current));
}

function goTo(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  update();
}

renderSlides();
update();

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));
dots.addEventListener("click", (event) => {
  const target = event.target.closest(".dot");
  if (target) goTo(Number(target.dataset.index));
});

document.addEventListener("keydown", (event) => {
  if (["ArrowDown", "PageDown", "ArrowRight", " "].includes(event.key)) goTo(current + 1);
  if (["ArrowUp", "PageUp", "ArrowLeft"].includes(event.key)) goTo(current - 1);
});

document.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-options button");
  if (!option) return;
  document.querySelectorAll(".quiz-options button").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("correct", button.dataset.ok === "true");
    button.classList.toggle("wrong", button === option && button.dataset.ok !== "true");
  });
  document.getElementById("quizResult").textContent = option.dataset.ok === "true"
    ? "回答正确：关键不在地点变化本身，而在会议目标、组织纪律和建党议程没有被突发干扰打断。"
    : "再想一想：南湖转移不是观光式换场，而是会议在风险环境中继续完成。";
});
