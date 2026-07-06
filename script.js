const details = [
  "这一阶段回答的是“为什么需要新的革命力量”：近代道路探索、思想启蒙和工人运动共同构成建党的历史前提。",
  "上海石库门见证的是“思想如何转化为组织”：早期地方组织在这里走向全国性政党整合。",
  "南湖转移回答的是“危机中如何继续”：会场变化没有中断会议进程，反而强化了信念与纪律。",
  "纲领、决议和中央局的产生，使中国共产党从思想传播和早期组织网络进入正式建党阶段。"
];

document.querySelectorAll(".time-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".time-card").forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    const index = Number(card.dataset.step);
    document.getElementById("timelineDetail").textContent = details[index];
  });
});

document.querySelectorAll(".node").forEach((node) => {
  node.addEventListener("click", () => {
    document.getElementById("infoPanel").textContent = node.dataset.info;
  });
});

document.querySelectorAll(".answers button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".answers button").forEach((item) => {
      item.classList.remove("correct", "wrong");
      item.disabled = true;
    });
    const ok = button.dataset.ok === "true";
    button.classList.add(ok ? "correct" : "wrong");
    const result = document.getElementById("quizResult");
    result.textContent = ok
      ? "回答正确：会场转移体现了革命者在复杂环境中的坚定与机敏。"
      : "再想一想：会议转移的关键原因是受到干扰，需要继续完成议程。";
  });
});

const narration = [
  "欢迎进入从石库门到南湖红船红色资源数字化展示。",
  "一九二一年七月，中国共产党第一次全国代表大会在上海召开。",
  "会议后期，代表们转移到嘉兴南湖，在红船上继续完成重要议程。",
  "本作品选取中共一大会址和南湖红船两个具体案例，并加入历史照片人工智能修复上色对比。",
  "从石库门到南湖红船，这段历史见证了中国共产党人的初心与信念。",
  "本网页通过时间线、知识图谱、语音导览和互动问答，展示红船精神的数字化传承。"
].join("");

document.getElementById("narrateBtn").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持语音朗读，可以换用 Edge 或 Chrome 打开。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(narration);
  utterance.lang = "zh-CN";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
});
