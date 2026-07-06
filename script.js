const slides = [
  {
    type: "cover",
    kicker: "红色资源数字化 H5 作品",
    title: "从石库门到南湖红船",
    lead: "以中共一大会址与嘉兴南湖红船为核心案例，运用 AI 修复上色、知识图谱、互动问答和微视频分镜，呈现红色起点的历史逻辑与精神传承。",
    visual: `<img class="hero-img" src="assets/hero-red-boat.png" alt="石库门与南湖红船意象图"><div class="hero-mask"></div>`
  },
  {
    kicker: "01 / 选题定位",
    title: "为什么选择“一处会址、一艘红船”",
    body: "中共一大会址和南湖红船不是两个孤立景点，而是一条红色叙事链：上海会址见证组织创建的开始，南湖红船见证会议在复杂环境中的继续完成。二者共同构成理解中国共产党诞生的重要空间坐标。",
    visual: `<div class="card-grid">
      <div class="mini-card"><strong>上海会址</strong><p>秘密会议空间，体现从思想传播走向组织创建。</p></div>
      <div class="mini-card"><strong>南湖红船</strong><p>湖上继续议程，体现危机中的信念延续。</p></div>
      <div class="mini-card"><strong>会议成果</strong><p>纲领、决议、中央局，形成政党组织基础。</p></div>
      <div class="mini-card"><strong>精神升华</strong><p>首创、奋斗、奉献，构成红船精神的价值内核。</p></div>
    </div>`
  },
  {
    kicker: "02 / 历史前提",
    title: "一大的召开，来自近代中国的道路追问",
    body: "近代以来，中国社会经历民族危机、制度危机与道路危机。多种救国方案相继受挫后，新文化运动、五四运动和马克思主义传播推动先进分子重新思考中国前途。中共一大正是在这种历史追问中出现。",
    visual: `<div class="timeline">
      <div class="time-row"><span>危机</span><p>民族危机与社会危机推动救亡图存。</p></div>
      <div class="time-row"><span>启蒙</span><p>新文化运动打开思想解放空间。</p></div>
      <div class="time-row"><span>转向</span><p>五四运动促进马克思主义广泛传播。</p></div>
      <div class="time-row"><span>建党</span><p>早期组织汇合，形成全国性政党创建条件。</p></div>
    </div>`
  },
  {
    kicker: "03 / 上海石库门",
    title: "会址不是背景，而是组织化开端的现场",
    body: "石库门建筑的隐蔽性和城市位置，使它成为秘密会议的现实空间。这里的意义不只在“会议发生过”，更在于代表们讨论党的纲领、工作计划和组织原则，把分散的思想与地方组织转化为全国性政党建设。",
    visual: `<div class="photo-frame"><img src="assets/archive/site-bw.jpg" alt="中共一大会址黑白历史照片"><div class="caption">中共一大会址黑白历史资料图。来源：共产党员网公开资料。</div></div>`
  },
  {
    kicker: "04 / AI 图像修复",
    title: "中共一大会址：黑白史料与 AI 上色对照",
    body: "AI 上色的目的不是替代史料，而是帮助观众更直观地感受建筑空间。页面保留黑白原图作为依据，同时展示彩色复原效果，并明确标注其为算法推断生成的辅助图像。",
    visual: `<div class="compare">
      <figure><img src="assets/archive/site-bw.jpg" alt="中共一大会址黑白图"><figcaption>原始黑白资料图</figcaption></figure>
      <figure><img src="assets/archive/site-colorized.png" alt="中共一大会址 AI 上色图"><figcaption>AI 修复上色效果</figcaption></figure>
    </div>`
  },
  {
    kicker: "05 / 会议转移",
    title: "从上海到南湖：地点变化背后的信念延续",
    body: "会议后期受到干扰后，代表们转移到嘉兴南湖继续开会。这个变化不是叙事中断，而是说明会议目标没有被外部压力打断，组织纪律和政治信念在危机中继续推进。",
    visual: `<div class="timeline">
      <div class="time-row"><span>上海</span><p>石库门空间内启动会议，讨论建党关键问题。</p></div>
      <div class="time-row"><span>干扰</span><p>会议环境发生变化，需要迅速调整地点。</p></div>
      <div class="time-row"><span>嘉兴</span><p>转移到南湖游船，继续完成会议议程。</p></div>
      <div class="time-row"><span>完成</span><p>通过纲领、决议并产生中央领导机构。</p></div>
    </div>`
  },
  {
    kicker: "06 / 南湖红船",
    title: "一艘游船，成为红色起点的精神象征",
    body: "南湖红船的意义在于，它承载了会议继续完成的重要历史瞬间。红船后来成为中国革命源头的重要象征，也让抽象的建党精神获得了具体可感的空间载体。",
    visual: `<div class="photo-frame"><img src="assets/archive/boat-bw.jpg" alt="南湖红船黑白历史照片"><div class="caption">南湖红船相关黑白历史资料图。来源：共产党员网公开资料。</div></div>`
  },
  {
    kicker: "07 / AI 图像修复",
    title: "南湖红船：黑白史料与 AI 上色对照",
    body: "红船上色复原保留船体、湖面、岸线和树木关系，只进行去噪、清晰化和自然色彩补全。它服务于沉浸式理解，但不能替代黑白原始史料。",
    visual: `<div class="compare">
      <figure><img src="assets/archive/boat-bw.jpg" alt="南湖红船黑白图"><figcaption>原始黑白资料图</figcaption></figure>
    </div>`
  },
  {
    kicker: "08 / 会议成果",
    title: "一大的深层意义：把理想转化为组织",
    body: "中共一大的成果不只是“开了一次会”。它通过党的第一个纲领和第一个决议，确立奋斗目标、组织原则和工作方向，并产生中央局，使早期地方组织进入全国性政党建设阶段。",
    visual: `<div class="matrix">
      <div class="matrix-row header"><span>层面</span><span>历史内容</span><span>展陈理解</span></div>
      <div class="matrix-row"><span>纲领</span><span>明确党的性质、目标和组织原则。</span><span>理想获得制度化表达。</span></div>
      <div class="matrix-row"><span>决议</span><span>强调宣传马克思主义、组织工人运动。</span><span>思想连接现实群众。</span></div>
      <div class="matrix-row"><span>中央局</span><span>产生中央领导机构。</span><span>组织从分散走向集中。</span></div>
    </div>`
  },
  {
    kicker: "09 / 红船精神",
    title: "红船精神：历史现场的价值升华",
    body: "红船精神可以理解为三个层次：开天辟地、敢为人先的首创精神；坚定理想、百折不挠的奋斗精神；立党为公、忠诚为民的奉献精神。它不是口号，而是从建党实践中提炼出的价值结构。",
    visual: `<div class="matrix">
      <div class="matrix-row header"><span>精神关键词</span><span>对应历史现场</span><span>今日启示</span></div>
      <div class="matrix-row"><span>首创</span><span>探索新的革命道路和组织形态。</span><span>敢于面对新问题。</span></div>
      <div class="matrix-row"><span>奋斗</span><span>会场受干扰后仍转移继续。</span><span>困难中保持方向。</span></div>
      <div class="matrix-row"><span>奉献</span><span>把群众工作写入实践方向。</span><span>把个人成长融入公共价值。</span></div>
    </div>`
  },
  {
    kicker: "10 / 红色知识图谱",
    title: "用语义结构连接人物、地点、会议与精神",
    body: "数字化作品不能只堆资料，更要建立关系。本页把“中共一大”放在中心，连接上海石库门、南湖红船、纲领决议和红船精神，形成可视化知识图谱。",
    visual: `<div class="graph">
      <svg viewBox="0 0 900 430" aria-hidden="true">
        <line x1="450" y1="215" x2="175" y2="90"></line>
        <line x1="450" y1="215" x2="725" y2="90"></line>
        <line x1="450" y1="215" x2="175" y2="340"></line>
        <line x1="450" y1="215" x2="725" y2="340"></line>
      </svg>
      <span class="node main">中共一大</span><span class="node n1">上海石库门</span><span class="node n2">南湖红船</span><span class="node n3">纲领决议</span><span class="node n4">红船精神</span>
    </div>`
  },
  {
    kicker: "11 / 数字化方法",
    title: "AI 技术不是点缀，而是资料再组织工具",
    body: "本作品使用 AI 辅助图像修复上色、语义整理、解说词组织和交互问答设计。技术的作用不是制造虚假历史，而是帮助观众更清楚地看见史料、理解关系、记住精神。",
    visual: `<div class="card-grid">
      <div class="mini-card"><strong>图像修复</strong><p>黑白史料去噪、清晰化、上色展示。</p></div>
      <div class="mini-card"><strong>语义整理</strong><p>把资料转成提纲、时间线和图谱。</p></div>
      <div class="mini-card"><strong>语音解说</strong><p>形成可听的 H5 导览体验。</p></div>
      <div class="mini-card"><strong>互动问答</strong><p>用反馈机制强化学习记忆。</p></div>
    </div>`
  },
  {
    kicker: "12 / 微视频分镜",
    title: "如果扩展成短视频，可以这样讲",
    body: "H5 作品还可扩展为 60 秒微视频：以石库门开场，以南湖红船转场，以红船精神收束。视频不需要堆砌史料，而应围绕“为什么出发、如何继续、留下什么精神”三问展开。",
    visual: `<div class="storyboard">
      <div class="shot"><strong>镜头一</strong><p>石库门旧照淡入，旁白提出近代中国道路追问。</p></div>
      <div class="shot"><strong>镜头二</strong><p>地图线从上海移动到嘉兴，表现会场转移。</p></div>
      <div class="shot"><strong>镜头三</strong><p>红船与精神关键词出现，完成价值升华。</p></div>
    </div>`
  },
  {
    kicker: "13 / 互动检测",
    title: "红船精神互动问答",
    body: "点击选项完成知识检测。本页使用文字说明与交互问答两种形式，帮助观众从“看过”变成“理解”。",
    visual: `<div class="panel quiz-panel">
      <h3>中共一大后期转移到嘉兴南湖继续举行，最能说明什么？</h3>
      <div class="quiz-options">
        <button data-ok="false">会议只是临时改换参观地点</button>
        <button data-ok="true">会议目标没有被干扰中断，革命信念与组织纪律继续推进</button>
        <button data-ok="false">会议内容和建党目标发生根本变化</button>
      </div>
      <p class="quiz-result" id="quizResult"></p>
    </div>`
  },
  {
    kicker: "14 / 引用规范",
    title: "资料引用与比例控制",
    body: "本作品引用公开资料时只摘取事实信息、图片来源和经典表述，主体文字为重新整理和分析，避免大段照搬。图片均标注来源，AI 上色图明确注明为复原效果。",
    visual: `<div class="card-grid">
      <div class="source-card"><strong>资料名称</strong><p>《中共一大会址：伟大开端从这里开启》</p></div>
      <div class="source-card"><strong>资料来源</strong><p>共产党员网公开文章及配图。</p></div>
      <div class="source-card"><strong>使用方式</strong><p>核对事实、引用图片、提炼展陈逻辑。</p></div>
      <div class="source-card"><strong>比例控制</strong><p>以原创概括和分析为主，引用内容控制在要求范围内。</p></div>
    </div>`
  },
  {
    kicker: "15 / 作品总结",
    title: "让红色资源从“可参观”走向“可理解、可互动、可传播”",
    body: "本 H5 以两处红色资源为核心，用 16 页结构完成从史实、史料、AI 修复、精神解读到互动检测的数字化表达。最终目标不是替代历史现场，而是让更多人通过屏幕进入历史现场、理解红色基因。",
    visual: `<div class="quote-card">
      <strong>提交网址</strong>
      <p>https://walala11.github.io/</p>
      <br>
      <strong>作品形式</strong>
      <p>16 页 H5 翻页网页；每页包含文字与图片、图表、动画或互动等至少两种展现形式。</p>
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
      <section class="slide ${isCover ? "cover dark" : ""}" data-index="${index}">
        ${isCover ? slide.visual : ""}
        <div class="content">
          <div class="text-block">
            <p class="kicker">${slide.kicker}</p>
            ${isCover ? `<h1>${slide.title}</h1>` : `<h2>${slide.title}</h2>`}
            <p class="${isCover ? "lead" : "body-copy"}">${slide.lead || slide.body}</p>
          </div>
          <div class="visual">
            ${isCover ? "" : slide.visual}
          </div>
        </div>
      </section>
    `;
  }).join("");

  dots.innerHTML = slides.map((_, index) => `<button class="dot" type="button" aria-label="第 ${index + 1} 页" data-index="${index}"></button>`).join("");
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
  if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === "ArrowRight") goTo(current + 1);
  if (event.key === "ArrowUp" || event.key === "PageUp" || event.key === "ArrowLeft") goTo(current - 1);
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
    ? "回答正确：这体现了会议目标没有中断，以及革命者在复杂环境中的坚定与机敏。"
    : "再想一想：关键不是地点本身，而是会议在干扰中继续推进。";
});
