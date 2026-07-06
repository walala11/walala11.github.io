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
    body: "这一页恢复并保留第二张修复后图片。左图强调资料本身的年代感，右图展示 AI 如何在不改变船体结构的前提下进行渲染：先增强轮廓和明暗层次，再依据木质船身、湖面反光、岸线植被和树影关系补充自然色彩，帮助观众更清楚地辨认画面信息。",
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
    body: "这一页把叙事关系画成有方向的思维导图：先从近代中国道路追问进入早期组织，再落到一大召开；一大分出“上海会址”和“南湖红船”两条空间线索，同时产出纲领、决议和中央领导机构，最后沉淀为红船精神。",
    visual: `
      <div class="flow-map">
        <div class="flow-node start">近代中国道路追问</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">新文化运动 / 五四运动</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">早期共产党组织</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node core">中共一大</div>
        <div class="flow-branches">
          <div><span>空间线索</span><b>上海会址</b><em>秘密召开、讨论建党</em></div>
          <div><span>空间线索</span><b>南湖红船</b><em>转移继续、完成议程</em></div>
          <div><span>组织成果</span><b>纲领 / 决议 / 中央局</b><em>从分散走向集中</em></div>
        </div>
        <div class="flow-down">↓</div>
        <div class="flow-node end">红船精神：首创、奋斗、奉献</div>
      </div>`
  },
  {
    kicker: "11 / 补充修复",
    title: "石库门门楣：从灰度纹理到砖石层次",
    body: "这一组展示石库门门楣的修复前后。修复前保留旧照片的灰度、轻微模糊和年代质感；修复后根据砖墙纹理、石框边缘、门洞阴影和里弄纵深进行清晰化与色彩渲染，让观众更容易辨认上海会址的建筑特征。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/shikumen-before.png" alt="石库门门楣修复前示意图"><figcaption>修复前：灰度旧照片质感</figcaption></figure>
        <figure><img src="assets/archive/shikumen-restored.png" alt="石库门门楣修复后示意图"><figcaption>修复后：砖石与门洞层次渲染</figcaption></figure>
      </div>`
  },
  {
    kicker: "12 / 补充修复",
    title: "会议桌陈设：把会议空间变得可感",
    body: "这一组围绕会议桌、木椅、茶杯、笔记本和油灯等室内陈设展开。修复前强调资料感；修复后通过木质桌面、器物明暗、窗边光线和室内色调，帮助观众想象秘密会议的空间尺度与现场氛围。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/meeting-table-before.png" alt="会议桌陈设修复前示意图"><figcaption>修复前：灰度室内资料感</figcaption></figure>
        <figure><img src="assets/archive/meeting-table-restored.png" alt="会议桌陈设修复后示意图"><figcaption>修复后：木质、器物与光线渲染</figcaption></figure>
      </div>`
  },
  {
    kicker: "13 / 补充修复",
    title: "红船船舱：从轮廓辨认到木构细节",
    body: "这一组展示红船船舱与木质船体的细节。修复前保留黑白轮廓，修复后依据船板纹理、窗框结构、木材深浅和水面反光进行渲染，让观众看到“红船”作为具体空间载体的细节。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/boat-cabin-before.png" alt="红船船舱修复前示意图"><figcaption>修复前：船舱轮廓与旧照片灰度</figcaption></figure>
        <figure><img src="assets/archive/boat-cabin-restored.png" alt="红船船舱修复后示意图"><figcaption>修复后：木构、窗框与船体渲染</figcaption></figure>
      </div>`
  },
  {
    kicker: "14 / 补充修复",
    title: "湖上画舫：把转移完成的空间关系讲清楚",
    body: "这一组把湖面、岸线、树影和画舫放在同一画面中。修复前强调资料图的年代感，修复后通过水面明暗、船体结构和岸线植被的色彩层次，帮助观众理解南湖场景不是背景，而是会议继续完成的空间条件。",
    visual: `
      <div class="compare">
        <figure><img src="assets/archive/lake-boat-before.png" alt="湖上画舫修复前示意图"><figcaption>修复前：灰度湖面与船体关系</figcaption></figure>
        <figure><img src="assets/archive/lake-boat-restored.png" alt="湖上画舫修复后示意图"><figcaption>修复后：湖面、岸线与画舫渲染</figcaption></figure>
      </div>`
  },
  {
    kicker: "15 / 互动检测",
    title: "选择题一：一大会址为什么重要",
    body: "这一题检查观众是否理解上海会址的意义。它不是单纯的建筑外观展示，而是组织创建、秘密会议和早期革命活动相互连接的历史现场。",
    visual: `
      <div class="quiz-panel">
        <h3>一大会址在作品中最主要的作用是什么？</h3>
        <div class="quiz-options">
          <button data-ok="true">呈现组织创建从秘密会议开始的真实空间</button>
          <button data-ok="false">证明会议只是一次普通参观活动</button>
          <button data-ok="false">用建筑外观替代全部历史解释</button>
        </div>
        <p class="quiz-result"></p>
      </div>`
  },
  {
    kicker: "16 / 互动检测",
    title: "选择题二：上海到南湖的转移说明什么",
    body: "这一题检查观众是否理解地点变化背后的历史逻辑。会议转移不是叙事中断，而是说明目标、议程和组织纪律在干扰中继续推进。",
    visual: `
      <div class="quiz-panel">
        <h3>上海到南湖的转移最能说明什么？</h3>
        <div class="quiz-options">
          <button data-ok="false">会议主题发生了根本改变</button>
          <button data-ok="true">会议目标没有被干扰打断，议程继续完成</button>
          <button data-ok="false">地点变化比会议成果更重要</button>
        </div>
        <p class="quiz-result"></p>
      </div>`
  },
  {
    kicker: "17 / 互动检测",
    title: "选择题三：AI 修复图应该怎样理解",
    body: "这一题检查观众是否理解图像修复的边界。AI 修复图不是原始彩色照片，也不能替代黑白史料；它的作用是依据纹理、明暗和材质线索帮助观众辨认画面。",
    visual: `
      <div class="quiz-panel">
        <h3>AI 修复图在本作品中应该怎样理解？</h3>
        <div class="quiz-options">
          <button data-ok="false">它就是原始彩色历史照片</button>
          <button data-ok="false">它可以替代黑白史料图</button>
          <button data-ok="true">它根据纹理、明暗和材质线索帮助观众辨认画面</button>
        </div>
        <p class="quiz-result"></p>
      </div>`
  },
  {
    kicker: "18 / 引用与边界",
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
    kicker: "19 / 作品总结",
    title: "让红色资源从“看过”走向“看懂”",
    body: "这版 H5 的核心不是把页面做得热闹，而是让观众沿着清晰路径理解：近代中国为什么需要新的政治组织，一大如何在上海召开并在南湖完成，红船精神为什么不是抽象口号，而是从具体历史行动中提炼出来的价值结构。",
    visual: `
      <div class="final-panel">
        <b>提交网址</b>
        <span>https://walala11.github.io/</span>
        <p>20 页 H5 翻页作品；包含史料图、修复前后对比、时间线、路线图、逻辑思维导图、四组补充修复图和三页互动选择题。</p>
      </div>`
  }
];

const deck = document.getElementById("deck");
const dots = document.getElementById("dots");
const pageNow = document.getElementById("pageNow");
const pageTotal = document.getElementById("pageTotal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const voiceBtn = document.getElementById("voiceBtn");
let current = 0;
let isSpeaking = false;

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
  if (isSpeaking) speakCurrentSlide();
}

function getSlideSpeechText() {
  const slide = slides[current];
  return `${slide.kicker}。${slide.title}。${slide.body}`;
}

function speakCurrentSlide() {
  if (!("speechSynthesis" in window)) {
    voiceBtn.textContent = "不支持语音";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(getSlideSpeechText());
  utterance.lang = "zh-CN";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  utterance.onend = () => {
    if (isSpeaking) voiceBtn.textContent = "语音播报";
    isSpeaking = false;
  };
  voiceBtn.textContent = "停止播报";
  window.speechSynthesis.speak(utterance);
}

renderSlides();
update();

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));
voiceBtn.addEventListener("click", () => {
  if (isSpeaking) {
    window.speechSynthesis?.cancel();
    isSpeaking = false;
    voiceBtn.textContent = "语音播报";
    return;
  }
  isSpeaking = true;
  speakCurrentSlide();
});
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
  const panel = option.closest(".quiz-panel");
  panel.querySelectorAll(".quiz-options button").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("correct", button.dataset.ok === "true");
    button.classList.toggle("wrong", button === option && button.dataset.ok !== "true");
  });
  const result = panel.querySelector(".quiz-result");
  result.textContent = option.dataset.ok === "true"
    ? "回答正确：这个选项抓住了页面要表达的历史逻辑。"
    : "再想一想：请回到本页文字，看它强调的是空间、转移、修复方法中的哪一层关系。";
});
