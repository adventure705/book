// --- js/contents.js ---
// Contains the content for each series to allow instant navigation without page reloads.

(function () {
   const getHtml = () => window.htm.bind(window.React.createElement);

   window.Contents = {};

   // ==========================================
   // SERIES 1: 제대로 이해하고 준비하기
   // ==========================================
   window.Contents.Series1 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
      <div className="animate-fadeIn pb-20">
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="red">공식 시리즈 01<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            유튜브 성공 전략:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-black">제대로 이해하고 준비하기</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-red-600 pl-6 lg:pl-8 space-y-4 max-w-4xl">
            <p>반지하의 절망적인 환경에서 <span className="red-underline font-black">월 1억 이상의 수익</span>을 달성하며 자유를 쟁취한 유튜버의 처절하고 실용적인 승리 지침서입니다.</p>
          </div>
        </div>

        <${Section} id="prologue">
          <${Card} className="relative overflow-hidden group p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[100px] -mr-20 -mt-20"></div>
            <div className="flex flex-col gap-10 relative z-10">
              <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-900/20 text-white font-black">
                    <${LucideIcon} name="Flame" size=${40} />
                 </div>
                 <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">프롤로그: 목숨을 건 성공의 시작</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
                <div className="space-y-6">
                  <h4 className="text-red-400 font-black text-xl lg:text-2xl tracking-tighter">저자의 성공 배경: 68시간의 투혼</h4>
                  <div className="text-zinc-100 leading-relaxed font-normal text-lg lg:text-xl">
                    반지하의 절망을 벗어나기 위해 **목숨을 걸고** 일했습니다. <span className="red-underline font-black">68시간의 최장 편집 시간</span>과 <span className="red-underline font-black">85개의 영상 제작</span> 끝에 2년 만에 진정한 자유를 얻었습니다.
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-8 bg-zinc-800/50 rounded-[2rem] text-center border border-zinc-700 shadow-xl glow-red">
                      <p className="text-4xl lg:text-5xl font-black text-red-500 tracking-tighter leading-none">68시간</p>
                      <p className="text-lg font-black text-zinc-200 uppercase mt-4 tracking-widest leading-none">최장 편집 시간</p>
                   </div>
                   <div className="p-8 bg-zinc-800/50 rounded-[2rem] text-center border border-zinc-700 shadow-xl">
                      <p className="text-4xl lg:text-5xl font-black text-red-500 tracking-tighter leading-none">85개</p>
                      <p className="text-lg font-black text-zinc-200 uppercase mt-4 tracking-widest leading-none">도전 영상 제작</p>
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-xl font-black text-white px-2">집필 이유와 책의 가치</h4>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   ${[
            { t: "희망의 공유", c: "상처 입은 이들과 '살아보길 잘했다는 느낌'을 나누고 싶은 진심." },
            { t: "독자의 변화", c: "독자들이 희망을 갖고 정독할 때 느껴질 변화에 대한 기대감." },
            { t: "투자 가치", c: "무료 정보가 아닌, 절박한 이들의 작은 투자로 기억될 진심 어린 책." }
         ].map((item, i) => html`
                     <div key=${i} className="p-8 bg-zinc-950/50 rounded-2xl border border-zinc-900 shadow-inner group hover:bg-zinc-900 transition-all">
                       <h5 className="font-black text-red-400 mb-4 text-xl group-hover:text-red-300 transition-colors">${item.t}</h5>
                       <p className="text-lg text-zinc-100 leading-relaxed font-normal">${item.c}</p>
                     </div>
                   `)}
                 </div>
              </div>
            </div>
          <//>
        <//>

        <${Section} id="ch1">
          <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-red-600/10"><${LucideIcon} name="Target" size=${36} className="text-red-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 유튜브 전쟁 승리 조건: 월 1억</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
             <div className="space-y-8">
                <div className="bg-zinc-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border-l-[12px] border-red-600 shadow-2xl">
                   <h3 className="text-2xl lg:text-3xl font-black text-white mb-10 tracking-tight">명확한 승리 기준 설정</h3>
                   <div className="space-y-6">
                      <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-lg glow-red">
                         <p className="text-lg font-black text-zinc-200 tracking-[0.3em] uppercase mb-4">절대 목표 (Absolute Goal)</p>
                         <p className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">월 순수익 <span className="text-red-500">1억 원</span></p>
                      </div>
                      <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
                         <p className="text-lg font-black text-zinc-200 tracking-[0.3em] uppercase mb-4">최소 승리 조건 (Minimum Victory)</p>
                         <p className="text-2xl lg:text-4xl font-black text-white tracking-tight leading-none">연 <span className="text-red-400">3억 이상의 소득</span> (상위 10%)</p>
                      </div>
                   </div>
                      <p className="mt-8 text-zinc-100 text-lg lg:text-xl font-normal leading-relaxed">
                        유튜브는 수명이 짧은 직업입니다. 엄청난 노동량과 불확실성을 감내하려면 이 정도의 목표는 필수적입니다.
                      </p>
                </div>
             </div>

             <div className="bg-zinc-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border border-zinc-800 flex flex-col justify-center shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-10 tracking-tight italic">결코 흔들리지 않는 숫자의 기록</h3>
                <div className="space-y-10 lg:space-y-12">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1.5rem] bg-red-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-red-600/30 text-2xl">1</div>
                      <div className="text-white font-normal text-xl lg:text-2xl leading-snug">
                         본인의 승리 기준과 이유를 <span className="red-underline font-black">구체적인 숫자</span>로 명기하십시오.
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[1.5rem] bg-red-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-red-600/30 text-2xl">2</div>
                      <div className="text-white font-normal text-xl lg:text-2xl leading-snug">
                         최후 방어선을 구축하십시오. <br/>
                         예) <span className="text-white bg-red-500/20 px-4 py-1.5 rounded-xl font-black border border-red-500/30">한 달마다 영상 30개씩 6달 도전 후 포기</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        <//>

        <${Section} id="ch2">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl"><${LucideIcon} name="Map" size=${36} className="text-orange-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 거시적 방향과 처절한 배경</h2>
          </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <${Card} className="p-10 lg:p-12 space-y-8 bg-zinc-900/50">
                 <h3 className="text-2xl font-black text-white">전쟁터의 특징과 시나리오 예측</h3>
                 <div className="space-y-6">
                    <p className="text-lg lg:text-xl text-white leading-relaxed font-normal">
                       기존의 피 터지는 전쟁터에 참전하는 것임을 이해하십시오. 전투 시나리오가 예측 가능하다면 대부분 끝까지 싸울 수 있습니다.
                    </p>
                    <div className="bg-zinc-950 p-6 rounded-2xl border border-white/10 text-zinc-200 text-lg leading-relaxed shadow-inner">
                       <span className="text-orange-500 font-bold block mb-2 tracking-tight">🔎 실전 사례:</span>
                       산에서만 훈련한 특수부대가 평지 전면전이나 <span className="text-white font-bold">드론전이 필요한 우크라이나 전쟁터</span>에서는 무용지물인 것처럼, 내 전쟁터에 대한 올바른 이해와 체계적인 준비가 승리의 절반입니다.
                    </div>
                 </div>
                 <div className="bg-zinc-950 p-6 rounded-2xl border border-white/5 flex gap-4 items-center">
                    <div className="p-3 bg-orange-500/20 rounded-xl"><${LucideIcon} name="Info" size=${24} className="text-orange-500" /></div>
                    <p className="text-lg text-zinc-100">"끝을 알 수 없는 뜀박질이 시작되는 순간 인간은 낙오합니다."</p>
                 </div>
              <//>
              <${Card} className="p-10 lg:p-12 space-y-8 border-red-900/30 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5"><${LucideIcon} name="Heart" size=${100} /></div>
                 <h3 className="text-2xl font-black text-white">가족에게 버려진 후의 선택</h3>
                 <div className="text-lg text-white leading-relaxed font-normal space-y-4">
                    <p>아버지의 외도, <span className="text-white font-bold">어머니의 자살</span>, 새어머니와의 동거, 그리고 직계 가족에게 당한 수억원대의 사기. 차가운 반지하에 홀로 남겨진 절망.</p>
                    <div className="p-6 bg-zinc-950/50 rounded-xl border border-white/5 text-zinc-100">
                      "낙오할 것인가, 이겨낼 것인가의 갈림길에서 저는 분노를 오기로 바꾸어 현재의 자유를 실현했습니다."
                    </div>
                 </div>
              <//>
           </div>
        <//>

        <${Section} id="ch3">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl"><${LucideIcon} name="BarChart3" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 본질: 조회수인가 광고업인가</h2>
          </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-zinc-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border border-zinc-800 space-y-8 shadow-2xl relative overflow-hidden">
                 <h3 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-6">
                    <${LucideIcon} name="AlertCircle" size=${28} className="text-red-500" /> 조회수 수익 모델의 명확한 한계
                 </h3>
                 <div className="space-y-8">
                    <div className="flex justify-between items-end">
                       <span className="text-zinc-200 font-normal text-xl">월 1억 달성 필요 조회수</span>
                       <span className="text-4xl lg:text-5xl font-black text-red-500 tracking-tighter">최대 5천만 뷰</span>
                    </div>
                    <div className="progress-bar-container">
                       <div className="progress-bar-fill w-[95%]"></div>
                    </div>
                    <ul className="text-lg lg:text-xl text-white space-y-6 pt-4 font-normal">
                       <li className="flex gap-6">
                          <span className="text-red-500 font-black mt-1">•</span> 
                          <div className="leading-tight">1일 1업로드 시 영상당 <span className="red-underline font-black">66만~166만 뷰</span> 고정 필수</div>
                       </li>
                       <li className="flex gap-6">
                          <span className="text-red-500 font-black mt-1">•</span> 
                          <div className="leading-tight">체력의 한계와 자유가 없는 <span className="text-red-400 font-black underline underline-offset-4 font-bold">창살 없는 감옥 모델</span></div>
                       </li>
                    </ul>
                 </div>
              </div>

              <${Card} className="bg-gradient-to-br from-blue-900/40 to-zinc-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border-2 border-blue-900/50 space-y-8 shadow-2xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10"><${LucideIcon} name="Trophy" size=${120} className="text-yellow-500" /></div>
                 <h3 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-4 relative z-10">
                    <${LucideIcon} name="Trophy" size=${28} className="text-yellow-500" /> 광고업 모델로의 전환 (WINNER)
                 </h3>
                 <div className="text-white font-normal text-xl lg:text-2xl relative z-10 tracking-tight leading-relaxed">
                    단순 조회수가 아닌 <span className="blue-underline font-black">"광고주가 매달리고 싶은 채널"</span>에 집중하십시오. 
                    핵심은 스스로를 <Highlight color="blue">광고 회사 대표<//>로 인식하는 것입니다.
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="bg-zinc-950/80 p-8 rounded-2xl border border-zinc-800 text-center shadow-xl glow-blue">
                       <p className="text-2xl lg:text-3xl xl:text-4xl font-black text-blue-400 tracking-tighter leading-none">$4,400~10,000</p>
                       <p className="text-lg font-black text-zinc-200 uppercase mt-4 tracking-widest leading-none">영상 1개당 광고 단가</p>
                    </div>
                    <div className="bg-zinc-950/80 p-8 rounded-2xl border border-zinc-800 text-center shadow-xl">
                       <p className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-none">광고 대행사</p>
                       <p className="text-lg font-black text-zinc-200 uppercase mt-4 tracking-widest leading-none italic">대표의 마인드 (President Mindset)</p>
                    </div>
                 </div>
              <//>
           </div>
        <//>

        <${Section} id="ch4-habits">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="Zap" size=${36} className="text-purple-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter leading-none">4. 백만뷰를 부르는 8가지 기본 습관</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${[
            { i: "01", t: "하루 10개 롱폼 시청", d: "클릭한 이유(썸넬, 문구 등)를 즉시 수기로 기록 보관" },
            { i: "02", t: "이탈 이유 분석", d: "지루함, 과장 표현 등 시청을 멈춘 이유를 꼼꼼히 기록" },
            { i: "03", t: "날짜/인기/최신 탐색", d: "주당 1회 시장의 모든 채널을 분석하며 트렌드 파악" },
            { i: "04", t: "롤모델 광고주 확보", d: "Playboard.co 필터 등을 활용해 광고주 풀을 직접 리스트업" },
            { i: "05", t: "제목/썸네일 암기", d: "시장에 통하는 감각을 암기를 통해 완전히 체득" },
            { i: "06", t: "PocketTube 그룹화", d: "구독 채널을 카테고리별로 묶어 최신 동향을 상시 체크" },
            { i: "07", t: "디지털 메모 시스템", d: "Upnote나 스마트워치 음성 녹음으로 아이디어 상시 보관" },
            { i: "08", t: "재미의 절대 기준", d: "스스로 끝까지 볼 가치가 없는 영상은 절대 업로드 금지" }
         ].map((habit, idx) => html`
              <div key=${idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-purple-500/30 hover:glow-purple transition-all group">
                <span className="text-purple-500 font-black text-2xl mb-4 block group-hover:scale-110 transition-all font-bold">HABIT ${habit.i}</span>
                <h4 className="text-xl lg:text-2xl font-black text-white mb-3">${habit.t}</h4>
                <p className="text-lg text-zinc-100 leading-snug font-medium">${habit.d}</p>
              </div>
            `)}
          </div>
        <//>

        <${Section} id="ch5-failure">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl"><${LucideIcon} name="Skull" size=${36} className="text-red-600" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 실패하는 대표 리스크 관리</h2>
          </div>
          <div className="space-y-4">
            ${[
            { t: "번아웃과 소재 고갈", c: "시작부터 소재가 마르지 않는 분야를 선택하십시오. 고난이도 편집 스타일은 지양하십시오." },
            { t: "예상치 못한 불운", c: "노딱, 저작권, 수익 창출 거부 등은 위기가 아니라 극복해야 할 시스템의 일부입니다." },
            { t: "전략 없는 꾸준함", c: "꾸준함은 분석과 성장을 전제로 합니다. 허공에 쏘는 총질은 기도가 아닌 비극입니다." },
            { t: "막막한 성장 속도", c: "하꼬 채널에 '주제 일관성'은 사치입니다. 수익이 안 난다면 과감히 인기 주제로 갈아타거나 철저히 카피하여 우선 생존하십시오." },
            { t: "악플에 대한 소모", c: "댓글의 수는 노출과 무관합니다. '모두 보류' 기능을 사용하여 멘탈을 보호하십시오." }
         ].map((item, i) => html`
              <${Card} key=${i} className="flex gap-6 items-center border-zinc-800 p-8 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-red-500 font-black text-xl group-hover:bg-red-600 group-hover:text-white transition-all font-bold">${i + 1}</div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-xl lg:text-2xl font-black text-white">${item.t}</h4>
                  <p className="text-lg text-zinc-100 font-normal leading-relaxed">${item.c}</p>
                </div>
              <//>
            `)}
          </div>
        <//>

        <${Section} id="ch6-80strategy">
           <div className="flex items-center gap-4 mb-20">
            <span className="p-3 bg-zinc-800 rounded-xl"><${LucideIcon} name="Zap" size=${36} className="text-yellow-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter leading-none">6. 성공 우선순위와 80% 전략</h2>
          </div>
           
           <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-8 lg:p-10 rounded-[2.5rem] border border-zinc-800 space-y-6">
                 <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Star" size=${28} className="text-yellow-400" /> 5대 인기 주제</h4>
                 <ul className="space-y-4">
                    ${["시간 때우기 (여행, 코미디, 영화)", "실시간 트래픽 (연예, 정치, 스포츠)", "지적 호기심 (역사, 미스터리)", "유용한 정보 (재테크, 건강, 교육)", "여성 타겟 VLOG"].map((item) => html`
                       <li className="flex items-center gap-3 text-lg lg:text-xl text-zinc-100 font-normal">
                          <${LucideIcon} name="Check" size=${20} className="text-yellow-500" /> ${item}
                       </li>
                    `)}
                 </ul>
              </div>
              <div className="bg-zinc-900/50 p-8 lg:p-10 rounded-[2.5rem] border border-red-900/30 relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-6 opacity-10"><${LucideIcon} name="AlertTriangle" size=${100} className="text-red-500" /></div>
                 <h4 className="text-2xl font-black text-red-500 mb-4 flex items-center gap-3"><${LucideIcon} name="AlertTriangle" size=${28} /> AI 쇼츠 경고</h4>
                 <p className="text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                    AI 쇼츠는 채널 수명이 짧고 광고 단가가 매우 낮습니다. 꾸준히 큰돈을 벌 목적이라면 <span className="text-white font-bold underline">직접 기획한 롱폼</span>이 정답입니다.
                 </p>
              </div>
           </div>
           
           <div className="flex flex-col items-center py-12">
              <div className="w-full max-w-4xl bg-zinc-900 p-8 lg:p-16 rounded-[4rem] lg:rounded-[6rem] border-2 border-zinc-800 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden relative group">
                 <div className="flex flex-col gap-10 relative z-10">
                    <div className="text-center transform hover:scale-[1.03] transition-all duration-500">
                       <div className="bg-gradient-to-r from-red-600 to-red-800 p-10 rounded-[3rem] shadow-2xl glow-red">
                          <p className="text-lg lg:text-xl font-black text-red-100 uppercase tracking-[0.6em] mb-4">우선순위 #1</p>
                          <h3 className="text-5xl lg:text-8xl font-black text-white tracking-tighter italic leading-none">주제 (소재)</h3>
                          <div className="mt-8">
                             <div className="text-red-900 bg-white px-8 py-3 rounded-full text-xl font-black inline-block shadow-2xl">가장 압도적인 파괴력</div>
                          </div>
                       </div>
                    </div>

                    <div className="flex justify-center"><${LucideIcon} name="ChevronDown" size=${40} className="text-zinc-700 animate-bounce-subtle" /></div>
                    
                    <div className="text-center transform hover:scale-[1.03] transition-all duration-500">
                       <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-[3rem] shadow-2xl border-4 border-blue-400/20">
                          <p className="text-lg lg:text-xl font-black text-blue-100 uppercase tracking-[0.6em] mb-4">우선순위 #2: 에너지의 80% 투자</p>
                          <h3 className="text-5xl lg:text-8xl font-black text-white tracking-tighter italic leading-none">제목 + 썸넬 + 미리보기</h3>
                          <div className="text-blue-100 mt-8 text-2xl lg:text-3xl font-black italic"><span className="blue-underline">클릭률 15% 이상</span>의 승부처</div>
                       </div>
                    </div>

                    <div className="flex justify-center"><${LucideIcon} name="ChevronDown" size=${32} className="text-zinc-800" /></div>
                    
                    <div className="text-center transform hover:scale-[1.03] transition-all duration-500 opacity-90">
                       <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 p-8 rounded-[2rem] shadow-2xl border border-zinc-600">
                          <p className="text-lg lg:text-xl font-black text-zinc-200 uppercase tracking-[0.6em] mb-3">우선순위 #3</p>
                          <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter italic leading-none">영상 내용 (시청 지속)</h3>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="mt-16 w-full max-w-4xl p-12 bg-zinc-950/80 rounded-[3rem] border-2 border-zinc-800 text-center space-y-8">
                 <h4 className="text-3xl lg:text-4xl font-black text-white underline underline-offset-8 decoration-blue-500">시청 지속 시간 극대화 전략</h4>
                 <div className="text-xl lg:text-2xl text-zinc-100 leading-relaxed font-normal px-6">
                    <p>핵심 주인공을 초반에 오픈하지 마십시오. 초반 30초는 **흥미로운 바람잡이** 역할이며, 핵심은 반드시 영상의 후반부에 배치하여 체류 시간을 확보해야 합니다.</p>
                 </div>
              </div>
           </div>
        <//>

        <${Section} id="ch7-algorithm">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-orange-600/10"><${LucideIcon} name="Activity" size=${36} className="text-orange-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">7. 알고리즘 특징과 대응 시나리오</h2>
          </div>
          
           <div className="bg-zinc-900 p-10 lg:p-12 rounded-[3rem] border border-zinc-800 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-2xl">
              <div className="space-y-6">
                 <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="TrendingUp" size=${28} className="text-orange-400" /> 이상적인 성장 (Best)</h4>
                 <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                    조회수가 <span className="text-white font-bold">점진적으로 증가</span>하는 것이 가장 좋습니다. 전성기가 1년 이상 지속되며, 하락세도 완만하여 대비할 시간을 줍니다.
                 </p>
              </div>
              <div className="space-y-6 pt-6 lg:pt-0 lg:border-l border-zinc-800 lg:pl-10">
                 <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="TrendingDown" size=${28} className="text-red-400" /> 초반 대박의 함정 (Worst)</h4>
                 <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                    초반에 운 좋게 터진 채널은 후속작의 부진을 견디지 못하고 포기합니다. <span className="text-red-400 font-bold">도파민 중독</span>을 경계하십시오.
                 </p>
              </div>
           </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <${Card} className="p-10 border-orange-900/20 bg-orange-900/10">
                <h4 className="text-2xl font-black text-white mb-6">수익 창출 후 노출 저하</h4>
                <p className="text-xl text-zinc-100 font-normal leading-relaxed">
                   수익 창출 후 알고리즘은 채널을 더 까다롭게 검증합니다. 최소 1~2달은 기존 스타일을 밀고 가며 신뢰를 다시 쌓아야 합니다.
                </p>
             <//>
             <${Card} className="p-10 border-red-900/20 bg-red-900/10">
                <h4 className="text-2xl font-black text-white mb-6">진짜 노출 장벽 대응</h4>
                <div className="text-xl text-zinc-100 font-normal leading-relaxed space-y-4">
                   <p>1. 유튜브 파트너스 직접 문의 (상담 직원)</p>
                   <p>2. 6개월~1년 장기 관점으로 주제 변경 시도</p>
                   <p>3. 새 채널 육성 (교토삼굴 전략)</p>
                </div>
             <//>
          </div>
        <//>

        <${Section} id="ch8-gear">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-500/10"><${LucideIcon} name="Monitor" size=${36} className="text-emerald-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">8. 생산성을 위한 장비와 기술</h2>
          </div>
          <${Card} className="p-10 lg:p-14 space-y-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-black text-white border-b border-zinc-800 pb-6 uppercase tracking-tighter flex items-center gap-3">
                     <${LucideIcon} name="Camera" size=${24} className="text-emerald-400" /> 촬영 장비 (Shooting Gear)
                   </h4>
                   <ul className="text-lg lg:text-xl text-zinc-100 space-y-6 font-normal">
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>메인 카메라</span> <span className="text-white font-black">SONY A6400</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>액션캠 (4K)</span> <span className="text-white font-black">Osmo Action 5 / Insta GO 3S</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>모바일 촬영</span> <span className="text-white font-black">Galaxy Z Flip 6</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>현장용 마이크</span> <span className="text-white font-black">DJI Mic Mini</span></li>
                   </ul>
                </div>
                <div className="space-y-8">
                   <h4 className="text-2xl font-black text-white border-b border-zinc-800 pb-6 uppercase tracking-tighter flex items-center gap-3">
                     <${LucideIcon} name="Cpu" size=${24} className="text-emerald-400" /> 편집 시스템 (Editing System)
                   </h4>
                   <ul className="text-lg lg:text-xl text-zinc-100 space-y-6 font-normal">
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>편집용 노트북</span> <span className="text-white font-black">Zenbook Duo 2024</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>데스크탑 (FHD)</span> <span className="text-white font-black">RTX 3060 / 32GB RAM</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>편집 보조기</span> <span className="text-emerald-400 font-bold italic">REV-O-MATE</span></li>
                      <li className="flex justify-between border-b border-zinc-800 pb-3"><span>업무 자동화</span> <span className="text-white font-black">PocketTube / Upnote</span></li>
                   </ul>
                </div>
             </div>
             <div className="p-8 bg-zinc-950 rounded-3xl border-2 border-emerald-500/20 text-zinc-100 text-xl leading-relaxed text-center font-bold italic shadow-lg glow-emerald">
               "기존 작업을 더 빠르고 쉽게 해줄 기술 습득이 바로 '진짜 꾸준함'입니다."
             </div>
          <//>
        <//>

        <${Section} id="ch9-advice">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-500/10"><${LucideIcon} name="Lightbulb" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">9. 실전 형님 조언 (Pro Tips)</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
             <${Card} className="p-10 bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <div className="space-y-6">
                   <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Film" size=${28} className="text-blue-400" /> 롱폼 vs 쇼츠</h4>
                   <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                      광고 회사 관점에서 무조건 <span className="text-white font-bold">롱폼</span>이 메인입니다. 쇼츠는 <span className="text-blue-400 font-bold">정찰병 역할</span>(새 주제 테스트, 보너스 수익)로만 활용하십시오.
                   </p>
                </div>
             <//>
             <${Card} className="p-10 bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <div className="space-y-6">
                   <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Clock" size=${28} className="text-blue-400" /> 8분의 법칙</h4>
                   <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                      수익 창출 후에는 <span className="text-white font-bold">8분 이상</span> 영상이 미드롤 광고로 인해 압도적으로 유리합니다. 단, 초보는 5분 내외로 반응부터 확인하십시오.
                   </p>
                </div>
             <//>
             <${Card} className="p-10 bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <div className="space-y-6">
                   <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Globe" size=${28} className="text-purple-400" /> 주제 찾기 끝판왕</h4>
                   <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                      Playboard 유료 결제로 랭킹을 확인하고, 한국을 넘어 <span className="text-purple-400 font-bold">외국 채널 동향</span>까지 체크하면 거대한 기회가 보입니다.
                   </p>
                </div>
             <//>
             <${Card} className="p-10 bg-zinc-900 border-zinc-800 flex flex-col justify-between">
                <div className="space-y-6">
                   <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Briefcase" size=${28} className="text-green-400" /> 영업의 기술</h4>
                   <p className="text-lg lg:text-xl text-zinc-100 font-normal leading-relaxed">
                      구독자가 적어도 <span className="text-white font-black">네이버 스마트스토어 판매자</span>에게 직접 제안서를 보내십시오. 마케팅 감각을 익히는 최고의 훈련입니다.
                   </p>
                </div>
             <//>
          </div>
          <div className="mt-8 p-10 bg-zinc-950/80 rounded-[3rem] border border-zinc-800 shadow-2xl">
             <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3"><${LucideIcon} name="FileText" size=${28} className="text-zinc-400" /> 습관 5번 정리 포맷</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg lg:text-xl font-normal text-zinc-200">
                <div className="bg-zinc-900 p-6 rounded-2xl">1. 인기 콘텐츠 유형</div>
                <div className="bg-zinc-900 p-6 rounded-2xl">2. 원본 제목/썸네일 문구</div>
                <div className="bg-zinc-900 p-6 rounded-2xl">3. 후킹 키워드/문장</div>
                <div className="bg-zinc-900 p-6 rounded-2xl">4. 결과 궁금증/감정 요소</div>
                <div className="bg-zinc-900 p-6 rounded-2xl">5. 시각적 요소 분석</div>
                <div className="bg-zinc-800 p-6 rounded-2xl text-white font-bold border border-blue-500/30">6. 내 채널 응용 아이디어</div>
             </div>
          </div>
        <//>

        <${Section} id="ch10">
          <div className="bg-gradient-to-b from-zinc-900 to-black p-12 lg:p-24 rounded-[4rem] lg:rounded-[8rem] border-2 border-zinc-800 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-600/10 blur-[200px] -mr-[30%] -mt-[30%] pointer-events-none"></div>
            <div className="relative z-10">
               <h2 className="text-5xl lg:text-9xl font-black mb-16 text-white tracking-tighter italic leading-none uppercase opacity-30">전쟁 준비 완료</h2>
              <div className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto leading-[1.4] mb-20 font-normal tracking-tight">
                기초 체력과 전쟁 지형 파악을 마쳤습니다. <br className="hidden lg:block" />
                <div className="text-red-500 text-5xl lg:text-8xl font-black italic tracking-tighter block mt-12 mb-12 underline underline-offset-8">절대로 포기하지 마십시오.</div>
                <div className="text-zinc-100 mt-20 block text-xl lg:text-4xl font-black tracking-widest leading-relaxed">
                  시리즈 2: <span className="text-white underline underline-offset-4 decoration-red-500">일단 살아남는 실전 기술</span>로 이어집니다.
                </div>
              </div>
              
              <button onClick=${() => onNextSeries('series2')} className="relative inline-block px-14 py-8 lg:px-24 lg:py-12 bg-red-600 hover:bg-red-500 text-white rounded-[3rem] lg:rounded-[5rem] font-black text-2xl lg:text-6xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_30px_100px_rgba(239,68,68,0.8)]">
                시리즈 2로 이동
              </button>
            </div>
          </div>
        <//>
      </div>
    `;
   };

   // ==========================================
   // SERIES 2: 실전 생존 (수익 창출 & 카피 기술)
   // ==========================================
   window.Contents.Series2 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
      <div className="animate-fadeIn pb-20">
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="blue">공식 시리즈 02<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            유튜브 실전 생존:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-black">일단 살아남는 기술</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-blue-600 pl-6 lg:pl-8 space-y-4 max-w-4xl opacity-100">
            <p>초보자 90%가 포기하는 <span className="blue-underline font-black">수익 창출 관문</span>을 가장 빠르고 영리하게 돌파하는 실전 전략을 공개합니다.</p>
          </div>
        </div>

        <${Section} id="prologue">
          <${Card} className="relative overflow-hidden group p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] -mr-20 -mt-20"></div>
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="shrink-0">
                 <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/20 text-white font-black">
                    <${LucideIcon} name="Heart" size=${48} />
                 </div>
              </div>
              <div className="flex-1 space-y-8 text-zinc-100 font-normal leading-loose text-lg lg:text-xl">
                <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">프롤로그: 집필 동기와 고통의 공유</h2>
                <div className="space-y-6">
                   <p>저자는 독자들과의 대화에서 느낀 온기가 자기혐오에서 자신을 구원했기에, 모든 노하우를 아낌없이 공유하기로 결심했습니다.</p>
                   <div className="bg-zinc-950/80 p-8 rounded-[2rem] border border-white/5 space-y-6 glow-blue relative group">
                     <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <${LucideIcon} name="Quote" size=${48} className="text-blue-500" />
                     </div>
                     <p className="text-zinc-100 italic text-lg lg:text-xl leading-relaxed">"아버지의 무책임한 방관과 사기로 인해 저는 깊은 증오와 자기혐오에 빠졌었습니다. 이 책은 제가 삶을 포기하지 않고 끝까지 맞섰던 과정을 담은 첫 기록입니다."</p>
                     <div className="flex items-center gap-4 text-blue-500">
                        <${LucideIcon} name="Quote" size=${24} />
                        <span className="text-base font-black uppercase tracking-[0.2em]">저자의 메시지</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          <//>
        <//>

        <${Section} id="monetization">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="CircleDollarSign" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 수익 창출 2단계 로드맵</h2>
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <${Card} className="bg-zinc-900/50 border-zinc-800 p-8 space-y-8">
                 <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center">
                       <${LucideIcon} name="Users" size=${32} className="text-zinc-200" />
                    </div>
                    <Badge color="zinc">1단계: 팬 수익<//>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-2xl font-black text-white">커뮤니티 활성화 (500명)</h4>
                    <p className="text-zinc-200 text-lg leading-relaxed font-normal">구독자 500명 + 업로드 3개 + 최근 1년 시청 3,000시간(or 쇼츠 300만). 멤버십, 슈퍼챗이 가능해지나 큰 수익은 아닙니다.</p>
                 </div>
              <//>
              <${Card} className="bg-blue-900/10 border-blue-500/20 p-8 space-y-8 glow-blue">
                 <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                       <${LucideIcon} name="TrendingUp" size=${32} className="text-white" />
                    </div>
                    <Badge color="blue">2단계: 진짜 승리<//>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-2xl font-black text-white">광고 수익 활성화 (1,000명)</h4>
                    <p className="text-zinc-100 text-lg leading-relaxed font-normal">구독자 1,000명 + 시청 4,000시간(or 쇼츠 1,000만). <span className="blue-underline font-black">이때부터 조회수가 돈으로 바뀝니다.</span> 반드시 이 단계가 목표여야 합니다.</p>
                 </div>
              <//>
           </div>
        <//>

        <${Section} id="setup">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl"><${LucideIcon} name="Settings" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 전략적 채널 세팅 가이드</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${[
            { t: "익명성 브랜딩", d: "채널명, 아트, 로고는 캔바/미리캔버스로 신속히 끝낼 것. 시청자는 정체성보다 알고리즘을 보고 유입됩니다." },
            { t: "USD 통화 설정", d: "실시간 환율 기반 수익 확인을 위해 화폐 단위를 미국 달러(USD)로 설정하십시오." },
            { t: "기능 자격 충족", d: "표준, 중급, 고급 기능을 즉시 활성화하여 채널의 모든 노출 제약을 푸십시오." },
            { t: "기본 정보 키워드", d: "키워드를 5개 미만으로 설정하여 알고리즘의 타겟 집중도를 극대화하십시오." }
         ].map((item, i) => html`
              <${Card} key=${i} className="bg-zinc-900 border-zinc-800 p-6 hover:border-blue-500/30 transition-all">
                <h4 className="text-xl font-black text-white mb-3 text-blue-400">단계 ${i + 1}</h4>
                <p className="text-lg font-black text-white mb-2">${item.t}</p>
                <p className="text-zinc-200 text-base leading-snug font-normal">${item.d}</p>
              <//>
            `)}
          </div>
          <div className="mt-6 bg-blue-900/10 p-8 rounded-3xl border border-blue-500/20 flex gap-6 items-center">
             <div className="p-3 bg-blue-600 rounded-xl"><${LucideIcon} name="ShieldAlert" size=${24} className="text-white" /></div>
             <p className="text-lg text-zinc-100 font-normal">무분별한 스팸을 막기 위해 커뮤니티 섹션에서 <span className="text-white font-bold underline underline-offset-4 decoration-blue-500">'링크 차단'</span>을 필수 활성화하십시오.</p>
          </div>
        <//>

        <${Section} id="4000hours">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="Clock" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 시청 시간 4,000시간 필승 공식</h2>
          </div>
          <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 space-y-12 shadow-2xl overflow-hidden relative">
             <div className="flex flex-col md:flex-row gap-10 items-center justify-between border-b border-zinc-800 pb-10">
                <div className="text-center space-y-4">
                   <p className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">4,000시간</p>
                   <p className="text-zinc-200 text-base font-black tracking-widest uppercase">목표 시간</p>
                </div>
                <${LucideIcon} name="MoveRight" size=${40} className="text-zinc-700 hidden md:block" />
                <div className="text-center space-y-4">
                   <p className="text-5xl lg:text-7xl font-black text-blue-500 tracking-tighter leading-none">120,000</p>
                   <p className="text-zinc-200 text-base font-black tracking-widest uppercase">필요 조회수</p>
                </div>
                <div className="p-8 bg-zinc-950 rounded-[2rem] border border-zinc-800 text-base text-zinc-200 leading-snug">
                   5분 영상 기준<br/> <span className="text-white font-bold">유지율 40% (2분)</span> 성취 시의 계산값입니다.
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <h4 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-3 italic">
                      <Highlight color="blue">전략 1<//> 핫키워드 선점 (트래픽 활용)
                   </h4>
                   <p className="text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                      실시간 트래픽이 높은 정치, 연예, 사건 주제를 본인 분야와 섞으십시오. 알고리즘은 핫키워드에 신규 채널 노출 기회를 몰아주어 검색 상단 차지가 쉽습니다.
                   </p>
                </div>
                <div className="space-y-6">
                   <h4 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-3 italic">
                      <Highlight color="blue">전략 2<//> 고전 인기 주제 재활용
                   </h4>
                   <p className="text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                      최소 50만 뷰 이상 터진 6개월 이상 된 주제를 선택하여 2025년 버전으로 제목과 썸네일을 업데이트하십시오. 시청자가 망각했을 즈음 다시 올리는 것이 가장 안전합니다.
                   </p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-800">
                <div className="space-y-6">
                   <h4 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-3 italic">
                      <Highlight color="zinc">중급자 전략<//> 최종 화면 유입
                   </h4>
                   <p className="text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                      이미 조회수가 터진 영상의 <span className="text-white font-bold">최종 화면(End Screen)</span>에 신규 채널 영상을 노출시키십시오. 가장 확실하고 강력한 시청 시간 확보 수단입니다.
                   </p>
                </div>
                <div className="space-y-6">
                   <h4 className="text-2xl lg:text-3xl font-black text-white flex items-center gap-3 italic">
                      <Highlight color="zinc">기타 전략<//> 스트리밍 & 외부 유입
                   </h4>
                   <p className="text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                      <span className="text-white font-bold">24시간 라이브 스트리밍</span>은 시간을 획기적으로 채워줍니다. 카페, 인스타그램 등 외부 트래픽과 구글 애즈(유료)도 적극 활용하십시오.
                   </p>
                </div>
             </div>
          </div>
        <//>

        <${Section} id="subscribers">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="UserPlus" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 구독자 1,000명 확보 전략</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <${Card} className="p-10 border-zinc-800 space-y-6">
                <h4 className="text-2xl font-black text-white border-b border-zinc-800 pb-4">구독 인증 이벤트 (강추)</h4>
                <p className="text-lg text-zinc-200 font-normal leading-relaxed">
                   구독 시 실무 템플릿이나 유료급 소책자를 제공하십시오. 인스타그램의 <span className="text-blue-400 font-bold underline">Manychat</span> 기능을 함께 사용하면 파급력이 배가됩니다.
                </p>
             <//>
             <${Card} className="p-10 border-zinc-800 space-y-6">
                <h4 className="text-2xl font-black text-white border-b border-zinc-800 pb-4">베스트 댓글 선점 기술</h4>
                <p className="text-lg text-zinc-200 font-normal leading-relaxed">
                   조회수 높은 인기 영상에 시청자들이 공감할 만한 댓글을 선점하십시오. 채널 아이콘 노출만으로도 막대한 유입을 불러올 수 있습니다.
                </p>
             <//>
          </div>
        <//>

        <${Section} id="risks">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-red-600/10"><${LucideIcon} name="Ban" size=${36} className="text-red-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 수익 거절 4대 리스크</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             ${[
            { t: "재사용 콘텐츠", d: "독창적 해설 없는 단순 불펌형 영상" },
            { t: "AI 딥페이크", d: "권리 침해 소지가 큰 생성형 콘텐츠" },
            { t: "단순 슬라이드/TTS", d: "교육적 가치 없는 단순 낭독 영상" },
            { t: "부당 금전 행위", d: "도박, 사기 유도 및 커뮤니티 가이드 위반" }
         ].map((item, i) => html`
               <${Card} key=${i} className="p-8 border-red-900/20 bg-red-900/5 text-center">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4"><${LucideIcon} name="X" size=${24} className="text-red-500" /></div>
                  <h4 className="text-xl font-black text-white mb-3 underline decoration-red-500">${item.t}</h4>
                  <p className="text-zinc-200 text-base leading-snug font-normal">${item.d}</p>
               <//>
             `)}
          </div>
        <//>

        <${Section} id="copy-intro">
            <div className="flex items-center gap-4 mb-10">
               <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="Copy" size=${36} className="text-blue-500" /></span>
               <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">6. 창조 vs 카피의 영역</h2>
            </div>
            <${Card} className="p-10 lg:p-14 bg-zinc-900/80 border-zinc-800 space-y-10">
               <div className="space-y-6">
                  <h4 className="text-2xl font-black text-white">"재능이 없다면 훔쳐라"</h4>
                  <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                     저자는 독창적인 기획력으로 성공했지만, 평범한 재능을 가진 아내의 채널을 성공시키며 <span className="text-blue-400 font-bold">카피의 위력</span>을 깨달았습니다. 창조적 재능이 부족하다면, <span className="text-white font-black underline">검증된 성공 공식을 철저히 따르는 것</span>이 가장 빠르고 안전한 길입니다.
                  </p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                     <h5 className="text-xl font-black text-purple-400 mb-4 flex items-center gap-2"><${LucideIcon} name="Zap" size=${24} /> 창조형 유튜버</h5>
                     <ul className="space-y-3 text-zinc-200 text-base">
                        <li className="flex gap-2"><span>•</span> <span>독창적 소재의 선점 효과</span></li>
                        <li className="flex gap-2"><span>•</span> <span>영상 1개당 큰 수익 잠재력</span></li>
                        <li className="flex gap-2"><span className="text-red-400">•</span> <span>제작 시간이 오래 걸림 (완벽주의)</span></li>
                     </ul>
                  </div>
                  <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                     <h5 className="text-xl font-black text-blue-400 mb-4 flex items-center gap-2"><${LucideIcon} name="Copy" size=${24} /> 카피형 유튜버 (공장)</h5>
                     <ul className="space-y-3 text-zinc-200 text-base">
                        <li className="flex gap-2"><span>•</span> <span>생산량 극대화 (물량 공세)</span></li>
                        <li className="flex gap-2"><span>•</span> <span>검증된 주제로 실패 확률 최소화</span></li>
                        <li className="flex gap-2"><span className="text-red-400">•</span> <span>개성 부족으로 광고 수주 어려움</span></li>
                     </ul>
                  </div>
               </div>
            <//>
        <//>

        <${Section} id="copy-master">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="GitBranch" size=${36} className="text-blue-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">7. 카피의 고도화: A-3 변형 공식</h2>
          </div>
          <div className="bg-zinc-900 p-10 lg:p-16 rounded-[4rem] border border-zinc-800 space-y-16 shadow-2xl relative overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-10">
                   <h4 className="text-3xl font-black text-white leading-tight">지독한 카피의 3단계 조건</h4>
                   <ul className="text-lg lg:text-xl text-zinc-100 space-y-8 font-normal">
                      <li className="flex gap-6"><${LucideIcon} name="CheckSquare" className="text-blue-500 shrink-0" /> <span className="text-zinc-200">3개 이상의 채널에서 누계 50만 뷰 이상 검증된 주제</span></li>
                      <li className="flex gap-6"><${LucideIcon} name="CheckSquare" className="text-blue-500 shrink-0" /> <span className="text-zinc-200">업로드 된 지 6개월이 지나 시청자가 망각한 소재</span></li>
                      <li className="flex gap-6"><${LucideIcon} name="CheckSquare" className="text-blue-500 shrink-0" /> <span className="text-white font-bold">A-3 변형:</span> 기존 주제 + 새로운 제목/썸네일 결합</li>
                   </ul>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="p-10 bg-blue-900/20 rounded-[3rem] border-2 border-blue-500 border-dashed text-center glow-blue flex flex-col justify-center gap-6">
                     <h5 className="text-2xl font-black text-white">아이디어 발굴 도구</h5>
                     <p className="text-xl text-zinc-100">
                        <span className="text-blue-400 font-bold underline">Miro (미로)</span>의 브레인라이팅을 활용하여 무한한 변형 아이디어를 얻으십시오.
                     </p>
                  </div>
                   <Badge color="blue">효율성 마스터<//>
                   <p className="text-xl text-zinc-100 font-normal leading-relaxed">
                      "기획이 막힐 때는 <span className="text-white font-black underline underline-offset-4">미로(Miro)</span> 사이트에서 마인드맵과 랜덤 워드 템플릿을 활용하십시오. 뇌가 전혀 다른 새로운 연결고리를 찾게 됩니다."
                   </p>
                </div>
             </div>
          </div>
        <//>

        <${Section} id="copy-practical">
           <div className="flex items-center gap-4 mb-10">
            <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="Edit3" size=${36} className="text-purple-500" /></span>
            <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">8. 제목/썸네일 & 영상 카피 실전 기술</h2>
          </div>
          <div className="space-y-12">
             <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 shadow-2xl">
                <h4 className="text-2xl lg:text-3xl font-black text-white mb-8 flex items-center gap-3">
                   <${LucideIcon} name="Image" size=${32} className="text-purple-400" /> 제목 & 썸네일 카피 (글솜씨가 없다면)
                </h4>
                <div className="space-y-8">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <${Card} className="p-8 bg-zinc-950/50 border-purple-500/20">
                         <span className="text-purple-400 font-bold block mb-2 text-lg">기법 1: 유사어/동의어 바꿔치기</span>
                         <p className="text-zinc-200">
                            '지금' → '현재', '독' → '덫' 처럼 단어만 교체하십시오. 문장 전체를 바꾸려 하지 말고, <span className="text-white font-bold">이미 검증된 키워드</span>는 유지해야 합니다.
                         </p>
                      <//>
                      <${Card} className="p-8 bg-zinc-950/50 border-purple-500/20">
                         <span className="text-purple-400 font-bold block mb-2 text-lg">기법 2: AI 도구 활용</span>
                         <p className="text-zinc-200">
                            챗GPT, 클로드 등을 이용해 "이 제목의 클릭률을 높일 수 있는 자극적인 변형 제목 5개를 추천해줘"라고 요청하십시오.
                         </p>
                      <//>
                   </div>
                   <${Card} className="p-8 bg-zinc-950/50 border-purple-500/20">
                      <span className="text-purple-400 font-bold block mb-4 text-xl flex items-center gap-2">
                         <${LucideIcon} name="PenTool" size=${24} /> 기법 3: 카피 공식화 (빈칸 채우기)
                      </span>
                      <p className="text-zinc-100 text-lg leading-relaxed">
                         타겟 영상 제목의 <span className="text-white font-bold">핵심 명사</span>만 비워두고 공식으로 만드십시오. <br/>
                         예: "심심할 때 보는 <span className="text-white font-bold underline bg-purple-500/20 px-2 rounded">ㅇㅇ</span>의 정체" → "심심할 때 보는 <span className="text-white font-bold">유튜버</span>의 정체"
                      </p>
                   <//>
                   <div className="p-6 bg-purple-900/20 rounded-2xl border border-purple-500/30 text-zinc-100 text-lg">
                      <span className="text-purple-300 font-black mr-2">TIP:</span>
                      초보자는 '질문형'보다 <span className="text-white font-bold underline">직관적인 '서술형' 제목</span>이 클릭률 확보에 훨씬 유리합니다. 궁금증 유발은 고수의 영역입니다.
                   </div>
                </div>
             </div>

             <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 shadow-2xl">
                <h4 className="text-2xl lg:text-3xl font-black text-white mb-8 flex items-center gap-3">
                   <${LucideIcon} name="Video" size=${32} className="text-blue-400" /> 영상 & 대본 카피 (편집의 기술)
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                   <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 space-y-4">
                      <div className="text-blue-400 font-black text-xl">프리미어 프로</div>
                      <p className="text-zinc-200 text-lg leading-relaxed">
                         초보자가 롱폼 편집을 할 때 튜토리얼이 가장 많고 대체 불가능한 툴입니다. 독학보다 유료 강의로 속성 마스터하십시오.
                      </p>
                   </div>
                   <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 space-y-4">
                      <div className="text-blue-400 font-black text-xl">대본 필사</div>
                      <p className="text-zinc-200 text-lg leading-relaxed">
                         타겟 영상의 전체 대본을 직접 타이핑해보면, 눈으로 볼 때 몰랐던 <span className="text-zinc-200 font-bold">치밀한 구조와 흐름</span>이 보입니다.
                      </p>
                   </div>
                   <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 space-y-4">
                      <div className="text-blue-400 font-black text-xl">프롬프터</div>
                      <p className="text-zinc-200 text-lg leading-relaxed">
                         출연 촬영 시 횡설수설과 시선 처리를 막기 위해 프롬프터 앱이나 장비를 반드시 사용하십시오.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        <//>

        <${Section} id="outro">
          <div className="bg-gradient-to-b from-zinc-900 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-blue-600/10 transition-colors" />
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter italic opacity-30 leading-none uppercase">생존 완료</h2>
              <div className="space-y-8">
                 <p className="text-2xl lg:text-4xl text-white max-w-4xl mx-auto font-normal leading-relaxed tracking-tight">
                   이제 실전 생존 무기를 장착했습니다. <br/>
                   시리즈 3부터는 당신을 준베테랑으로 간주하고, <br className="hidden lg:block" />
                   <Highlight color="blue">수백만 뷰 인기 주제별 승리 기술<//>을 공개합니다.
                 </p>
                 <div className="text-blue-500 text-2xl lg:text-4xl font-black italic tracking-widest uppercase">공격 준비 되셨습니까?</div>
              </div>
              <button onClick=${() => onNextSeries('series3')} className="px-16 py-8 lg:px-24 lg:py-10 bg-blue-600 hover:bg-blue-500 text-white rounded-[3rem] font-black text-2xl lg:text-5xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_25px_80px_rgba(37,99,235,0.6)]">
                시리즈 3 시작하기
              </button>
            </div>
          </div>
        <//>
      </div>
    `;
   };

   // ==========================================
   // SERIES 3: 5대 인기 주제 & 마스터 노하우
   // ==========================================
   window.Contents.Series3 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="purple">공식 시리즈 03<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            지배적인 채널의 법칙:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-black">5대 인기 주제 & 필승 노하우</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-purple-600 pl-6 lg:pl-8 space-y-4 max-w-4xl opacity-100">
            <p>초보를 넘어 <span className="text-purple-400 font-black">수백만 뷰 정점</span>에 선 채널들의 공통된 기획 방식과 수익화 비밀을 공개합니다.</p>
          </div>
        </div>

        <${Section} id="intro">
           <${Card} className="relative overflow-hidden p-10 lg:p-14 border-purple-500/20">
               <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[100px] -mr-20 -mt-20"></div>
               <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl shadow-purple-900/30">
                     <${LucideIcon} name="Trophy" size=${40} className="text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">프롤로그: 마스터 모드</h2>
               </div>
               <p className="text-zinc-100 text-xl lg:text-2xl leading-relaxed font-normal mb-8 relative z-10">
                  시리즈 3은 생존을 넘어 시장을 <span className="text-purple-400 font-bold italic underline">지배하는 영역</span>에 대한 이야기입니다. <span className="text-white font-bold">핫키워드 활용법</span>과 <span className="text-white font-bold">스토리텔링</span>을 마스터하여 본인의 성향과 환경에 최적화된 무기를 선택하십시오.
               </p>
           <//>
        <//>

            <${Section} id="travel">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-4 bg-zinc-800 rounded-2xl shadow-xl shadow-blue-600/10"><${LucideIcon} name="Plane" size=${36} className="text-blue-400" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 시간 때우기 (여행/코미디/영화)</h2>
               </div>
               <div className="space-y-10 font-normal">

                  <${Card} className="p-10 bg-zinc-900 border-zinc-800">
                     <h4 className="font-black text-white text-2xl mb-6 flex items-center gap-3"><${LucideIcon} name="Smile" size=${28} className="text-blue-400" /> 코미디 분야의 냉정한 현실</h4>
                     <p className="text-lg text-zinc-200 leading-relaxed mb-6">
                        타고난 센스가 없다면 노력으로 극복하기 가장 어려운 분야입니다. 지인을 웃기는 것과 대중성은 다릅니다. 성공한 채널은 오버액션보다 <span className="text-white font-bold">담백함의 미</span>와 <span className="text-white font-bold">스토리 흐름</span>을 이끄는 능력이 탁월합니다.
                     </p>
                  <//>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="space-y-8 border-l-4 border-blue-500 p-10 bg-blue-900/5">
                        <h4 className="font-black text-white text-2xl">여행 유튜버를 위한 '빌런'과 '킬링' 소재</h4>
                        <ul className="space-y-6 text-zinc-100 text-lg">
                           <li className="flex gap-3"><span className="text-blue-500 font-black">•</span> <span><strong className="text-white">갈등과 위기:</strong> 소매치기 차단, 치안 불량 지역 생존기 (시청 지속 시간의 핵심)</span></li>
                           <li className="flex gap-3"><span className="text-blue-500 font-black">•</span> <span><strong className="text-white">관계성:</strong> 현지 여성과의 썸, 예측 불가한 인연, 집 초대</span></li>
                           <li className="flex gap-3"><span className="text-blue-500 font-black">•</span> <span><strong className="text-white">경제적 요소:</strong> 호화 크루즈 vs 최저가 노숙, 장기 여행 재력</span></li>
                           <li className="flex gap-3"><span className="text-blue-500 font-black">•</span> <span><strong className="text-white">반응 및 시각:</strong> 외국인의 한국 반응(국뽕), 압도적 썸네일/영상미</span></li>
                        </ul>
                     <//>
                     <${Card} className="space-y-8 border-l-4 border-purple-500 p-10 bg-purple-900/5">
                        <h4 className="font-black text-white text-2xl">할리우드 스토리텔링 3법칙</h4>
                        <p className="text-lg text-zinc-200 italic pb-2 border-b border-zinc-800">"여행기가 아닌, 한 인물의 성장 드라마를 만드십시오"</p>
                        <ul className="space-y-6 text-lg">
                           <li className="flex items-center gap-6"><span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl font-black shrink-0">1</span><span><strong className="text-white">목표:</strong> 주인공이 처한 절박한 상황과 목표 설정</span></li>
                           <li className="flex items-center gap-6"><span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl font-black shrink-0">2</span><span><strong className="text-white">장애물:</strong> 목표를 가로막는 갈등, 위기, 실패</span></li>
                           <li className="flex items-center gap-6"><span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl font-black shrink-0">3</span><span><strong className="text-white">클라이맥스:</strong> 역경 극복과 감동적인 보상</span></li>
                        </ul>
                     <//>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="p-10 bg-zinc-950 border-zinc-800">
                        <h4 className="font-black text-white text-xl mb-4 flex items-center gap-2"><${LucideIcon} name="Film" size=${24} className="text-red-400" /> 영화 리뷰 주의사항</h4>
                        <ul className="space-y-3 text-zinc-300 text-lg">
                           <li>• <span className="text-white font-bold">저작권 경고:</span> 단순 불펌은 공정 이용 불가. 경고 3회 시 <span className="text-red-500 font-bold">채널 삭제</span> 위험.</li>
                           <li>• <span className="text-white font-bold">안전한 방법:</span> 배급사에 직접 허락을 구해야 하나 진입 장벽 매우 높음.</li>
                        </ul>
                     <//>
                     <${Card} className="p-10 bg-zinc-950 border-zinc-800">
                        <h4 className="font-black text-white text-xl mb-4 flex items-center gap-2"><${LucideIcon} name="Video" size=${24} className="text-green-400" /> BJ 방송 장비</h4>
                        <ul className="space-y-3 text-zinc-300 text-lg">
                           <li>• <span className="text-white font-bold">카메라:</span> Sony A6400 이상</li>
                           <li>• <span className="text-white font-bold">캡쳐보드:</span> Elgato 4K Cam Link</li>
                           <li>• <span className="text-white font-bold">마이크:</span> Rode NT USB</li>
                           <li>• <span className="text-white font-bold">SW:</span> Prism Live Studio</li>
                        </ul>
                     <//>
                  </div>

                  <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-zinc-100 text-lg leading-relaxed shadow-lg flex items-start gap-4">
                     <${LucideIcon} name="AlertTriangle" size=${32} className="text-blue-500 shrink-0 mt-1" />
                     <div>
                        <span className="text-blue-400 font-bold text-xl block mb-2">수익화 현실:</span>
                        여행 분야는 제작비가 많이 들어 조회수 수익만으로는 <span className="text-zinc-400 line-through">적자</span>입니다. 유명 여행 유튜버처럼 <span className="text-white font-bold underline underline-offset-4 decoration-blue-500">기업 광고의 기술자</span>가 되어야 합니다. 장비는 액션캠 하나와 마이크면 충분합니다.
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="traffic">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-4 bg-zinc-800 rounded-2xl shadow-xl shadow-yellow-600/10"><${LucideIcon} name="Zap" size=${36} className="text-yellow-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 실시간 트래픽 (이슈/정치/스포츠)</h2>
               </div>
               <div className="space-y-10 font-normal">
                  <p className="text-zinc-100 text-xl leading-relaxed max-w-4xl">
                     재능이 없어도 <span className="text-yellow-500 font-black italic">성실한 시스템 (핫키워드)</span>만으로 제패 가능한 분야입니다. 시장의 축제가 열리는 키워드를 누구보다 빨리 선점하십시오.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="space-y-8">
                        <${Card} className="p-10 bg-zinc-900 border-zinc-800 space-y-8 h-full">
                           <h4 className="text-2xl font-black text-white flex items-center gap-4">
                              <${LucideIcon} name="Search" size=${32} className="text-yellow-500" /> 성공 채널의 4대 특징
                           </h4>
                           <ul className="space-y-8 text-lg text-zinc-100">
                              <li className="flex gap-4">
                                 <span className="text-yellow-500 font-black italic text-2xl">01</span>
                                 <div>
                                    <strong className="text-white block mb-1">이슈 창조 능력</strong>
                                    기자 출신(가로세로연구소 등)처럼 제보를 받아 논란을 직접 만듭니다.
                                 </div>
                              </li>
                              <li className="flex gap-4">
                                 <span className="text-yellow-500 font-black italic text-2xl">02</span>
                                 <div>
                                    <strong className="text-white block mb-1">제목/썸네일 어그로</strong>
                                    가짜와 진짜를 섞거나 MSG를 쳐서 클릭률을 폭발시킵니다. (재능 영역)
                                 </div>
                              </li>
                              <li className="flex gap-4">
                                 <span className="text-yellow-500 font-black italic text-2xl">03</span>
                                 <div>
                                    <strong className="text-white block mb-1">담백한 제목 + 간접 국뽕</strong>
                                    직접적 국뽕은 올드합니다. TTS(대본+자료)나 외국인 출연(영국남자 등)으로 <span className="text-yellow-400 font-bold">간접적 자부심</span>을 건드립니다.
                                 </div>
                              </li>
                              <li className="flex gap-4">
                                 <span className="text-yellow-500 font-black italic text-2xl">04</span>
                                 <div>
                                    <strong className="text-white block mb-1">흡입력 있는 요약</strong>
                                    사건을 깔끔하게 요약하고 후련한 의견을 제시합니다.
                                 </div>
                              </li>
                           </ul>
                        <//>
                     </div>

                     <div className="space-y-8">
                        <${Card} className="p-10 bg-yellow-900/10 border-yellow-500/20 rounded-[3rem] space-y-8 glow-yellow flex flex-col justify-center h-full">
                           <h4 className="text-2xl font-black text-white italic flex items-center gap-3">
                              <${LucideIcon} name="Tool" size=${28} /> 필수 도구 & 습관
                           </h4>
                           <div className="space-y-6 text-zinc-100 text-lg leading-relaxed">
                              <p>
                                 <span className="text-yellow-400 font-bold text-xl">1. Playboard:</span> 실시간 인기 순위 확인. (단, 숏폼/음악 제외하고 필터링 필요)
                              </p>
                              <p>
                                 <span className="text-yellow-400 font-bold text-xl">2. PockeTube:</span> 경쟁 채널 및 이슈 채널을 그룹화하여 실시간 모니터링.
                              </p>
                              <p>
                                 <span className="text-yellow-400 font-bold text-xl">3. 6번째 습관:</span> 5개 이상 채널에서 터지는 소재, 십수 개 채널이 집요하게 다루는 소재를 포착하십시오.
                              </p>
                           </div>
                           <div className="bg-zinc-950/50 p-6 rounded-2xl border border-yellow-500/10">
                              <span className="text-red-400 font-bold block mb-2">⚠ 수익 주의사항</span>
                              정치/사회 이슈는 <span className="text-white font-bold">노란 딱지(수익 제한)</span>나 채널 삭제가 빈번합니다. 조회수 수익보다 <span className="text-white font-bold">슈퍼챗과 후원 계좌</span>가 메인 수익원입니다.
                           </div>
                        <//>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="knowledge">
               <div className="flex items-center gap-4 mb-20">
                  <span className="p-4 bg-zinc-800 rounded-2xl shadow-lg shadow-indigo-600/10"><${LucideIcon} name="BookOpen" size=${36} className="text-indigo-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 지적 호기심 (역사/미스테리/책)</h2>
               </div>

               <div className="bg-indigo-950/20 p-12 lg:p-20 rounded-[4rem] border border-indigo-500/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity"><${LucideIcon} name="Award" size=${150} className="text-indigo-400" /></div>

                  <div className="relative z-10 space-y-8">
                     <div>
                        <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight italic">"광고주가 매달리는 프리미엄 채널"</h3>
                        <p className="text-zinc-100 text-xl lg:text-2xl leading-relaxed max-w-4xl font-normal">
                           진입은 가장 어렵습니다. 뛰어난 전문성과 퀄리티(예: <span className="text-indigo-400 font-bold">지식해적단</span>)가 필수입니다. 하지만 한 번 궤도에 오르면 <span className="text-white font-bold underline decoration-indigo-500">명품, 도서, 공공기관</span> 등에서 최고 단가의 광고를 받습니다.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <div className="bg-zinc-950/80 p-10 rounded-3xl border border-indigo-500/20 text-center shadow-xl space-y-4">
                           <${LucideIcon} name="Anchor" size=${36} className="text-indigo-400 mx-auto" />
                           <div>
                              <div className="text-indigo-200 font-black text-2xl mb-2">독점성</div>
                              <div className="text-base text-zinc-300 font-medium">쉽게 카피 불가능한 퀄리티</div>
                           </div>
                        </div>
                        <div className="bg-zinc-950/80 p-10 rounded-3xl border border-indigo-500/20 text-center shadow-xl space-y-4">
                           <div className="text-indigo-400 font-black text-2xl mb-2 flex justify-center"><${LucideIcon} name="TrendingUp" size=${36} /></div>
                           <div>
                              <div className="text-indigo-200 font-black text-2xl mb-2">누적 떡상</div>
                              <div className="text-base text-zinc-300 font-medium">옛날 영상까지 함께 조회수 폭발</div>
                           </div>
                        </div>
                        <div className="bg-zinc-950/80 p-10 rounded-3xl border border-indigo-500/20 text-center shadow-xl space-y-4">
                           <${LucideIcon} name="Clock" size=${36} className="text-indigo-400 mx-auto" />
                           <div>
                              <div className="text-indigo-200 font-black text-2xl mb-2">연금 수익</div>
                              <div className="text-base text-zinc-300 font-medium">수명 2년 이상의 효자 콘텐츠</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="finance">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-4 bg-zinc-800 rounded-2xl shadow-lg shadow-emerald-500/20"><${LucideIcon} name="DollarSign" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 실속 정보 (재테크/건강/교육)</h2>
               </div>

               <div className="grid grid-cols-1 gap-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="space-y-6 p-10 bg-zinc-900 border-emerald-900/20">
                        <h4 className="text-2xl font-black text-white flex items-center gap-3 italic">
                           <${LucideIcon} name="TrendingUp" size=${28} className="text-emerald-400" size=${28} /> 재테크: '정보 노가다'
                        </h4>
                        <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                           화려한 편집이 전혀 필요 없습니다. 주식, 코인, 부동산의 핵심 정보를 매일 2~3회씩 꾸준히 올리는 압도적인 <span className="text-emerald-400 font-bold">'생산 능력'</span>이 최우선입니다. 레퍼럴, 후원 등 수익구조가 무궁무진합니다.
                        </p>
                        <div className="bg-zinc-950 p-6 rounded-2xl text-emerald-200 text-lg border border-emerald-900/30">
                           <span className="font-bold text-white">수익:</span> 조회수보단 레퍼럴(추천인), 후원, 멤버십 수익이 메인입니다.
                        </div>
                     <//>

                     <${Card} className="space-y-6 p-10 bg-zinc-900 border-orange-900/20">
                        <h4 className="text-2xl font-black text-white flex items-center gap-3 italic">
                           <${LucideIcon} name="Package" size=${28} className="text-orange-400" /> 기타 분야 전략
                        </h4>
                        <ul className="space-y-4 text-zinc-200 text-lg">
                           <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> <span><strong className="text-white">언박싱/리뷰:</strong> '정보 큐레이션' 또는 해외 반응 요약 전략.</span></li>
                           <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> <span><strong className="text-white">교육(영어):</strong> 구독자가 적어도 기업 광고 수주가 용이함.</span></li>
                           <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span> <span><strong className="text-white">건강/운동:</strong> 전문가가 아니라면 <span className="underline decoration-orange-500">쇼츠/틱톡</span> 도전이 유리.</span></li>
                        </ul>
                     <//>
                  </div>

                  <${Card} className="p-10 bg-zinc-900 border border-zinc-800">
                     <h4 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                        <${LucideIcon} name="ShoppingBag" size=${28} className="text-pink-400" /> 수익화 확장: 쇼핑 & 멤버십
                     </h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-zinc-200">
                        <div>
                           <strong className="text-white block text-xl mb-2">유튜브 쇼핑</strong>
                           영상 내용과 관련된 제품을 태그하여 구매 전환을 유도하십시오.
                        </div>
                        <div>
                           <strong className="text-white block text-xl mb-2">멤버십 전용 영상</strong>
                           시기에 상관없는 투자 기본기나 실전 매매법 등 '알짜 정보'는 유료 멤버십으로 돌려 수익을 다각화하십시오.
                        </div>
                     </div>
                  <//>
               </div>
            <//>

            <${Section} id="vlog">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-4 bg-zinc-800 rounded-2xl shadow-lg shadow-pink-600/10"><${LucideIcon} name="Camera" size=${36} className="text-pink-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. VLOG (감성 & 영상미)</h2>
               </div>
               <${Card} className="bg-pink-950/10 border-pink-500/20 p-12 lg:p-20 rounded-[4rem] group relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4 rotate-12 scale-[2.5] pointer-events-none group-hover:opacity-10 transition-opacity">
                     <${LucideIcon} name="Instagram" size=${300} />
                  </div>
                  <h3 className="text-3xl lg:text-6xl font-black text-white mb-10 italic">"영상미가 성공의 9할"</h3>
                  <p className="text-zinc-100 text-xl lg:text-2xl leading-relaxed mb-12 max-w-4xl font-normal">
                     브이로그는 알고리즘 타기가 가장 어렵습니다. 특히 <span className="text-pink-400 font-black">남성 유튜버에게는 비추천</span>합니다. 압도적인 <span className="text-pink-400 font-black underline underline-offset-8 decoration-pink-500/50">감성 필터와 썸네일</span>을 롤모델로부터 1:1로 카피하십시오.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <div className="p-8 bg-zinc-950/80 rounded-[2.5rem] border border-white/5 space-y-6 glow-pink">
                        <div className="flex items-center gap-3 text-pink-400 font-black text-xl italic uppercase tracking-tighter">
                           <${LucideIcon} name="Camera" size=${24} /> 카메라 양대 산맥
                        </div>
                        <ul className="text-lg text-zinc-100 space-y-4 font-normal">
                           <li className="space-y-1">
                              <div className="font-bold text-white text-xl">Canon</div>
                              <div className="text-zinc-400 text-base">따뜻한 색감, 쉬운 조작 (초보 선호)</div>
                           </li>
                           <li className="space-y-1">
                              <div className="font-bold text-white text-xl">Sony</div>
                              <div className="text-zinc-400 text-base">칼 같은 초점(AF), S-LOG 후보정 (전문가 선호)</div>
                           </li>
                        </ul>
                     </div>

                     <div className="p-8 bg-zinc-950/80 rounded-[2.5rem] border border-white/5 space-y-6">
                        <div className="flex items-center gap-3 text-blue-400 font-black text-xl italic uppercase tracking-tighter">
                           <${LucideIcon} name="Globe" size=${24} /> 글로벌 머니
                        </div>
                        <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                           언어 장벽이 없어 해외 시청자 유입이 가장 쉽습니다. 성공 시 <span className="text-white font-bold">글로벌 명품 브랜드 광고</span> 수주가 가능한 유일한 분야입니다.
                        </p>
                     </div>

                     <div className="p-8 bg-zinc-950/80 rounded-[2.5rem] border border-white/5 space-y-6">
                        <div className="flex items-center gap-3 text-emerald-400 font-black text-xl italic uppercase tracking-tighter">
                           <${LucideIcon} name="Copy" size=${24} /> 100% 카피 전략
                        </div>
                        <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                           핫키워드 매칭이 어렵습니다. 트래픽 고민보다 <span className="text-white font-bold">롤모델 채널의 인기 소재와 썸네일</span>을 완벽하게 베끼는 것이 가장 빠른 길입니다.
                        </p>
                     </div>
                  </div>
               <//>
            <//>

            <${Section} id="master-outro">
               <div className="bg-gradient-to-br from-indigo-900 via-zinc-950 to-black p-12 lg:p-24 rounded-[5rem] text-center border-4 border-indigo-500/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-30 blur-[150px] pointer-events-none"></div>
                  <div className="relative z-10 space-y-16">
                     <h1 className="text-6xl lg:text-9xl font-black mb-12 text-white italic opacity-20 uppercase">마스터 모드</h1>
                     <p className="text-2xl lg:text-4xl text-zinc-100 max-w-4xl mx-auto font-normal leading-relaxed tracking-tight">
                        이제 당신은 <span className="text-indigo-400 font-black italic">단순한 시청자</span>에서 시장을 흔드는 <span className="text-white font-black underline underline-offset-8 decoration-indigo-500">생산자의 정점</span>으로 올라섰습니다.
                     </p>
                     <div className="flex justify-center flex-col items-center gap-10">
                        <button onClick=${() => onNextSeries('series4')} className="px-12 py-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[3rem] font-black text-2xl lg:text-5xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_25px_80px_rgba(79,70,229,0.6)]">
                           시리즈 4 시작하기
                        </button>
                        <div className="flex gap-2">
                           <div className="w-16 h-1.5 bg-indigo-600 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-zinc-800 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-zinc-800 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>
            <//>
      </div >
         `;
   };
   // ==========================================
   window.Contents.Series4 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="emerald">공식 시리즈 04<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            100만 뷰의 비밀:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 font-black">실전 & 고급 기술</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-emerald-600 pl-6 lg:pl-8 space-y-4 max-w-4xl">
            <p>유튜브는 "뮤지컬"입니다. 시청자의 <span className="text-emerald-400 font-black">감정을 지휘하는 법</span>과 <span className="text-teal-400 font-black">5초의 예술</span>을 마스터하십시오.</p>
          </div>
        </div>

        <${Section} id="intro">
           <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-emerald-500">
              <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                 <${LucideIcon} name="Music" size=${36} className="text-emerald-500" /> 유튜브는 뮤지컬이다
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                 <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <span className="block text-emerald-500 font-black text-xl mb-2">STORY</span>
                    <span className="text-white text-lg">듣는 재미 (감정)</span>
                 </div>
                 <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <span className="block text-teal-500 font-black text-xl mb-2">SOUND</span>
                    <span className="text-white text-lg">BGM / 연기</span>
                 </div>
                 <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <span className="block text-cyan-500 font-black text-xl mb-2">VISUAL</span>
                    <span className="text-white text-lg">보는 재미 (연출)</span>
                 </div>
              </div>
           <//>
        <//>


            <${Section} id="story">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-600/10"><${LucideIcon} name="BookOpen" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 스토리: 감정의 연금술</h2>
               </div>

               <div className="mb-12 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                     <${LucideIcon} name="Magnet" size=${28} className="text-emerald-500" /> 핵심은 '흡입력'이다
                  </h3>
                  <p className="text-lg text-zinc-200 leading-relaxed">
                     단순히 글을 논리적으로 잘 쓰는 것보다 <span className="text-white font-bold">사람의 감정을 이해하는 것</span>이 훨씬 유리합니다. 흡입력은 <span className="text-emerald-400 font-bold">감정, 필요성, 호기심</span> 중 하나를 강렬하게 자극할 때 발생합니다.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-8">
                     <${Card} className="p-8 border-emerald-500/30 bg-emerald-900/5 h-full">
                        <h4 className="text-2xl font-black text-white mb-6">성공 치트키: 9가지 감정</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                           ${['공감', '분노', '놀라움', '슬픔', '감동', '웃음', '기쁨', '존경', '통쾌함'].map(e => html`
                          <div key=${e} className="p-6 bg-zinc-900 rounded-2xl text-center text-xl text-zinc-100 font-bold border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 hover:bg-zinc-800 transition-all cursor-default shadow-md">${e}</div>
                       `)}
                        </div>
                        <div className="space-y-4 text-zinc-200">
                           <p className="flex gap-2 text-lg"><span className="text-red-500 font-black">WARNING</span> <span><span className="text-white font-bold">메인 감정은 오직 하나</span>여야 합니다. 슬픈 영상에 어설픈 웃음 포인트를 넣지 마십시오. 담백할수록 몰입됩니다.</span></p>
                        </div>
                     <//>
                  </div>
                  <div className="space-y-8">
                     <div className="bg-zinc-900 p-8 rounded-[2rem] border border-zinc-800 shadow-xl h-full flex flex-col justify-center">
                        <h4 className="text-xl font-black text-teal-400 mb-4 flex items-center gap-2"><${LucideIcon} name="Link" size=${24} /> 예고편(썸네일) = 본편(인트로)</h4>
                        <p className="text-lg text-white leading-relaxed mb-6">
                           제목과 썸네일은 뮤지컬의 '예고편'입니다. 예고편에서 <strong>"분노"</strong>를 약속했다면, 본 영상 인트로에서도 즉시 <strong>"분노"</strong>를 터뜨려야 합니다.
                        </p>
                        <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-700 shadow-inner text-zinc-200 text-lg leading-relaxed">
                           <span className="text-emerald-500 font-bold text-xl mr-2">Tip:</span> 궁금증 유발 문구보다는 <span className="text-white font-bold">메인 감정을 느낄 수 있는 영상/이미지 + BGM</span> 조합이 훨씬 강력합니다.
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="writing">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-teal-600/10"><${LucideIcon} name="PenTool" size=${36} className="text-teal-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 작문 & 인트로 기술</h2>
               </div>

               <div className="mb-12">
                  <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 text-center relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-10 opacity-10"><${LucideIcon} name="Timer" size=${150} /></div>
                     <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 relative z-10">인트로 5초의 법칙</h3>
                     <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative z-10">
                        <div className="text-center">
                           <p className="text-6xl lg:text-8xl font-black text-emerald-500 tracking-tighter">50%</p>
                           <p className="text-zinc-200 font-bold mt-2">전체 노력의 투자 비중</p>
                        </div>
                        <div className="text-left max-w-lg text-xl text-zinc-200 leading-relaxed font-normal">
                           "승부는 <span className="text-white font-black underline decoration-emerald-500">단 5초</span> 만에 결정됩니다. 글쓰기 실력이 부족할수록 이 5초 구간에 무의식적 메세지(감정)를 각인시키는 데 집착하십시오."
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-2xl font-black text-white px-4 border-l-4 border-teal-500">클릭을 유도하는 14가지 핵심 기술</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                     <${Card} className="p-8 border-zinc-800 bg-zinc-900/50 hover:border-teal-500/30 transition-colors">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3"><${LucideIcon} name="Image" size=${28} className="text-teal-400" /> 1. 썸네일 & 이미지 전략</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">이미지 우선 법칙</span>: 문구로 씨름하지 말고 눈에 띄는 '이미지'를 먼저 찾으십시오.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">인상적인 요소</span>: 강렬한 색상 대비, 큰 얼굴과 표정, 궁금증 유발 사진, 논란 대상 모자이크.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">문구 제한</span>: 썸네일 문구는 2줄, 30자 이내. (어렵다면 챗GPT 활용)</span></li>
                        </ul>
                     <//>

                     <${Card} className="p-8 border-zinc-800 bg-zinc-900/50 hover:border-teal-500/30 transition-colors">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3"><${LucideIcon} name="Type" size=${28} className="text-teal-400" /> 2. 제목 & 노출 최적화</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">헤드라인형</span>: 조사/서술어 생략. (50자 이내)</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">41자 & 25자</span>: 모바일/PC 노출 기준(41자)을 지키되, 핵심 흥미 요소는 <span className="text-emerald-400 font-bold">25자 이내</span>에 배치하십시오.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">내용 분리</span>: 2가지 내용일 땐 '/' 나 '|' 기호 사용.</span></li>
                        </ul>
                     <//>

                     <${Card} className="p-8 border-zinc-800 bg-zinc-900/50 hover:border-teal-500/30 transition-colors">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3"><${LucideIcon} name="Target" size=${28} className="text-teal-400" /> 3. 타겟팅 & 심리</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">호기심 vs 감정</span>: 감정 주제는 핵심을 밝히고, 호기심 주제는 감추십시오.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">타겟 명시</span>: "40대 필독", "자영업자 주목" 처럼 특정 집단을 콕 집으십시오.</span></li>
                        </ul>
                     <//>

                     <${Card} className="p-8 border-zinc-800 bg-zinc-900/50 hover:border-teal-500/30 transition-colors">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-3"><${LucideIcon} name="Repeat" size=${28} className="text-teal-400" /> 4. 효율 & 생산성</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">목차 = 설계도</span>: 목차부터 만들어야 속도가 붙습니다.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">재활용</span>: 터진 영상의 포맷을 그대로 복제하십시오.</span></li>
                           <li className="flex gap-2"><span className="text-teal-500 font-bold">✓</span> <span><span className="text-white font-bold">논문 금지</span>: 완벽함보다 '양'을 채우는 데 주력하십시오.</span></li>
                           <li className="flex gap-2"><span className="text-red-500 font-bold">⚠</span> <span><span className="text-white font-bold">저작권 주의</span>: 원문 전체 복사 시 어문 저작권 문제 소지가 있습니다.</span></li>
                        </ul>
                     <//>
                  </div>
               </div>
            <//>

            <${Section} id="sound">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-pink-600/10"><${LucideIcon} name="Headphones" size=${36} className="text-pink-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 청각: BGM과 더빙</h2>
               </div>
               <${Card} className="p-10 bg-zinc-900 border-zinc-800 relative overflow-hidden">
                  <div className="relative z-10 space-y-8">
                     <div className="flex flex-col gap-8">
                        <blockquote className="text-2xl text-white font-normal italic border-l-4 border-pink-500 pl-8 leading-relaxed">
                           "눈보다 귀가 예민합니다. 청각적 불만족은 즉각적인 이탈을 부릅니다."
                        </blockquote>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-pink-500/50 transition-all group">
                              <h5 className="text-pink-400 font-black mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="Music" size=${24} /> BGM 투자</h5>
                              <p className="text-zinc-200 text-lg leading-relaxed mb-4">무료 음악은 한계가 있습니다. <span className="text-white font-bold">Artlist</span>, <span className="text-white font-bold">Epidemic Sound</span>로 고유의 색깔을 확보하십시오.</p>
                              <div className="text-red-400 font-bold text-base bg-red-900/20 p-4 rounded-xl">
                                 ⚠ 주의: 구독 기간 종료 후 다운로드한 음원 사용 불가
                              </div>
                           </div>
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-pink-500/50 transition-all">
                              <h5 className="text-pink-400 font-black mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="Mic" size=${24} /> 더빙 & TTS</h5>
                              <ul className="space-y-3 text-zinc-200 text-lg">
                                 <li>• <span className="text-zinc-300">직접 녹음:</span> <span className="text-white font-bold">NT-USB 마이크</span> + 흡음재/방음부스 필수</li>
                                 <li>• <span className="text-zinc-300">TTS:</span> 목소리 스트레스 시 과감히 전환. 단, <span className="text-white font-bold">어색한 억양 교정</span> 필수.</li>
                              </ul>
                           </div>
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-pink-500/50 transition-all">
                              <h5 className="text-pink-400 font-black mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="RefreshCw" size=${24} /> 교체 타이밍</h5>
                              <p className="text-zinc-200 text-lg leading-relaxed">
                                 본인이 지루하거나 조회수가 하락세일 때가 <span className="text-white font-bold">BGM 교체 시그널</span>입니다.
                              </p>
                           </div>
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-pink-500/50 transition-all">
                              <h5 className="text-pink-400 font-black mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="CheckCircle" size=${24} /> 최종 점검</h5>
                              <p className="text-zinc-200 text-lg leading-relaxed">
                                 영상 완성 후 후보 음악들을 대입하여 <span className="text-white font-bold">몰입도, 목소리 조화, 감정 증폭</span>을 반드시 비교하십시오.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               <//>
            <//>

            <${Section} id="visual">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-cyan-600/10"><${LucideIcon} name="MonitorPlay" size=${36} className="text-cyan-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 연출: 시각적 지루함 타파</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <${Card} className="space-y-6 p-10 bg-zinc-900 border-cyan-900/20 hover:border-cyan-500/30 transition-colors">
                     <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Film" size=${28} className="text-cyan-500" /> 동적 연출 (Dynamic)</h4>
                     <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                        정지된 이미지는 죄악입니다. <span className="text-cyan-400 font-bold">확대/축소(Zoom)</span>, <span className="text-cyan-400 font-bold">패닝(Panning)</span>을 넣어 생동감을 주거나, 이미지 10장 대신 <span className="text-white font-bold">영상 클립 1개</span>를 사용하십시오.
                     </p>
                     <div className="bg-cyan-950/30 p-4 rounded-xl border border-cyan-500/30 text-base text-cyan-200">
                        <span className="font-bold text-red-400">⚠ 주의:</span> 영상 클립은 짧게 써도 저작권 감지에 걸릴 수 있습니다. (케바케)
                     </div>
                  <//>
                  <${Card} className="space-y-6 p-10 bg-zinc-900 border-cyan-900/20 hover:border-cyan-500/30 transition-colors">
                     <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="AlignLeft" size=${28} className="text-cyan-500" /> 자막 호흡 (Subtitle)</h4>
                     <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                        자막이 길면 영상이 늘어지며, 내용은 담백하게 시각적 지루함만 없애는 것이 핵심입니다.
                     </p>
                     <ul className="space-y-2 mt-4 text-zinc-200">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> <span><strong className="text-white">1문장 자막:</strong> 25자 이내</span></li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> <span><strong className="text-white">2문장 자막:</strong> 50자 이내</span></li>
                     </ul>
                     <p className="text-zinc-400 mt-2 text-base">
                        * 읽는 속도와 듣는 속도를 일치시키십시오.
                     </p>
                  <//>
                  <${Card} className="col-span-1 lg:col-span-2 space-y-4 p-8 bg-zinc-950 border border-zinc-800 text-center rounded-3xl">
                     <h4 className="text-xl font-black text-white">연출 철학</h4>
                     <p className="text-xl text-zinc-200 font-medium">
                        "화려한 효과보다 <span className="text-cyan-400 font-black">탄탄한 스토리텔링</span>이 우선입니다. 개인 채널의 연출은 <span className="text-white underline decoration-cyan-500">시청 방해 요소를 제거</span>하는 것에 목적이 있습니다."
                     </p>
                  <//>
               </div>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-br from-emerald-900 via-zinc-950 to-black p-12 lg:p-24 rounded-[5rem] text-center border-4 border-emerald-500/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-600/10 opacity-30 blur-[150px] pointer-events-none"></div>
                  <div className="relative z-10 space-y-16">
                     <h1 className="text-5xl lg:text-8xl font-black mb-12 text-white italic opacity-30 uppercase">NEXT LEVEL</h1>
                     <p className="text-2xl lg:text-4xl text-zinc-100 max-w-4xl mx-auto font-normal leading-relaxed tracking-tight">
                        이제 100만 뷰를 위한 무기가 준비되었습니다. <br />다음 시리즈에서는 <span className="text-emerald-400 font-black italic">인기 유튜버의 실제 작업 과정</span>과 <span className="text-white font-black underline underline-offset-8 decoration-emerald-500">소재 발굴 노하우</span>를 공개합니다.
                     </p>
                     <div className="flex justify-center flex-col items-center gap-10">
                        <button onClick=${() => onNextSeries('series5')} className="px-12 py-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[3rem] font-black text-2xl lg:text-5xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_25px_80px_rgba(16,185,129,0.6)]">
                           시리즈 5 시작하기
                        </button>
                        <div className="flex gap-2">
                           <div className="w-16 h-1.5 bg-emerald-600 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-zinc-800 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-zinc-800 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>
            <//>
      </div >
         `;
   };
   // ==========================================
   window.Contents.Series5 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="orange">공식 시리즈 05<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            프로의 작업 공정:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 font-black">실전 프로세스 & 노하우</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-orange-600 pl-6 lg:pl-8 space-y-4 max-w-4xl">
            <p>100만 뷰를 만드는 것은 <span className="text-orange-400 font-black">운이 아니라 공정</span>입니다. 기획부터 업로드까지, 인기 유튜버의 <span className="text-amber-400 font-black">실제 작업 루틴</span>을 그대로 이식하십시오.</p>
          </div>
        </div>

        <${Section} id="intro">
           <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-orange-500">
              <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                 <${LucideIcon} name="Factory" size=${36} className="text-orange-500" /> 100만 뷰 프로세스 해부
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-100 text-lg leading-relaxed font-normal">
                 <div>
                    기획안 작성, 목차 설계, 자료 매칭, 대본 작성 등 각 단계에서 <span className="text-white font-bold">조회수를 극대화하는 구체적인 노하우</span>를 배울 수 있습니다.
                 </div>
                 <div>
                    특히 시청자 이탈을 막는 <span className="text-orange-400 font-bold underline">인트로와 제목+썸네일의 전략적 접근법</span>을 통해 시행착오를 획기적으로 줄일 수 있습니다.
                 </div>
              </div>
           <//>
        <//>

            <${Section} id="planning">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-orange-600/10"><${LucideIcon} name="ClipboardList" size=${36} className="text-orange-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 기획안 작성 및 목차 설계</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-zinc-900 p-8 lg:p-10 rounded-[2.5rem] border border-zinc-800 shadow-xl">
                     <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2"><${LucideIcon} name="PenTool" className="text-orange-500" /> 기획안: 효율의 시작</h3>
                     <p className="text-xl text-zinc-200 mb-8 font-normal">감각이 없는 초보자일수록 기획안 작성이 중요하며, 지나치게 공을 들이기보다 <span className="text-orange-400 font-bold">꼭 필요한 요소</span>만 담아야 합니다.</p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <${Card} className="bg-zinc-950 border-orange-500/20 p-8 hover:border-orange-500/50 transition-all">
                           <div className="text-orange-500 font-black mb-3 text-xl">1. 소재 및 핵심 포인트</div>
                           <p className="text-zinc-200 text-lg">기존 자료(영상, 기사, 책)나 썸네일 이미지에서 영감을 받아 소재 발굴</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-orange-500/20 p-8 hover:border-orange-500/50 transition-all">
                           <div className="text-orange-500 font-black mb-3 text-xl">2. 제목+썸네일 초안</div>
                           <p className="text-zinc-200 text-lg">클릭률을 높일 후킹 문장이나 이미지 스케치 (노출 핵심)</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-orange-500/20 p-8 hover:border-orange-500/50 transition-all">
                           <div className="text-orange-500 font-black mb-3 text-xl">3. 흡입 전략 결정</div>
                           <p className="text-zinc-200 text-lg">감정, 필요성, 호기심 중 시청자를 끌어들일 훅(Hook) 요소 선정</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-orange-500/20 p-8 hover:border-orange-500/50 transition-all">
                           <div className="text-orange-500 font-black mb-3 text-xl">4. 목차 설계도</div>
                           <p className="text-zinc-200 text-lg">이탈을 막고 후반 핵심 내용까지 보게 만드는 구조 설계</p>
                        <//>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="bg-zinc-900/50 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2"><${LucideIcon} name="FileText" className="text-blue-400" size=${28} /> 글 위주 영상 목차 순서</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">1</span> <span><strong className="text-white">자료 조사:</strong> 소재 관련 1차 조사 (대본 아이디어 확보)</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">2</span> <span><strong className="text-white">인트로:</strong> 메인 떡밥 + 서브 떡밥 (시선 고정)</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">3</span> <span><strong className="text-white">소주제:</strong> 핵심 내용 연결 고리</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">4</span> <span><strong className="text-white">서브 떡밥 회수:</strong> 지루함 방지용 1차 해소</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">5</span> <span><strong className="text-white">클라이맥스:</strong> 메인 떡밥 공개</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-900/50 text-blue-400 font-black shrink-0 mt-1">6</span> <span><strong className="text-white">마무리:</strong> 개인적 견해 및 여운</span></li>
                        </ul>
                     <//>
                     <${Card} className="bg-zinc-900/50 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white mb-6 flex items-center gap-2"><${LucideIcon} name="Camera" className="text-pink-400" size=${28} /> 촬영 위주 영상 목차 순서</h4>
                        <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-900/50 text-pink-400 font-black shrink-0 mt-1">1</span> <span><strong className="text-white">촬영 순서:</strong> 동선 및 순서 구체화</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-900/50 text-pink-400 font-black shrink-0 mt-1">2</span> <span><strong className="text-white">인트로/썸네일:</strong> 촬영 중 확보 계획 수립</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-900/50 text-pink-400 font-black shrink-0 mt-1">3</span> <span><strong className="text-white">장비/구도:</strong> 조명, 구도, 레퍼런스 조사</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-900/50 text-pink-400 font-black shrink-0 mt-1">4</span> <span><strong className="text-white">필수 정보:</strong> 누락 금지 멘트 정리</span></li>
                           <li className="flex gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-900/50 text-pink-400 font-black shrink-0 mt-1">5</span> <span><strong className="text-white">변수 대응:</strong> 현장 돌발 상황 시나리오</span></li>
                        </ul>
                     <//>
                  </div>

                  <div className="bg-amber-900/10 border border-amber-500/20 p-8 lg:p-10 rounded-3xl">
                     <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                        <${LucideIcon} name="Lightbulb" className="text-amber-500" size=${28} /> 인트로 접근 전략: 영상 vs 글
                     </h4>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <div className="text-amber-400 font-black text-2xl">CASE 1: 핵심이 '영상'일 때</div>
                           <div className="text-lg text-zinc-200 bg-zinc-950 p-6 rounded-xl border border-zinc-800">예: 굶주린 악어가 치타를 사냥하는 최초 영상</div>
                           <p className="text-zinc-200">
                              사냥 성공 장면을 바로 보여주면 이탈합니다. <span className="text-white font-bold">덮치기 직전의 긴장감</span>까지만 5초 인트로에 보여주십시오.
                           </p>
                        </div>
                        <div className="space-y-4">
                           <div className="text-amber-400 font-black text-2xl">CASE 2: 핵심이 '글(정보)'일 때</div>
                           <div className="text-lg text-zinc-200 bg-zinc-950 p-6 rounded-xl border border-zinc-800">예: 치타가 악어에게 잡혀먹힌 황당한 이유</div>
                           <p className="text-zinc-200">
                              장면을 보여주면 내용을 유추하고 나갑니다. 장면 대신 <span className="text-white font-bold">"과연 얼마나 황당했길래?"</span>라는 질문을 던져 호기심을 극대화하십시오.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="prep">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="FileSearch" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 자료 조사 및 대본 준비</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-6">
                     <h4 className="text-xl font-black text-white">초보자의 자료 조사 원칙</h4>
                     <ul className="space-y-4 text-zinc-200">
                        <li className="flex gap-3"><span className="text-blue-500">•</span> <span><strong>선(先) 조사:</strong> 글쓰기가 어렵다면 목차보다 자료 조사부터 하십시오. 배경지식이 곧 콘텐츠입니다.</span></li>
                        <li className="flex gap-3"><span className="text-blue-500">•</span> <span><strong>벤치마킹 분석:</strong> 타 채널 주제라도 파트를 나눠 '전개 방식'을 뜯어보십시오. (단순 표절 금지)</span></li>
                     </ul>
                  <//>
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-6">
                     <h4 className="text-xl font-black text-white">자료 매칭 가능성 확인 (필수)</h4>
                     <p className="text-zinc-200 leading-relaxed">
                        아무리 대본이 좋아도 <span className="text-red-400 font-bold">보여줄 영상/이미지가 없으면 꽝</span>입니다. 대본 작성 전 반드시 시각 자료 유무를 확인하십시오.
                     </p>
                     <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-700 text-center text-lg font-bold text-blue-400">
                        "자료가 없다면 소주제를 변경하거나 삭제하십시오."
                     </div>
                  <//>
               </div>

               <div className="bg-gradient-to-r from-zinc-900 to-black p-8 lg:p-12 rounded-[3rem] border-2 border-zinc-800 text-center">
                  <h4 className="text-2xl font-black text-white mb-8">효율적 작업 프로세스 순서</h4>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                     <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 w-full md:w-auto z-10">
                        <span className="block text-blue-400 font-black mb-1">STEP 1</span>
                        <span className="text-white font-bold">대본 작성</span>
                     </div>
                     <${LucideIcon} name="ArrowRight" size=${24} className="text-zinc-200 hidden md:block" />
                     <${LucideIcon} name="ArrowDown" size=${24} className="text-zinc-200 md:hidden" />

                     <div className="bg-blue-900 p-6 rounded-2xl border-2 border-blue-500 shadow-xl shadow-blue-900/30 w-full md:w-auto transform scale-110 z-10">
                        <span className="block text-white font-black mb-1">STEP 2</span>
                        <span className="text-white font-bold">자료 매칭 (원석 확보)</span>
                     </div>

                     <${LucideIcon} name="ArrowRight" size=${24} className="text-zinc-200 hidden md:block" />
                     <${LucideIcon} name="ArrowDown" size=${24} className="text-zinc-200 md:hidden" />
                     <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 w-full md:w-auto z-10">
                        <span className="block text-blue-400 font-black mb-1">STEP 3</span>
                        <span className="text-white font-bold">더빙</span>
                     </div>
                     <${LucideIcon} name="ArrowRight" size=${24} className="text-zinc-200 hidden md:block" />
                     <${LucideIcon} name="ArrowDown" size=${24} className="text-zinc-200 md:hidden" />
                     <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 w-full md:w-auto z-10">
                        <span className="block text-blue-400 font-black mb-1">STEP 4</span>
                        <span className="text-white font-bold">최종 매칭 (다듬기)</span>
                     </div>
                  </div>
                  <p className="mt-8 text-zinc-200 text-lg text-center font-medium bg-zinc-900/50 p-6 rounded-xl inline-block">※ 일반적인 '대본 → 더빙 → 자료' 순서는 자료 부족 시 재녹음을 유발하는 비효율적 방식입니다.</p>
               </div>
            <//>


            <${Section} id="writing">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="Mic2" size=${36} className="text-purple-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 대본 작성 및 더빙 노하우</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 shadow-xl">
                     <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                        <${LucideIcon} name="AlignLeft" className="text-purple-400" size=${28} /> 문장 형식과 글자 수 법칙
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-purple-500/30 text-center">
                           <span className="block text-zinc-200 text-lg font-bold uppercase tracking-widest mb-4">1문장 자막</span>
                           <span className="block text-6xl font-black text-white tracking-tighter mb-2">25자</span>
                           <span className="block text-purple-400 font-bold">이내 권장</span>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-purple-500/30 text-center">
                           <span className="block text-zinc-200 text-lg font-bold uppercase tracking-widest mb-4">2문장 자막</span>
                           <span className="block text-6xl font-black text-white tracking-tighter mb-2">50자</span>
                           <span className="block text-purple-400 font-bold">이내 권장</span>
                        </div>
                     </div>
                     <div className="mt-8 bg-purple-900/10 p-6 rounded-2xl border border-purple-500/20 text-center">
                        <p className="text-xl text-white font-black mb-2">"서술형 나열 금지"</p>
                        <p className="text-zinc-200">
                           TTS와 자동자막 싱크를 위해 <span className="text-white font-bold underline">문장 단위로 끊어 쓰는 습관</span>을 들이십시오. 후작업 시간이 절반으로 줄어듭니다.
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="space-y-6 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white flex items-center gap-2">
                           <${LucideIcon} name="Sparkles" className="text-purple-400" size=${28} /> TTS 더빙 설정 노하우
                        </h4>
                        <ul className="space-y-4 text-zinc-200">
                           <li className="flex gap-4 items-start">
                              <span className="text-purple-500 font-black text-xl mt-1">1.</span>
                              <span><strong className="text-white text-xl">프로그램:</strong> 타입캐스트 (다양한 성우, 끊어 받기 편리)</span>
                           </li>
                           <li className="flex gap-4 items-start">
                              <span className="text-purple-500 font-black text-xl mt-1">2.</span>
                              <span><strong className="text-white text-xl">요금제:</strong> 주 2회 업로드 시 베이직(월 60분) 충분. 고음질 욕심 시 프로 추천.</span>
                           </li>
                           <li className="flex gap-4 items-start">
                              <span className="text-purple-500 font-black text-xl mt-1">3.</span>
                              <span>
                                 <strong className="text-white text-xl">세팅값:</strong> 읽는 속도 빠른 캐릭터 선호. <br />
                                 <span className="text-zinc-100 text-lg block p-6 bg-zinc-950 rounded-2xl mt-4 border border-zinc-700 shadow-inner leading-loose">
                                    - 끊어 읽기: 0초<br />- 호흡: 과한 호흡 삭제 (쉼표 활용)<br />- 파일: MP3, 문장별 나누기, 고음질
                                 </span>
                              </span>
                           </li>
                        </ul>
                        <${Badge} color="purple">TIP: 반드시 이어폰으로 뭉개짐 확인<//>
                     <//>
                     <${Card} className="space-y-6 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white flex items-center gap-2">
                           <${LucideIcon} name="User" className="text-purple-400" size=${28} /> 직접 녹음 노하우
                        </h4>
                        <p className="text-zinc-200">
                           문장마다 일부러 **한 템포씩 쉬며** 녹음하십시오. 그래야 무음 자동구간 편집 시 깔끔하게 나뉩니다.
                        </p>
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500/50 transition-all mt-4">
                           <span className="text-purple-400 font-bold">프리미어 프로 녹음 팁:</span><br />
                           전체를 한 번에 읽지 말고, 한 문장씩 Rec/Stop을 반복하여 최상의 상태를 유지하십시오.
                        </div>
                     <//>
                  </div>
               </div>
            <//>

            <${Section} id="recording">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-red-600/10"><${LucideIcon} name="Scissors" size=${36} className="text-red-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 컷편집 & 오디오 마스터링</h2>
               </div>

               <div className="space-y-8">
                  <${Card} className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 p-10">
                     <h3 className="text-2xl font-black text-white mb-6">컷편집 효율화 도구</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <div className="text-red-500 font-black text-lg">타임볼트 (Timebolt)</div>
                           <p className="text-zinc-200 text-lg leading-relaxed">
                              무음 구간을 자동으로 잘라줍니다. VREW보다 싱크 정확도가 높습니다. (무료 버전은 비디오만 가능하므로 오디오를 영상으로 변환해 사용)
                           </p>
                        </div>
                        <div className="space-y-2">
                           <div className="text-red-500 font-black text-lg">프리미어 프로 자동 컷</div>
                           <p className="text-zinc-200 text-lg leading-relaxed">
                              2024버전 이상 내장 기능. 대본이 없는 인터뷰/라이브 영상 편집에 효과적입니다.
                           </p>
                        </div>
                     </div>
                  <//>

                  <div className="bg-zinc-900 rounded-[3rem] p-10 border border-zinc-800 shadow-xl">
                     <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                        <${LucideIcon} name="Volume2" className="text-red-500" size=${28} /> 오디오 레벨 정석 세팅
                     </h3>
                     <div className="flex flex-col gap-6">
                        <div className="relative pt-6">
                           <div className="flex justify-between text-zinc-200 text-base uppercase tracking-widest font-bold mb-4">
                              <span>Silence</span>
                              <span>Max Volume</span>
                           </div>
                           <div className="h-10 bg-zinc-800 rounded-full overflow-hidden flex relative">
                              <div className="w-[30%] bg-zinc-700 border-r border-zinc-900"></div>
                              <div className="w-[40%] bg-green-600 flex items-center justify-center text-lg text-white font-bold relative border-r border-zinc-900">
                                 배경음악 (-18 ~ -25dB)
                              </div>
                              <div className="w-[20%] bg-yellow-500 flex items-center justify-center text-lg text-black font-bold relative border-r border-zinc-900">
                                 목소리 (-6 ~ -12dB)
                              </div>
                              <div className="w-[10%] bg-red-600"></div>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                           <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-700 flex justify-between items-center">
                              <span className="text-white font-bold">목소리 (TTS)</span>
                              <span className="text-yellow-400 font-black font-mono">+2dB (오디오게인)</span>
                           </div>
                           <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-700 flex justify-between items-center">
                              <span className="text-white font-bold">목소리 (직접녹음)</span>
                              <span className="text-yellow-400 font-black font-mono">+1.5dB (대화 모드)</span>
                           </div>
                           <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-700 flex justify-between items-center col-span-1 md:col-span-2">
                              <span className="text-white font-bold">배경 음악</span>
                              <span className="text-green-400 font-black font-mono">-3dB (배경음악 모드)</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                     <h4 className="text-xl font-black text-white mb-4">편집 순서 및 꿀팁</h4>
                     <ol className="space-y-4 text-zinc-200 list-decimal list-inside font-bold">
                        <li className="pl-2"><span className="text-white">오디오 우선</span>: 오디오 클립만 먼저 배열하고 자막을 맞춥니다.</li>
                        <li className="pl-2"><span className="text-white">트랙 정리</span>: 자막은 최상단(V4~5), 영상자료는 하단(V1~3)에 둡니다.</li>
                        <li className="pl-2"><span className="text-white">스냅(Snap)</span>: 자석 기능을 켜야 자막 커팅이 빠릅니다.</li>
                     </ol>
                  </div>
               </div>
            <//>

            <${Section} id="upload">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-500/10"><${LucideIcon} name="UploadCloud" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 업로드 전략 & 골든타임</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-gradient-to-r from-zinc-900 to-emerald-950/30 p-10 lg:p-14 rounded-[3rem] border border-emerald-500/20 shadow-2xl">
                     <h3 className="text-3xl font-black text-white mb-8">최종 단계: 제목 & 썸네일</h3>
                     <p className="text-xl text-zinc-200 mb-8 leading-relaxed">
                        "가장 마지막에 하십시오." 제작 과정에서 더 좋은 아이디어가 떠오릅니다.
                        <br />순서: <span className="text-emerald-400 font-bold">제목+썸네일 확정 → 인트로 대본/더빙/편집</span>
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <${Card} className="bg-zinc-950 border-emerald-500/30 p-6">
                           <span className="text-emerald-400 font-black block mb-2">도구</span>
                           <span className="text-white">미리캔버스 (롤모델 디자인 벤치마킹 추천)</span>
                        <//>
                        <${Card} className="bg-zinc-950 border-emerald-500/30 p-6">
                           <span className="text-emerald-400 font-black block mb-2">원칙</span>
                           <span className="text-white">머리를 식힌 후, 제3자의 눈으로 냉정하게 평가</span>
                        <//>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="space-y-6 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white flex items-center gap-2">
                           <${LucideIcon} name="DollarSign" className="text-emerald-400" size=${28} /> 미드롤(중간) 광고 전략
                        </h4>
                        <ul className="space-y-4 text-zinc-200">
                           <li className="flex gap-2"><span className="text-emerald-500">✓</span> <span>8분 이상 영상부터 가능.</span></li>
                           <li className="flex gap-2"><span className="text-emerald-500">✓</span> <span><strong>배치 포인트:</strong> 질문 직후, 반전 암시, 장면 전환 등 결정적 순간.</span></li>
                           <li className="flex gap-2"><span className="text-emerald-500">✓</span> <span><strong>빈도:</strong> 2분 간격 (2분, 4분, 6분, 8분) 수동 삽입 권장.</span></li>
                        </ul>
                     <//>
                     <${Card} className="space-y-6 border-zinc-800 p-8">
                        <h4 className="text-xl font-black text-white flex items-center gap-2">
                           <${LucideIcon} name="ShoppingBag" className="text-emerald-400" size=${28} /> 유튜브 쇼핑 활용
                        </h4>
                        <div className="space-y-4">
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500/50 transition-all">
                              <span className="text-white font-bold block mb-2 text-xl">스토어 (카페24)</span>
                              <span className="text-zinc-200 text-lg">내 상품 판매. 수익창출 1단계 필요.</span>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500/50 transition-all">
                              <span className="text-white font-bold block mb-2 text-xl">제휴 프로그램</span>
                              <span className="text-zinc-200 text-lg">타사 상품 커미션. 구독자 1만명 필요.</span>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500/50 transition-all">
                              <span className="text-white font-bold block mb-2 text-xl">쿠팡 파트너스 (구독자 0명)</span>
                              <span className="text-zinc-200 text-lg">설명란/고정댓글 URL 활용. (쇼츠는 프로필 링크 우회)</span>
                           </div>
                        </div>
                     <//>
                  </div>

                  <div className="bg-red-900/20 p-8 lg:p-10 rounded-3xl border border-red-500/30 space-y-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-10"><${LucideIcon} name="AlertTriangle" size=${100} className="text-red-500" /></div>
                     <h4 className="text-2xl font-black text-red-500 flex items-center gap-2">⚠️ '노란 딱지' 없는 업로드 순서</h4>
                     <p className="text-zinc-200 font-bold text-lg">소형 채널 필수 준수 사항</p>

                     <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="p-4 bg-zinc-950 rounded-xl border border-red-500/30 text-center w-full">
                           <span className="text-white font-bold">1. 파일 업로드</span>
                        </div>
                        <${LucideIcon} name="ArrowRight" className="text-zinc-200" size=${24} />
                        <div className="p-4 bg-red-600/20 rounded-xl border border-red-500 text-center w-full">
                           <span className="text-red-400 font-bold underline">2. 제목 & 썸네일 입력</span>
                        </div>
                        <${LucideIcon} name="ArrowRight" className="text-zinc-200" size=${24} />
                        <div className="p-4 bg-zinc-950 rounded-xl border border-red-500/30 text-center w-full">
                           <span className="text-white font-bold">3. 광고 적합성 검토 완료</span>
                        </div>
                        <${LucideIcon} name="ArrowRight" className="text-zinc-200" size=${24} />
                        <div className="p-4 bg-zinc-950 rounded-xl border border-red-500/30 text-center w-full">
                           <span className="text-white font-bold">4. 나머지 설정 및 게시</span>
                        </div>
                     </div>
                     <p className="text-zinc-200 text-lg text-center mt-4">
                        제목/썸네일만으로도 노딱이 붙을 수 있습니다. 1차 AI 검열을 통과한 뒤 공개하십시오. (일부공개 후 <span className="text-white font-bold">30분~1시간</span> 대기 추천)
                     </p>
                  </div>
               </div>
            <//>

            <${Section} id="post_upload">
               <div className="flex items-center gap-4 mb-10 mt-20">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="BarChart2" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">추가: 업로드 후 심폐소생술</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-4">
                     <h4 className="text-xl font-bold text-white flex items-center gap-2"><${LucideIcon} name="Settings" className="text-blue-400" size=${28} /> 최종 화면 & 카드 설정</h4>
                     <ul className="space-y-4 text-zinc-200 text-lg">
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">최종 화면:</strong> '최근 영상' + '지정 영상' (시청자 맞춤 X)</span></li>
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">동영상 카드:</strong> 최대치 5개 전부 사용</span></li>
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">태그:</strong> 핵심 4개 정도만 기입</span></li>
                     </ul>
                  <//>
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-4">
                     <h4 className="text-xl font-bold text-white flex items-center gap-2"><${LucideIcon} name="Activity" className="text-blue-400" size=${28} /> 추세 확인 및 대응</h4>
                     <ul className="space-y-4 text-zinc-200 text-lg">
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">지표:</strong> '노출 클릭률' 집중 (수정 가능 영역)</span></li>
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">수정 타이밍:</strong> 3~7일 사이 (알고리즘 인식 기간)</span></li>
                        <li className="flex gap-2"><span className="text-blue-500">•</span> <span><strong className="text-white">알고리즘 확인:</strong> '이 영상을 추천하는 콘텐츠' 확인</span></li>
                     </ul>
                  <//>
               </div>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-t from-orange-950 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group border-t border-orange-500/20">
                  <div className="absolute inset-0 bg-orange-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-orange-600/10 transition-colors" />
                  <div className="relative z-10 space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic opacity-40 leading-none uppercase">졸업을 축하합니다</h2>
                     <div className="space-y-8">
                        <p className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto font-normal leading-relaxed tracking-tight">
                           이제 당신은 기획, 제작, 분석, 수익화까지<br />
                           <span className="text-orange-400 font-black underline underline-offset-8">모든 무기를 갖춘 프로듀서</span>입니다.
                        </p>
                        <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                           "업로드 후에도 영상을 <span className="text-white font-bold">복기</span>하십시오. <br />왜 터졌는지, 왜 안 터졌는지 집요하게 분석해야 진짜 실력이 됩니다."
                        </p>
                     </div>
                     <button onClick=${() => onNextSeries('series6')} className="px-16 py-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-[3rem] font-bold text-xl transition-all shadow-lg border border-zinc-700">
                        시리즈 6: 광고 수익화 마스터하기
                     </button>
                  </div>
               </div>
            <//>
      </div >
         `;
   };


   // ==========================================
   // SERIES 6: 광고로 큰돈을 버는 다양한 기술
   // ==========================================
   window.Contents.Series6 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[60%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="cyan">공식 시리즈 06<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            광고 수익화의 모든 것:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black">능동적 제안 & 협상 기술</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-cyan-500 pl-6 lg:pl-8 space-y-4 max-w-4xl">
            <p>유튜브를 단순한 취미가 아닌 <span className="text-cyan-400 font-black">수익 창출 비즈니스</span>로 전환하십시오. 광고주를 발굴하고, <span className="text-blue-400 font-black">동업자 핑계 전략</span>으로 몸값을 높이는 실전 통찰을 공개합니다.</p>
          </div>
        </div>

        <${Section} id="intro">
           <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-cyan-500">
              <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                 <${LucideIcon} name="Briefcase" size=${36} className="text-cyan-500" /> 비즈니스 마인드셋
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-100 text-xl leading-relaxed font-normal">
                 <div>
                    광고주를 기다리지 말고 <span className="text-white font-bold">먼저 제안</span>하십시오. 플랫폼 활용부터 직접 컨택까지, 수익을 극대화하는 루트는 다양합니다.
                 </div>
                 <div>
                    특히 소형 채널이 네트워크를 확장하고 단가를 높이는 <span className="text-cyan-400 font-bold underline">협상의 심리 기술</span>은 당신의 통장 잔고를 바꿀 것입니다.
                 </div>
              </div>
           <//>
        <//>

            <${Section} id="passive">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-cyan-600/10"><${LucideIcon} name="Mail" size=${36} className="text-cyan-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 광고주에게 제안받는 법 (수동적)</h2>
               </div>

               <div className="space-y-12">
                  <${Card} className="bg-zinc-900 border-cyan-900/40 p-10 rounded-[2.5rem]">
                     <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3"><${LucideIcon} name="AtSign" size=${32} className="text-cyan-500" /> 기본 세팅: "저에게 연락주세요"</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center">
                           <span className="block text-white font-bold mb-4 text-xl">이메일 노출</span>
                           <p className="text-zinc-200 text-lg leading-relaxed">설명란, 고정댓글, 배너, 우측 상단 등 문턱을 낮추십시오.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center">
                           <span className="block text-white font-bold mb-4 text-xl">채널 키워드</span>
                           <p className="text-zinc-200 text-lg leading-relaxed">마케팅 플랫폼 검색용 키워드(예: 먹방, IT)를 심어두십시오.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center">
                           <span className="block text-white font-bold mb-4 text-xl">SNS 홍보</span>
                           <p className="text-zinc-200 text-lg leading-relaxed">인스타/페북에 <span className="text-cyan-400 font-bold text-lg">'광고 포트폴리오'</span>를 박제하고 성과를 자랑하십시오.</p>
                        </div>
                     </div>
                  <//>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <${Card} className="bg-zinc-900/50 border-zinc-800 p-8 space-y-6">
                        <h4 className="text-xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Server" size=${24} className="text-blue-400" size=${28} /> 광고 매칭 플랫폼 등록</h4>
                        <p className="text-zinc-200 text-lg">최대한 많은 곳에 인플루언서로 등록하여 제안 풀(Pool)을 넓히십시오.</p>
                        <div className="flex flex-wrap gap-2">
                           ${['크레브', '링크튜브', '블링', '유커넥', '셀러뷰', '태그바이', '레뷰', '숏테인먼트'].map(p => html`
                          <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-200 text-base border border-zinc-700">${p}</span>
                       `)}
                        </div>
                     <//>
                     <${Card} className="bg-zinc-900/50 border-zinc-800 p-8 space-y-6">
                        <h4 className="text-xl font-black text-white flex items-center gap-3"><${LucideIcon} name="ShoppingBag" size=${24} className="text-blue-400" size=${28} /> 재능 마켓 활용</h4>
                        <p className="text-zinc-200 text-lg">크몽, 숨고, <span className="text-white font-bold">재능넷, 피움마켓</span> 등에서 'PPL' 키워드로 서비스를 등록하고 홍보하십시오.</p>
                        <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                           <span className="text-blue-300 text-base font-bold flex items-center gap-2 mb-2"><${LucideIcon} name="Lightbulb" size=${18} /> TIP: 채널 통계 공유</span>
                           <span className="text-zinc-200 text-base block">하꼬 채널도 유튜브 스튜디오 통계를 공유하여 신뢰도를 높일 수 있습니다. (연령/성별 데이터)</span>
                        </div>
                     <//>
                     <${Card} className="bg-zinc-900/50 border-zinc-800 p-8 space-y-6 border-t-4 border-t-cyan-500">
                        <h4 className="text-xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Gift" size=${24} className="text-cyan-400" /> '내돈내산' 비공식 협찬</h4>
                        <p className="text-zinc-200 text-lg">자금력 있어 보이는 기업 제품을 직접 리뷰하되, 담당자가 찾을 수 있게 하십시오.</p>
                        <div className="bg-zinc-950 p-6 rounded-xl">
                           <span className="text-cyan-500 font-bold block mb-1">필수 조건</span>
                           <span className="text-zinc-200 text-base">제목/썸네일에 <span className="text-white font-bold underline">브랜드명 키워드</span> 반드시 포함.</span>
                        </div>
                     <//>
                  </div>
               </div>
            <//>

            <${Section} id="active">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="Send" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 직접 제안하는 법 (능동적)</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-zinc-900 p-10 lg:p-14 rounded-[3rem] border border-zinc-800 shadow-xl relative overflow-hidden">
                     <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3"><${LucideIcon} name="Target" size=${32} className="text-blue-500" /> 타겟: 광고계의 '큰 손' 찾기</h3>
                     <p className="text-xl text-zinc-200 mb-8 leading-relaxed">
                        <span className="text-blue-400 font-black">유광기 사이트</span> 등을 활용하여 현재 돈을 풀고 있는 광고주를 찾으십시오.
                     </p>
                     <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-colors">
                              <span className="text-white font-bold block mb-2 text-lg">1. PPL 후원사 리스트</span>
                              <span className="text-zinc-200 text-base font-normal">'모든 광고' 필터로 현재 진행 중인 곳 파악</span>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-colors">
                              <span className="text-white font-bold block mb-2 text-lg">2. 교차 검증</span>
                              <span className="text-zinc-200 text-base font-normal">특정 광고주(예: 브랜드)가 어떤 채널에 뿌리는지 확인</span>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-colors">
                              <span className="text-white font-bold block mb-2 text-lg">3. 가능성 탐색</span>
                              <span className="text-zinc-200 text-base font-normal">업종 불일치 사례(패션→이슈) 주목 (노출만 원함)</span>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-colors">
                              <span className="text-white font-bold block mb-2 text-lg">4. 평균 조회수 계산</span>
                              <span className="text-zinc-200 text-base font-normal">내 채널 조회수가 타겟 평균보다 높다면? <span className="text-blue-400 font-bold">GO!</span></span>
                           </div>
                        </div>

                        <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20 flex items-start gap-6">
                           <${LucideIcon} name="ShoppingBag" size=${24} className="text-blue-500 shrink-0 mt-1" />
                           <div>
                              <span className="text-white font-bold text-lg block mb-1">히든 스킬: 네이버 광고주 쇼핑 검색</span>
                              <p className="text-zinc-200 text-base">
                                 '오메가3', '종합비타민' 등 세부 카테고리 검색 → <span className="text-blue-400 font-bold">연예인을 모델로 쓴 회사</span>는 예산이 큽니다. 침투하십시오.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-8">
                        <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="FileText" size=${28} className="text-blue-400" size=${28} /> 제안서(포트폴리오) 구성</h4>
                        <div className="space-y-6">
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                              <span className="text-blue-500 font-bold block mb-2 text-lg uppercase tracking-wider">Case 1. 협업 경험 다수 (대형)</span>
                              <p className="text-zinc-200 text-base">인사말, 진행 분야 요약, 성과 어필, 재계약 현황, <span className="text-white font-bold">시청자 데이터, 조회수 높은 영상 링크</span>, 단가 안내</p>
                           </div>
                           <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                              <span className="text-blue-500 font-bold block mb-2 text-lg uppercase tracking-wider">Case 2. 협업 경험 부족 (소형)</span>
                              <ul className="space-y-2 text-zinc-200 text-base">
                                 <li className="flex gap-2"><span>✓</span> <span><strong>정성(절박함):</strong> 실제 사용 경험과 관심 어필</span></li>
                                 <li className="flex gap-2"><span>✓</span> <span><strong>무료 홍보 내역:</strong> 커뮤니티 등 자발적 홍보 증거</span></li>
                                 <li className="flex gap-2"><span>✓</span> <span><strong>파격 혜택:</strong> 미달 시 AS 제작, 배너 무료 등</span></li>
                                 <li className="flex gap-2"><span>✓</span> <span><strong>단가:</strong> "예산안 알려주시면 맞추겠습니다" (Open)</span></li>
                              </ul>
                           </div>
                        </div>
                     <//>
                     <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-8">
                        <h4 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Search" size=${28} className="text-blue-400" size=${28} /> 담당자 연락처 디깅(Digging)</h4>
                        <ul className="space-y-4 text-zinc-200 text-lg">
                           <li className="flex gap-3"><span className="text-zinc-200 font-bold">1.</span> <span><strong>공식 홈:</strong> '제휴 문의' 없을 시 개인정보/고객지원 등 <span className="text-white">모든 메일</span>에 발송.</span></li>
                           <li className="flex gap-3"><span className="text-zinc-200 font-bold">2.</span> <span><strong>구글링:</strong> '[회사명] 마케팅 담당자' 검색.</span></li>
                           <li className="flex gap-3"><span className="text-zinc-200 font-bold">3.</span> <span><strong>스토어:</strong> 네이버 스마트스토어 '판매자 정보' 확인.</span></li>
                           <li className="flex gap-3"><span className="text-zinc-200 font-bold">4.</span> <span><strong>게시판:</strong> 기업 홈페이지 제휴 게시판 (포트폴리오 링크 필수).</span></li>
                        </ul>
                     <//>
                  </div>
               </div>
            <//>

            <${Section} id="negotiation_beginner">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-rose-600/10"><${LucideIcon} name="Users" size=${36} className="text-rose-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 초보자 협상: 동업자 전략</h2>
               </div>

               <div className="space-y-8">
                  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] space-y-6">
                     <h3 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="BookOpen" size=${32} className="text-rose-500" /> 필수 개념 & 시세 전략</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-rose-500 font-bold block mb-2 text-lg">초보자 전략</span>
                           <p className="text-zinc-200 text-base">광고 단가 높이기보다 <span className="text-white font-bold">광고 횟수</span>를 늘려 전체 수익 파이를 키우십시오.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-white font-bold block mb-2 text-lg">브랜디드 광고</span>
                           <p className="text-zinc-200 text-base">영상 전체가 광고.<br />단가 높으나 <span className="text-red-400">조회수 폭락 위험</span> 있음.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-white font-bold block mb-2 text-lg">PPL</span>
                           <p className="text-zinc-200 text-base">콘텐츠 내 자연 노출.<br />구독자 1만 미만은 <span className="text-white font-bold">회당 최대 100만원</span> 선.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-white font-bold block mb-2 text-lg">시세 결정 요인</span>
                           <p className="text-zinc-200 text-base">구독자보단 <span className="text-white font-bold">평균 조회수</span>와 시청자 충성도, 전문성이 핵심.</p>
                        </div>
                     </div>
                  </div>

                  <div className="bg-rose-900/10 border border-rose-500/20 p-10 lg:p-14 rounded-[3rem] text-center">
                     <div className="inline-block p-6 bg-rose-950 rounded-full mb-6 border border-rose-500/50">
                        <${LucideIcon} name="Shield" className="text-rose-500" size=${48} />
                     </div>
                     <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">"저도 해드리고 싶은데 동업자가..."</h3>
                     <p className="text-xl text-zinc-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                        거절이나 조율이 필요할 때, <span className="text-rose-400 font-bold underline">가상의 동업자</span>를 내세우십시오. <br />심리적으로 '불가피한 사정'은 거절보다 훨씬 받아들여지기 쉽습니다.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-rose-500 font-black block mb-2">SCENARIO 1: 생색내기</span>
                           <p className="text-zinc-200 italic text-lg leading-relaxed">"동업자는 반대했지만, 제가 책임지고 대표님과 진행하고 싶어서 겨우 설득했습니다!"</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <span className="text-rose-500 font-black block mb-2">SCENARIO 2: 단가 방어</span>
                           <p className="text-zinc-200 italic text-lg leading-relaxed">"이번엔 이 가격에 해드리지만, 동업자 룰 때문에 다음부턴 정상가로 진행해야 할 것 같습니다."</p>
                        </div>
                     </div>
                  </div>


               </div>
            <//>

            <${Section} id="contract">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="FileSignature" size=${36} className="text-purple-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 계약 & 실무 체크리스트</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-6">
                     <h4 className="text-xl font-black text-white flex items-center gap-2"><${LucideIcon} name="PenTool" className="text-purple-400" size=${28} /> 전자계약서 필수 확인</h4>
                     <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                        <li className="flex gap-2"><span className="text-purple-500">●</span> <span><strong>계약금/잔금:</strong> 계약금 50%, 잔금은 업로드 후 7~30일 이내.</span></li>
                        <li className="flex gap-2"><span className="text-purple-500">●</span> <span><strong>동종업계 제한:</strong> 업로드 후 3~6개월. (없을수록 좋음)</span></li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">●</span> <span><strong>연대보증 특약:</strong> 법인 회사라면 <span className="text-white font-bold">대표 연대보증</span>을 꼭 넣으십시오. (파산 대비)</span></li>
                     </ul>
                  <//>
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 space-y-6">
                     <h4 className="text-xl font-black text-white flex items-center gap-2"><${LucideIcon} name="Video" className="text-purple-400" size=${28} /> 제작 실무 프로세스</h4>
                     <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                        <li className="flex gap-2"><span className="text-purple-500">1.</span> <span><strong>대본 재작성:</strong> 광고주 대본은 재미없습니다. 유튜버가 문체에 맞춰 다시 쓰십시오.</span></li>
                        <li className="flex gap-2"><span className="text-purple-500">2.</span> <span><strong>수정/컨펌:</strong> 수정은 2~3회. 영상은 구글 드라이브로 전달.</span></li>
                        <li className="flex gap-2"><span className="text-purple-500">3.</span> <span><strong>업로드 전:</strong> 고정 댓글/설명란 필수 멘트 미리 확보.</span></li>
                     </ul>
                  <//>
               </div>
            <//>

            <${Section} id="negotiation_pro">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-600/10"><${LucideIcon} name="TrendingUp" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 중대형 채널 협상 (다회차)</h2>
               </div>

               <div className="bg-gradient-to-r from-emerald-900/20 to-zinc-900 p-10 lg:p-12 rounded-[3rem] border border-emerald-500/20">
                  <h3 className="text-2xl font-black text-white mb-8">"1회는 비싸게, 묶으면 싸게"</h3>
                  <div className="flex flex-col gap-6">
                     <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800 flex justify-between items-center">
                        <div>
                           <span className="text-emerald-500 font-bold block">전략 1: 앵커링 효과</span>
                           <span className="text-zinc-200">1회 단가를 부담스럽게 높여서 다회차 할인을 매력적이게 만드십시오.</span>
                        </div>
                        <div className="text-right">
                           <span className="text-2xl font-black text-white block">500만</span>
                           <span className="text-zinc-200 text-lg">vs <span className="text-emerald-400 font-black">2,000만 (5회)</span></span>
                        </div>
                     </div>
                     <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                        <span className="text-emerald-500 font-bold block mb-1">전략 2: 추가 혜택 (인센티브)</span>
                        <p className="text-zinc-200">"5회 계약 시에만 **커뮤니티 홍보, 다른 채널 업로드, 조회수 보장** 해드립니다."</p>
                     </div>
                     <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                        <span className="text-emerald-500 font-bold block mb-1">전략 3: 이면 합의</span>
                        <p className="text-zinc-200">계약서엔 제한 기간 길게, 실무자와는 짧게 합의(녹취 필수). 유연함을 발휘하십시오.</p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="management">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-yellow-600/10"><${LucideIcon} name="Smile" size=${36} className="text-yellow-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">6. 광고주 관리 & 채널 꾸미기</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-6">
                     <h4 className="text-2xl font-black text-white flex items-center gap-3">🎁 선물 & AS 전략</h4>
                     <ul className="space-y-4 text-zinc-200 text-lg">
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>5~20만원 선물:</strong> 담당자를 '내 팬'으로 만드십시오. 네고가 쉬워집니다.</span></li>
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>선제적 AS:</strong> 조회수가 안 나왔다면, 연락 오기 전에 먼저 제안(추가 홍보 등)하십시오. '책임감'이 신뢰를 낳습니다.</span></li>
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>포트폴리오:</strong> 성과 좋은 영상은 무조건 링크 모음집에 박제하십시오. (담당자 교체 대비)</span></li>
                     </ul>
                  <//>
                  <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-6">
                     <h4 className="text-2xl font-black text-white flex items-center gap-3">🎨 채널 외관 관리 (구애의 춤)</h4>
                     <ul className="space-y-4 text-zinc-200 text-lg">
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>홈 탭 개편:</strong> 인기 영상, 떡상 영상을 '최근 3개월' 재생목록으로 묶어 상단에 띄우십시오.</span></li>
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>게시 날짜:</strong> 대문에 걸린 영상이 <span className="text-red-400 font-bold">'O년 전'이면 끝</span>입니다. 최신 활성도를 보여주십시오.</span></li>
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>광고 빈도:</strong> 전체 영상의 <span className="text-yellow-500 font-bold">30%</span>가 적당합니다.</span></li>
                        <li className="flex gap-3"><span>•</span> <span className="flex-1"><strong>떡상 시기:</strong> 영상이 터질 때가 기회입니다. 제작을 멈추더라도 제안서를 미친 듯이 뿌리십시오.</span></li>
                     </ul>
                  <//>
               </div>
            <//>

            <${Section} id="etc_tips">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-gray-600/10"><${LucideIcon} name="MoreHorizontal" size=${36} className="text-gray-400" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">7. 기타 광고 노하우 (주의사항)</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  <${Card} className="bg-zinc-950 border-zinc-800 p-8 space-y-4">
                     <h4 className="text-xl font-black text-white">공동구매 (매출 쉐어)</h4>
                     <p className="text-zinc-200 text-lg">매출 없으면 무료 제작 봉사입니다. 시청자 반발도 심하므로 <span className="text-red-400 font-bold">비추천</span>합니다.</p>
                  <//>
                  <${Card} className="bg-zinc-950 border-zinc-800 p-8 space-y-4">
                     <h4 className="text-xl font-black text-white">조회수 정산 방식</h4>
                     <p className="text-zinc-200 text-lg">통신사/VPN 광고에 많습니다. 하이 리스크이므로 조회수당 금액을 <span className="text-white font-bold">최소 1.5배</span> 더 요구하십시오.</p>
                  <//>
                  <${Card} className="bg-zinc-950 border-zinc-800 p-8 space-y-4">
                     <h4 className="text-xl font-black text-white">유연한 광고주 꿀팁</h4>
                     <p className="text-zinc-200 text-lg">주제가 자유롭다면? 핫키워드 영상에 PPL을 태우고, 조회수 확인 후 <strong>안 나오면 PPL 삭제, 잘 나오면 유지</strong>하는 유연함을 발휘하십시오.</p>
                  <//>
               </div>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-t from-cyan-950 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group border-t border-cyan-500/20">
                  <div className="absolute inset-0 bg-cyan-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-cyan-600/10 transition-colors" />
                  <div className="relative z-10 space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic opacity-40 leading-none uppercase">KEEP GROWING</h2>
                     <div className="space-y-8">
                        <p className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto font-normal leading-relaxed tracking-tight">
                           이제 당신은 콘텐츠 제작자를 넘어<br />
                           <span className="text-cyan-400 font-black underline underline-offset-8">비즈니스 협상가</span>입니다.
                        </p>
                        <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                           "돈을 버는 것은 예술이고, 일하는 것도 예술이며,<br />
                           <span className="text-white font-bold">비즈니스는 최고의 예술</span>입니다."
                        </p>
                     </div>

                     <button onClick=${() => onNextSeries('series7')} className="px-16 py-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-[3rem] font-bold text-xl transition-all shadow-lg border border-zinc-700">
                        시리즈 7: 위기 탈출 & 채널 방어술
                     </button>

                  </div>
               </div>
            <//>
      </div >
         `;
   };


   // ==========================================
   // SERIES 7: 유튜버라면 꼭 겪는 위기 상황 실전 해결책
   // ==========================================
   window.Contents.Series7 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
        <div className="py-20 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>
            </div>
          <${Badge} color="red">공식 시리즈 07<//>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
            채널을 지키는 힘:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500 font-black">위기 관리 & 생존 매뉴얼</span>
          </h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-red-500 pl-6 lg:pl-8 space-y-4 max-w-4xl">
            <p>수익 증발, 노란 딱지, 채널 삭제... <span className="text-red-500 font-black">위기는 예고 없이 찾아옵니다.</span> 멘탈이 무너지기 전에, 5대 위기 상황에 대한 <span className="text-rose-400 font-black">확실한 대처법</span>을 무장하십시오.</p>
          </div>
        </div>

        <${Section} id="intro">
           <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-red-500">
              <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                 <${LucideIcon} name="Siren" size=${36} className="text-red-500" /> 5대 핵심 위기
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center hover:border-yellow-500/30 transition-colors">
                     <${LucideIcon} name="AlertTriangle" size=${28} className="mx-auto text-yellow-500 mb-3" />
                     <span className="text-white text-lg font-bold">노란 딱지</span>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center hover:border-blue-500/30 transition-colors">
                     <${LucideIcon} name="TrendingDown" size=${28} className="mx-auto text-blue-500 mb-3" />
                     <span className="text-white text-lg font-bold">무효 트래픽</span>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center hover:border-red-500/30 transition-colors">
                     <${LucideIcon} name="XCircle" size=${28} className="mx-auto text-red-500 mb-3" />
                     <span className="text-white text-lg font-bold">채널 삭제</span>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center hover:border-purple-500/30 transition-colors">
                     <${LucideIcon} name="ShieldAlert" size=${28} className="mx-auto text-purple-500 mb-3" />
                     <span className="text-white text-lg font-bold">해킹</span>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-center hover:border-green-500/30 transition-colors">
                     <${LucideIcon} name="Users" size=${28} className="mx-auto text-green-500 mb-3" />
                     <span className="text-white text-lg font-bold">동업 갈등</span>
                  </div>
               </div>
           <//>
        <//>

            <${Section} id="yellow_label">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-yellow-600/10"><${LucideIcon} name="AlertTriangle" size=${36} className="text-yellow-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 노란 딱지 (광고 제한)</h2>
               </div>

               <div className="bg-zinc-900/50 p-6 lg:p-8 rounded-2xl border border-zinc-800 mb-8">
                  <p className="text-lg lg:text-xl text-zinc-100 leading-relaxed">
                     노딱(노란 딱지)은 영상에 광고가 붙지 않아 조회수 수익을 얻기 어려워지는 현상입니다. <span className="text-yellow-500 font-black">소형 채널에 더 자주 발생</span>하며, 채널 신뢰도가 낮을 때 민감한 이슈나 키워드가 사용되면 <span className="text-yellow-400 font-black">업로드 즉시 노딱이 붙는</span> 경향이 있습니다. 대형 채널은 노딱이 붙지 않아도, 소형 채널은 높은 확률로 제한받을 수 있습니다.
                  </p>
               </div>

               <div className="space-y-12">
                  <div className="bg-yellow-900/10 border border-yellow-500/20 p-8 lg:p-10 rounded-3xl">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h3 className="text-2xl font-black text-white mb-2">AI 1차 검열 우회 및 노딱 테스트 방법</h3>
                           <p className="text-zinc-200 text-lg">AI 1차 검열에 걸리는 주제를 올릴 때, 아래 순서대로 테스트하여 노딱 구간을 찾아내야 합니다.</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-yellow-500 font-black text-xl">STEP 1</span>
                              <span className="text-white font-bold text-lg">최소한의 정보로 1차 업로드</span>
                           </div>
                           <ul className="text-zinc-200 text-lg leading-relaxed space-y-2 ml-4">
                              <li>• 원본 영상 파일명과 제목을 <strong className="text-white">숫자 1</strong>로 변경하고, 썸네일은 자동 지정</li>
                              <li>• 태그는 기입하지 않고, 영상 설명에는 <strong className="text-white">[제휴 문의 : 이메일 주소]</strong>만 기입</li>
                              <li>• 광고 적합성 여부 확인 후, 노딱이 안 붙었다면 <span className="text-yellow-400">10분간 변화가 없는지 지켜본다</span></li>
                           </ul>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-yellow-500 font-black text-xl">STEP 2</span>
                              <span className="text-white font-bold text-lg">문제 구간 수정 및 재업로드</span>
                           </div>
                           <ul className="text-zinc-200 text-lg leading-relaxed space-y-2 ml-4">
                              <li>• 노딱 예상 구간: 시각 자료 교체/흐림 처리, 단어 묵음/삐처리, 자막 수정, 해당 구간 삭제</li>
                              <li>• 문제 구간을 모를 경우, <strong className="text-white">10분 영상을 5분 단위로 분할</strong> 업로드 → 노딱 파일 확인</li>
                              <li>• 노딱이 감지된 파일을 다시 <strong className="text-white">1분 단위로 쪼개</strong> 업로드하며 세밀하게 찾아냄</li>
                           </ul>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-yellow-500 font-black text-xl">STEP 3</span>
                              <span className="text-white font-bold text-lg">제목 테스트 (가장 큰 영향)</span>
                           </div>
                           <ul className="text-zinc-200 text-lg leading-relaxed space-y-2 ml-4">
                              <li>• 제목이 썸네일보다 노딱에 <span className="text-yellow-400">훨씬 직접적인 영향</span>을 줌</li>
                              <li>• 대개 문장 전체가 아닌 <strong className="text-white">특정 키워드 한두 개</strong>가 문제</li>
                              <li>• 원하던 제목으로 1차 테스트 후 노딱 시 키워드 변경 → 2차 테스트, <strong className="text-white">10분 텀</strong>을 두고 최종 확인</li>
                           </ul>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <div className="flex items-center gap-4 mb-3">
                              <span className="text-yellow-500 font-black text-xl">STEP 4</span>
                              <span className="text-white font-bold text-lg">태그 및 영상 설명 기입</span>
                           </div>
                           <ul className="text-zinc-200 text-lg leading-relaxed space-y-2 ml-4">
                              <li>• 태그는 기입하자마자 노딱이 바로 표시되므로, <strong className="text-white">전체 공개 전 1개씩 기입하며 테스트</strong></li>
                              <li>• 영상 설명란은 노출에 큰 영향을 미치지 않으므로, 제목에서 문제가 됐던 키워드는 제외</li>
                           </ul>
                        </div>
                     </div>
                     <div className="mt-6 p-6 bg-zinc-900/50 rounded-xl border border-yellow-500/30">
                        <strong className="text-yellow-500 text-lg block mb-2">💡 무한 노딱 현상 대처</strong>
                        <p className="text-zinc-100 text-lg leading-relaxed">개별 파일 테스트 시 문제가 없었으나 전체 파일을 합치거나 재업로드 시 다시 노딱이 붙는 현상을 '무한 노딱'이라고 합니다. 무한 노딱이 발생하면, 업로드를 <strong className="text-white">반나절~하루 정도 멈추고</strong> 다시 시도하면 해결되는 경우가 많습니다.</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8">
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                           <${LucideIcon} name="HelpCircle" size=${24} className="text-yellow-500" /> 고객센터 어필
                        </h4>
                        <p className="text-zinc-100 text-lg leading-relaxed">
                           <span className="text-white font-bold">'크리에이터 지원팀과 채팅'</span>을 통해 관련 부서 이메일 주소를 확보하십시오. 억울한 사유를 논리적으로 어필하는 것이 중요합니다.
                        </p>
                     <//>
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8">
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                           <${LucideIcon} name="Clock" size=${24} className="text-yellow-500" /> 2차 검토 (정석)
                        </h4>
                        <p className="text-zinc-100 text-lg leading-relaxed">
                           업로드 시 <span className="text-white font-bold">일부 공개</span>를 유지하고 2차 검토(수동 확인)가 풀릴 때까지 기다려야 합니다. 사람의 눈은 AI보다 유연합니다.
                        </p>
                     <//>
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8">
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                           <${LucideIcon} name="Type" size=${24} className="text-yellow-500" /> 제목이 90%
                        </h4>
                        <p className="text-zinc-100 text-lg leading-relaxed">
                           노딱은 이미지보다 <span className="text-yellow-400 font-bold">특정 키워드</span>에 민감합니다. 민감한 키워드는 썸네일에 넣고 제목은 생뚱맞게 짓는 잔꾀도 전략입니다.
                        </p>
                     <//>
                  </div>
               </div>
            <//>

            <${Section} id="invalid_traffic">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="TrendingDown" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 무효 트래픽 (수익 증발)</h2>
               </div>

               <div className="space-y-8">
                  <div className="bg-zinc-900/50 p-6 lg:p-8 rounded-2xl border border-zinc-800 mb-4">
                     <p className="text-lg lg:text-xl text-zinc-100 leading-relaxed">
                        무효 트래픽은 광고주의 비용이나 게시자의 수익을 <span className="text-blue-400 font-black">인위적으로 증가시키기 위한 사기성 트래픽</span>을 의미하며, <span className="text-blue-500 font-black">조회수 수익이 통으로 사라지는 현상('수익 증발')</span>을 초래합니다. 주로 소형 채널이 핫키워드를 사용해 비정상적인 조회수를 터뜨릴 때 자주 발생합니다.
                     </p>
                  </div>
                  <div className="bg-zinc-900 p-10 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-5"><${LucideIcon} name="Ghost" size=${150} className="text-zinc-200" /></div>
                     <h3 className="text-3xl font-black text-white mb-6">"어제 5,000불인데 오늘 50불?"</h3>
                     <p className="text-xl text-zinc-100 mb-8 max-w-3xl leading-relaxed">
                        유튜브 스튜디오의 월 예상 수익은 <span className="text-blue-500 font-bold">다음 달 7일~12일 사이</span>에 확정되어 애드센스에 반영되고, <span className="text-blue-500 font-bold">21~26일 사이</span>에 입금됩니다. 무효 트래픽이 걸리면 예상 수익(예: <span className="text-white font-black">5,000불</span>)이 확정일에 극도로 줄어드는(예: <span className="text-red-500 font-black">50불</span>) 참사가 발생합니다.
                     </p>
                     <div className="bg-red-950/30 p-6 rounded-2xl border border-red-500/30 mb-8">
                        <h4 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2"><${LucideIcon} name="AlertTriangle" size=${24} /> 수익 증발 이후에는 해결 방법이 없음</h4>
                        <ul className="text-zinc-100 text-lg leading-relaxed space-y-2">
                           <li>• 수익 증발이 일어난 이후에는 증발된 수익이 돌아온 사례를 찾기 어렵습니다.</li>
                           <li>• 크리에이터 지원팀에 문의해도 <span className="text-white font-bold">보안상의 이유로 정확한 사유를 안내받기 힘듭니다.</span></li>
                        </ul>
                     </div>

                     <h4 className="text-white font-black text-xl mb-6">대처 방안 (예방 전략)</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <${Card} className="bg-zinc-950 border-blue-900/30 p-6">
                           <span className="text-blue-500 font-bold block mb-2 text-lg">1. 10만뷰 컷</span>
                           <p className="text-zinc-100 text-base leading-relaxed">조회수가 <span className="text-white font-bold">10만 회를 넘어가기 전</span>에 영상을 비공개로 돌리는 방식이 일부 커뮤니티에서 정설로 통용됩니다.</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-blue-900/30 p-6">
                           <span className="text-blue-500 font-bold block mb-2 text-lg">2. 주제 섞기</span>
                           <p className="text-zinc-100 text-base leading-relaxed">핫키워드(예: 손흥민) 관련 영상과 <span className="text-white font-bold">전혀 다른 주제의 영상을 조합</span>하여 업로드하는 전략이 도움이 됩니다.</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-blue-900/30 p-6">
                           <span className="text-blue-500 font-bold block mb-2 text-lg">3. 스팸 댓글 관리</span>
                           <p className="text-zinc-100 text-base leading-relaxed">불법 사이트 홍보를 위한 봇 계정의 스팸 댓글은 무효 트래픽에 영향을 줄 수 있으며, 신고보다는 <span className="text-white font-bold">삭제만</span> 하는 것이 좋습니다.</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-blue-900/30 p-6">
                           <span className="text-blue-500 font-bold block mb-2 text-lg">4. 채널 신뢰도</span>
                           <p className="text-zinc-100 text-base leading-relaxed"><span className="text-white font-bold">구독자 10만 이상</span>의 중대형 채널은 수익 증발을 덜 겪습니다. 짜깁기 소형 채널에 압도적으로 많이 발생합니다.</p>
                        <//>
                     </div>
                     <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20">
                        <h5 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><${LucideIcon} name="TrendingUp" size=${18} /> 최근 동향</h5>
                        <p className="text-zinc-100 text-lg leading-relaxed">최근에는 무효 트래픽 발생 빈도가 <span className="text-white font-bold">예전보다 확실히 줄어든 모습</span>입니다. 무효 트래픽을 인지하고 조심할 필요는 있지만, 지나치게 예민하게 신경 쓸 필요는 없습니다.</p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="termination">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-red-600/10"><${LucideIcon} name="XCircle" size=${36} className="text-red-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 수익 정지 & 채널 삭제</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-zinc-900 p-8 lg:p-12 rounded-[2.5rem] border border-zinc-800">
                     <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex-1">
                           <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                              <${LucideIcon} name="RefreshCw" className="text-red-500" size=${28} /> 재사용 콘텐츠 (Reused Content)
                           </h3>
                           <p className="text-lg lg:text-xl text-zinc-100 leading-relaxed mb-6">
                              재사용된 콘텐츠는 <span className="text-white font-bold">의미 있고 독창적인 해설, 실질적인 수정, 교육적 또는 오락적 가치를 제공하지 않은 채</span> 이미 온라인에 존재하는 콘텐츠를 재활용하는 경우를 말합니다.
                           </p>
                           <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 mb-6">
                              <h5 className="text-red-400 font-bold mb-3">유튜브가 재사용 콘텐츠에 민감한 이유</h5>
                              <ul className="text-zinc-100 text-lg leading-relaxed space-y-2">
                                 <li>• 시청자가 똑같거나 최소한의 수정만 한 콘텐츠를 반복해서 보면 흥미를 잃고 <span className="text-white font-bold">다른 플랫폼으로 이동할 가능성</span>이 높습니다.</li>
                                 <li>• 대량 복제 콘텐츠로 인한 <span className="text-white font-bold">높은 서버 유지 비용</span>과 검색 결과의 혼란을 방지하기 위함입니다.</li>
                              </ul>
                           </div>
                           <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                              <h5 className="text-zinc-200 font-bold mb-3">게임 영상의 독창성 확보</h5>
                              <p className="text-zinc-100 text-lg leading-relaxed">
                                 단순히 게임 화면만 녹화한 영상은 재사용 콘텐츠로 간주되기 쉽습니다. <span className="text-white font-bold">본인의 생각과 목소리가 들어간 실시간 해설, 창의적 편집, 튜토리얼, 비평 등</span>을 녹여 독창성을 확보해야 합니다.
                              </p>
                           </div>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-red-900/30 flex-1">
                           <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2 text-xl">7일 이내 항소(Appeal) 필수 공식</h4>
                           <ul className="space-y-3 text-zinc-100 text-lg leading-relaxed">
                              <li>• <strong>첫 30초:</strong> 채널 URL 표시</li>
                              <li>• <strong>언어:</strong> 한국어 음성 + <span className="text-white font-bold">영어 자막</span> (챗GPT 활용 추천)</li>
                              <li>• <strong>과정 증명:</strong> 대본 작성 과정, 촬영 원본 파일, 편집 프로그램 사용 과정</li>
                              <li>• <strong>데이터:</strong> 영상 반응(조회수), 시청자 데이터 어필</li>
                              <li>• 항소 영상은 <span className="text-white font-bold">일부 공개</span>로 업로드 후, 해당 URL을 제출</li>
                              <li className="text-red-500 font-black">• 절대 기존 영상 삭제 금지 (증거 인멸 간주)</li>
                           </ul>
                           <div className="mt-6 p-6 bg-red-950/30 rounded-xl border border-red-500/30">
                              <p className="text-zinc-100 text-base">이의 신청이 거부되더라도, 수익 정지일로부터 <span className="text-white font-bold">90일이 지나면</span> 다시 YPP(유튜브 수익 창출 프로그램) 참여를 신청할 수 있습니다.</p>
                           </div>
                        </div>
                     </div>
                     <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-500/20">
                        <h4 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2"><${LucideIcon} name="Info" size=${24} /> TTS 및 AI 영상 사용에 대한 오해</h4>
                        <ul className="text-zinc-100 text-lg leading-relaxed space-y-2">
                           <li>• TTS(Text-to-Speech)와 AI 영상 사용이 수익 차단을 유발한다는 소문은 <span className="text-white font-bold">사실이 아닙니다.</span></li>
                           <li>• <span className="text-blue-400 font-bold">직접 쓴 대본을 TTS로 읽거나, AI를 사용한 이미지/영상에 본인의 생각이 들어간 콘텐츠는 허용됩니다.</span></li>
                           <li>• 독창적이고 진정성 있는 콘텐츠라면 TTS나 AI 사용 여부와 관계없이 인정받을 수 있습니다.</li>
                        </ul>
                     </div>
                  </div>

                  <div className="bg-zinc-900 p-8 lg:p-12 rounded-[2.5rem] border border-zinc-800">
                     <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-2">
                        <${LucideIcon} name="ShieldAlert" className="text-red-500" size=${28} /> 커뮤니티 가이드 위반 (Warning)
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center relative opacity-70">
                           <span className="text-zinc-200 text-lg font-bold block mb-2">0단계</span>
                           <span className="text-white font-black text-xl block border-b border-zinc-800 pb-3 mb-3">주의 (Warning)</span>
                           <p className="text-zinc-200 text-base leading-relaxed">'정책 교육 수료' 후 90일 뒤 소멸</p>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-red-900 text-center shadow-lg shadow-red-900/10">
                           <span className="text-red-500 text-lg font-bold block mb-2">1단계</span>
                           <span className="text-white font-black text-xl block border-b border-zinc-800 pb-3 mb-3">1차 경고</span>
                           <p className="text-zinc-100 text-base leading-relaxed"><span className="text-red-400 font-bold">7일간</span> 업로드 및 모든 활동 정지</p>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-red-600 text-center">
                           <span className="text-red-400 text-lg font-bold block mb-2">2단계</span>
                           <span className="text-white font-black text-xl block border-b border-zinc-800 pb-3 mb-3">2차 경고</span>
                           <p className="text-zinc-100 text-base leading-relaxed"><span className="text-red-400 font-bold">14일간</span> 업로드 금지 (90일 유지)</p>
                        </div>
                        <div className="bg-red-600 p-6 rounded-2xl text-center shadow-xl shadow-red-600/20">
                           <span className="text-white/90 text-lg font-bold block mb-2">FINAL</span>
                           <span className="text-white font-black text-xl block border-b border-white/20 pb-3 mb-3">채널 삭제</span>
                           <p className="text-white text-base leading-relaxed">90일 내 3회 위반 시 <span className="font-black">영구 삭제</span></p>
                        </div>
                     </div>
                     <div className="bg-red-950/20 p-6 rounded-2xl border border-red-500/20 mb-8">
                        <h5 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2"><${LucideIcon} name="Skull" size=${18} /> 심각한 사안 (즉시 삭제)</h5>
                        <p className="text-zinc-100 text-lg leading-relaxed">
                           <span className="text-white font-bold">아동 착취, 스팸, 사기, 음란물, 폭력 조장, 명의 도용</span> 등은 경고 없이 바로 삭제될 수 있습니다. 채널 또는 계정이 삭제된 이후에는 <span className="text-red-400 font-bold">신규 채널을 다시 개설할 수 없습니다.</span> 계정이 삭제되면 보유하고 있는 모든 채널이 삭제되며, 신규 계정 우회 활동 적발 시 바로 해지됩니다.
                        </p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <h5 className="text-white font-bold mb-3 text-lg">이의 신청 성공 전략</h5>
                           <p className="text-zinc-100 text-lg leading-relaxed mb-3">
                              분기별로 약 <span className="text-red-500 font-black">290만 개</span>의 채널이 삭제되며, 삭제 사유의 <span className="text-red-500 font-black">81.8%</span>는 <strong>'스팸 및 기만 행위'</strong> 위반입니다.
                           </p>
                           <p className="text-zinc-100 text-lg leading-relaxed mb-3">
                              이의 신청 시 본인 영상이 <span className="text-white font-bold">EDSA(교육, 다큐멘터리, 과학, 예술)</span> 콘텐츠와 밀접하다고 주장하는 것이 유리합니다. 유튜브는 EDSA 콘텐츠에 유연합니다.
                           </p>
                           <p className="text-zinc-200 text-base">이의 신청 성공률은 통계적으로 <span className="text-white font-bold">10~15% 사이</span>로 낮으므로, 채널 초기에는 오해 살 행동을 피해야 합니다.</p>
                        </div>
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                           <h5 className="text-white font-bold mb-3 text-lg">⚠️ '스팸 및 기만 행위' 주의</h5>
                           <p className="text-zinc-100 text-lg leading-relaxed mb-4">
                              문자 그대로의 스팸 외에도, <span className="text-white font-bold">외부 링크 사용</span>(쿠팡 파트너스, 사업 관련 링크 등)이 신규 채널에서 높은 횟수로 사용될 경우 AI의 의심을 사서 발생하기도 합니다.
                           </p>
                           <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                              <span className="text-zinc-200 text-lg font-bold block mb-2">RE-APPEAL 루트</span>
                              <ul className="text-zinc-100 text-base space-y-2">
                                 <li>• X(트위터) <span className="text-white font-bold">@TeamYouTube</span> 멘션</li>
                                 <li>• <span className="text-white font-bold">콘텐츠 분쟁 조정 위원회</span> 조정 신청</li>
                                 <li>• 재항소 신청 경로 1, 2를 통해 채널 복구가 될 때까지 계속 시도</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="copyright">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="Copyright" size=${36} className="text-purple-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 저작권 경고 & 방어</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 text-left">
                     <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <${LucideIcon} name="CircleDot" size=${18} className="text-purple-400" /> 소유권 주장 (Content ID)
                     </h4>
                     <div className="flex items-center gap-3 mb-4">
                        <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded text-lg font-bold border border-yellow-500/20">경고 아님</span>
                        <span className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded text-lg">채널 영향 없음</span>
                     </div>
                     <p className="text-zinc-100 text-lg leading-relaxed mb-4">
                        원작자가 자신의 콘텐츠(음악, 영상 등)가 무단으로 사용되는 것을 감지하고 관리하는 시스템입니다. 자동으로 <span className="text-white font-bold">수익 압수, 시청 차단, 통계 추적</span> 등의 조치를 취할 수 있습니다.
                     </p>
                     <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 mb-4">
                        <h5 className="text-zinc-200 font-bold mb-2">떡상 중인 영상에 소유권 주장이 걸렸을 때</h5>
                        <ul className="text-zinc-100 text-base leading-relaxed space-y-1">
                           <li>• 가장 일반적인 대응: 구간 자르기, 곡 바꾸기, 노래 음소거, 이의 제기</li>
                           <li>• 저작권을 구입한 음악이면 이의 제기로 쉽게 해결됩니다.</li>
                        </ul>
                     </div>
                     <div className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/20">
                        <p className="text-zinc-100 text-base leading-relaxed">
                           ⚠️ <span className="text-white font-bold">'저작권 수확'</span>을 위해 처음엔 무료로 풀었다가 나중에 저작권을 등록하는 사례가 빈번합니다. <span className="text-purple-400 font-bold">반드시 유튜브에서 제공하는 음원만 사용</span>하십시오.
                        </p>
                     </div>
                  <//>
                  <${Card} className="bg-zinc-900 border-zinc-800 p-8 border-l-4 border-l-red-500 text-left">
                     <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <${LucideIcon} name="Zap" size=${18} className="text-red-500" /> 저작권 경고 (Copyright Strike)
                     </h4>
                     <div className="flex items-center gap-3 mb-4">
                        <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-lg font-bold">채널 삭제 위험</span>
                        <span className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded text-lg">90일 내 3회 → 삭제</span>
                     </div>
                     <p className="text-zinc-100 text-lg leading-relaxed mb-4">
                        저작권 경고는 원작자가 취할 수 있는 가장 강경한 조치이며, AI가 아닌 <span className="text-white font-bold">원작자의 직접적인 신고</span>로 이루어집니다.
                     </p>
                     <ul className="text-zinc-100 text-base leading-relaxed space-y-2 mb-4">
                        <li>• <strong>1차 경고:</strong> '저작권 학교'를 수료해야 합니다.</li>
                        <li>• <strong>2차 경고:</strong> 1주일 동안 신규 콘텐츠 게시가 제한됩니다.</li>
                        <li>• <strong>3차 경고:</strong> 채널이 영구적으로 삭제됩니다.</li>
                     </ul>
                     <div className="bg-red-950/30 p-6 rounded-xl border border-red-500/30">
                        <h5 className="text-red-400 font-bold mb-2">'공정 이용'에 대한 환상 버리기</h5>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           한국 법원은 비평이나 교육적 변형이 있더라도 <span className="text-white font-bold">영리성(상업적 목적)</span>이 개입되면 '공정 이용'을 거의 인정하지 않습니다. 저작권법 제35조의 5에 따라 이용의 목적 및 성격, 저작물의 종류, 이용된 부분의 비중과 중요성 등을 종합적으로 판단합니다.
                        </p>
                     </div>
                  <//>
               </div>
               <div className="mt-8 bg-gradient-to-r from-red-950/30 to-zinc-900 p-8 lg:p-10 rounded-[2.5rem] border border-red-500/20 flex flex-col md:flex-row gap-10 items-start overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5"><${LucideIcon} name="Camera" size=${120} /></div>
                  <div className="flex-1 space-y-4">
                     <div className="flex items-center gap-3 flex-wrap">
                        <span className="bg-red-600 text-white text-lg font-black px-3 py-1 rounded uppercase tracking-widest">Strike Trap</span>
                        <h5 className="text-2xl font-black text-white italic tracking-tight">게티 이미지(Getty Image) 주의보</h5>
                     </div>
                     <p className="text-zinc-100 text-lg leading-relaxed">
                        워터마크가 없더라도 파일명 등으로 잡아냅니다. 채널이 크면 <span className="text-red-400 font-bold">한 번에 경고 3회</span>를 넣어 삭제 위협 후 유료 플랜 가입을 강요하는 사례가 빈번하니 <span className="text-white font-black">절대 사용 금지.</span>
                     </p>
                  </div>
                  <div className="w-full md:w-80 space-y-2">
                     <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                        <span className="text-white font-bold block mb-3 text-lg">최후의 합의 전략</span>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           원작자에게 용서를 구하며 <span className="text-white font-bold">'일정 기간 수익 쉐어'</span>를 제안하는 것이 반론 통지보다 현실적일 수 있습니다.
                        </p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="hacking">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-600/10"><${LucideIcon} name="ShieldAlert" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 해킹 예방 & 복구</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/80 p-8 rounded-3xl border border-zinc-800 space-y-6">
                     <h3 className="text-white font-bold flex items-center gap-2 text-xl"><${LucideIcon} name="Lock" className="text-emerald-500" /> 필수 보안 매뉴얼</h3>
                     <ul className="space-y-4 text-zinc-100 text-lg leading-relaxed">
                        <li className="flex gap-3"><span className="text-emerald-500 font-black">•</span> <span><strong>비밀번호 관리:</strong> 다른 사이트와 동일하게 사용하지 않고, <span className="text-white font-bold">3~6개월마다 변경</span>합니다.</span></li>
                        <li className="flex gap-3"><span className="text-emerald-500 font-black">•</span> <span><strong>2단계 인증 필수:</strong> Google 계정 2단계 인증을 반드시 활성화해야 하며, <span className="text-white font-bold">하드웨어 보안키 사용 방식이 가장 안전</span>합니다.</span></li>
                        <li className="flex gap-3"><span className="text-emerald-500 font-black">•</span> <span><strong>링크 검사:</strong> 의심스러운 링크는 <span className="text-white font-bold">노드 VPN 링크 검사기</span> 등을 통해 1차 검사를 실행해야 합니다.</span></li>
                     </ul>
                     <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                        <span className="text-zinc-200 font-bold block mb-2 text-base">⚠️ 유튜브 공식 이메일 확인법</span>
                        <p className="text-zinc-100 text-base leading-relaxed mb-2">
                           유튜브는 <span className="text-white font-bold">'YouTube'</span> 또는 <span className="text-white font-bold">'YouTube creators'</span> 이름으로 <span className="text-emerald-400 font-mono">no-reply@youtube.com</span> 주소를 사용합니다.
                        </p>
                        <p className="text-zinc-200 text-base">해커는 <span className="text-white font-bold">'이메일 스푸핑'</span> 기술로 공식 이메일 주소로 위장하여 보냅니다. 유튜브는 절대 비공개 영상을 공유해달라 하지 않습니다.</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-red-950/20 p-6 rounded-3xl border border-red-500/20">
                        <h4 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2"><${LucideIcon} name="Mail" size=${18} /> 의심스러운 이메일 유형</h4>
                        <ul className="space-y-3 text-zinc-100 text-base leading-relaxed">
                           <li><strong className="text-white">외국 기업 사칭:</strong> 큰 광고비를 제시하며 텔레그램 연락 요청, 특정 자료 다운로드 유도 → 100% 해킹 시도</li>
                           <li><strong className="text-white">저작권 침해 주장:</strong> 유료 음악을 사용하는 경우 확인 필요. 스팸성 도메인과 비교하여 걸러냄</li>
                           <li><strong className="text-white">가짜 계정 알림:</strong> '새로운 기기에서 로그인되었습니다' → 가짜 로그인 링크 전송</li>
                        </ul>
                     </div>
                     <div className="bg-emerald-900/20 p-6 rounded-3xl border border-emerald-900/50 relative overflow-hidden group">
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform"><${LucideIcon} name="Zap" size=${100} /></div>
                        <h4 className="text-emerald-400 font-black mb-3 text-lg">복구 골든타임</h4>
                        <ul className="text-zinc-100 text-base leading-relaxed space-y-2">
                           <li>• <strong>수익 창출된 다른 계정</strong>이나 <strong>지인 계정</strong>의 '크리에이터 지원팀 채팅'을 통해 계정 도용 신고 링크를 받는 것이 가장 빠릅니다.</li>
                           <li>• 안 된다면 X(트위터)에서 <span className="text-white font-bold">@TeamYouTube</span>를 멘션 달고 도움을 요청합니다. (DM을 받을 수 있도록 미리 팔로우)</li>
                        </ul>
                     </div>
                     <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                        <span className="text-white font-bold block mb-3 text-lg">브랜드 계정 백업 전략</span>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           채널을 <span className="text-white font-bold">브랜드 계정</span>으로 전환 후 <span className="text-emerald-400 font-bold">소유권자를 2명으로 지정</span>하면, 한 명의 소유자 계정이 해킹을 당해도 다른 소유자 계정을 통해 채널 복구를 빠르게 할 수 있습니다.
                        </p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="partner">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-rose-600/10"><${LucideIcon} name="Users" size=${36} className="text-rose-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">6. 동업자 갈등</h2>
               </div>

               <div className="bg-rose-950/20 border border-rose-500/20 p-8 lg:p-12 rounded-[3rem] relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-8 opacity-5"><${LucideIcon} name="FileText" size=${150} /></div>
                  <div className="text-center mb-10">
                     <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 italic tracking-tight">"돈 앞에 장사 없습니다."</h3>
                     <p className="text-zinc-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        동업자와의 갈등은 언제든 발생할 수 있으며, 특히 공동 사업 목적으로 유튜브를 시작할 경우 유의해야 합니다. 관련 변호사에게 자문을 받아 <span className="text-rose-400 font-bold">향후 갈등 시 채널의 소유권에 대한 안전 장치</span>를 마련해야 합니다.
                     </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
                     <${Card} className="bg-zinc-950 p-6 border-zinc-800 hover:border-rose-500/30 transition-colors">
                        <span className="text-rose-400 font-bold block mb-3 text-lg">1. 사전 계약 조건</span>
                        <ul className="text-zinc-100 text-base leading-relaxed space-y-2">
                           <li>• 계약 해지 조건</li>
                           <li>• 관계 종료 시 자산/부채 처리 방법</li>
                           <li>• 초기 투자 비용 합의</li>
                           <li>• 비밀 유지 의무(NDA)</li>
                        </ul>
                     <//>
                     <${Card} className="bg-zinc-950 p-6 border-zinc-800 hover:border-rose-500/30 transition-colors">
                        <span className="text-rose-400 font-bold block mb-3 text-lg">2. 수익 분배</span>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           <span className="text-white font-bold">광고, 조회수, 후원</span> 등 모든 수익원을 명시하고 비율을 확실하게 합의해야 합니다. 가장 많은 갈등은 <span className="text-rose-400 font-bold">돈과 노동력 비교</span>에서 발생합니다.
                        </p>
                     <//>
                     <${Card} className="bg-zinc-950 p-6 border-zinc-800 border-l-2 border-l-rose-500/50 hover:border-rose-500/30 transition-colors">
                        <span className="text-rose-400 font-bold block mb-3 text-lg">3. 주소유자 권리 확보</span>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           어떤 상황이 오든 <span className="text-white font-bold">주소유자의 권리</span>를 확보하는 것이 가장 중요합니다. 결별 시에도 <span className="text-white font-bold">콘텐츠 저작권, 채널 소유권, 콘텐츠 재활용 권한</span>은 본인에게 귀속되도록 만들어야 합니다.
                        </p>
                     <//>
                     <${Card} className="bg-zinc-950 p-6 border-zinc-800 hover:border-rose-500/30 transition-colors">
                        <span className="text-rose-400 font-bold block mb-3 text-lg">4. 업무 분장</span>
                        <p className="text-zinc-100 text-base leading-relaxed">
                           향후 기여도에 따른 분쟁을 대비하여 <span className="text-white font-bold">최대한 구체적으로 명시</span>해야 합니다. 누가 어떤 작업을 맡았는지 기록으로 남기십시오.
                        </p>
                     <//>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-2xl border border-rose-500/30 text-center">
                     <h4 className="text-white font-bold text-xl mb-3">💡 가장 유리한 구조</h4>
                     <p className="text-zinc-100 text-lg leading-relaxed">
                        동업은 보통 브랜드 계정 운영이므로, <span className="text-rose-400 font-black">주소유자 계정과 애드센스 계정을 본인 것으로 하는 것</span>이 가장 유리합니다.
                     </p>
                  </div>
               </div>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-t from-red-950 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group border-t border-red-500/20">
                  <div className="absolute inset-0 bg-red-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-red-600/10 transition-colors" />
                  <div className="relative z-10 space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic opacity-40 leading-none uppercase">SURVIVAL</h2>
                     <div className="space-y-8">
                        <p className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto font-normal leading-relaxed tracking-tight">
                           위기는 준비된 자에게 <span className="text-red-500 font-black underline underline-offset-8">기회</span>입니다.<br />
                           이 매뉴얼이 당신의 채널을 지키는 방패가 될 것입니다.
                        </p>
                        <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                           "포기하지 마십시오. 살아남는 자가 강한 자입니다."
                        </p>
                     </div>
                     <button onClick=${() => onNextSeries('series8')} className="px-16 py-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-[3rem] font-bold text-xl transition-all shadow-lg border border-zinc-700">
                        시리즈 8: 알고리즘 사냥 전략
                     </button>
                  </div>
               </div>
            <//>
      </div >
         `;
   };


   // ==========================================
   // SERIES 8: 알고리즘 사냥 & 채널 심폐소생술
   // ==========================================
   window.Contents.Series8 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
         <div className="py-20 lg:py-32 relative">
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
             </div>
           <${Badge} color="purple">공식 시리즈 08<//>
           <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
             알고리즘 사냥:<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-400 font-black">타이밍 & 덫 놓기 전략</span>
           </h1>
           <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-purple-500 pl-6 lg:pl-8 space-y-4 max-w-4xl">
             <p>유튜브 알고리즘은 운이 아닙니다. <span className="text-emerald-400 font-black">기회를 포착하고, 정확한 타이밍에 꽂아 넣는</span> 치밀한 사냥 방식입니다. 이탈한 알고리즘을 되찾는 <span className="text-purple-400 font-bold">심폐소생술</span>까지 공개합니다.</p>
           </div>
         </div>

         <${Section} id="intro">
            <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-purple-500">
               <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                  <${LucideIcon} name="Map" size=${36} className="text-purple-500" /> 알고리즘의 동선 파악
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <p className="text-zinc-200 text-lg leading-relaxed">
                        알고리즘의 동선은 <span className="text-white font-bold">핫키워드</span>가 나타날 때 가장 뚜렷합니다. 핫키워드가 없다면? <span className="text-emerald-400 font-bold">"오래된 인기 주제"</span>가 바로 알고리즘이 지나다니는 검증된 길목입니다.
                     </p>
                  </div>
                  <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center">
                     <span className="text-purple-400 font-black text-5xl block mb-2 uppercase">Tracking</span>
                     <p className="text-zinc-200 text-lg italic">"알고리즘이 지나간 성공의 흔적을 추적하십시오."</p>
                  </div>
               </div>
            <//>
         <//>

            <${Section} id="hunting">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-purple-600/10"><${LucideIcon} name="Crosshair" size=${36} className="text-purple-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 알고리즘 사냥 전략</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-purple-900/20 to-zinc-900 p-8 rounded-[2.5rem] border border-purple-500/20">
                     <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-white">1차 전쟁: 속도전⚡</h3>
                        <span className="px-4 py-2 bg-purple-600 text-white text-lg font-bold rounded-full uppercase tracking-widest">Speed First</span>
                     </div>
                     <ul className="space-y-4 text-zinc-200 text-lg leading-relaxed">
                        <li><strong>목표:</strong> 2~3분대 영상, 1~2시간 내 업로드 (수익보다 <span className="text-purple-400 font-bold">선점</span>이 우선).</li>
                        <li><strong>심리:</strong> 기사 내용을 영상 자료로 <span className="text-white font-bold">재확인</span>하려는 시청자 욕구 공략.</li>
                        <li><strong>주의:</strong> 1분대 영상은 저품질/단순 현장영상으로 인식될 수 있어 비추천.</li>
                     </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-900/20 to-zinc-900 p-8 rounded-[2.5rem] border border-emerald-500/20">
                     <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-white">2차 전쟁: 진짜 주인공💰</h3>
                        <span className="px-4 py-2 bg-emerald-600 text-white text-lg font-bold rounded-full uppercase tracking-widest">Quality Hero</span>
                     </div>
                     <ul className="space-y-4 text-zinc-200 text-lg leading-relaxed">
                        <li><strong>목표:</strong> 8분 이상(중간광고), 흥미로운 비하인드 조사 필수.</li>
                        <li><strong>전략:</strong> 기사보다 <strong className="text-emerald-400">커뮤니티(전문가 의견, 비하인드)</strong> 내용 중점.</li>
                        <li><strong>근성:</strong> 1차가 터졌다면 2차가 안 나와도 <strong className="text-white">최소 4~5차까지</strong> 밀어붙이기 (판단 보류 방지).</li>
                     </ul>
                  </div>
               </div>

               <div className="bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-800">
                  <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2"><${LucideIcon} name="BookOpen" className="text-purple-400" size=${28} /> 뒤늦게 참전할 때: 승리의 제목 패턴</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-emerald-400 font-bold block mb-2">베스트셀러 형식</span>
                        <p className="text-zinc-200">"~했던 이유", "~하는 방법" 등 타이밍 무관하게 통하는 스테디셀러 포맷.</p>
                     </div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-purple-400 font-bold block mb-2">재해석/비하인드</span>
                        <p className="text-zinc-200">"다시 보니 소름", "제3의 인물 등장" 등 새로운 시각 제공.</p>
                     </div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-pink-400 font-bold block mb-2">유명세 결합</span>
                        <p className="text-zinc-200">핫키워드 + "아직 거론 안 된 유명인/사건"을 엮어 새로운 호기심 자극.</p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="trap">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-600/10"><${LucideIcon} name="Anchor" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 비수기: 덫 놓기 (Trap)</h2>
               </div>

               <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-zinc-800 space-y-8">
                  <h3 className="text-2xl font-black text-white italic">"핫키워드가 없다면 길목을 지켜라."</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <${Card} className="bg-zinc-950 border-zinc-800 p-8 text-center group hover:border-emerald-500/50 transition-colors">
                        <${LucideIcon} name="Filter" size=${32} className="mx-auto text-emerald-500 mb-4" />
                        <span className="text-white font-bold block mb-3 text-lg">과거 흔적 (Filter)</span>
                        <p className="text-zinc-200 text-lg leading-relaxed text-balance">6개월 전 영상 + 50만 뷰 이상 + 3개 이상 채널 중복 주제</p>
                     <//>
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8 text-center group hover:border-emerald-500/50 transition-colors">
                        <${LucideIcon} name="Grid" size=${32} className="mx-auto text-emerald-500 mb-4" />
                        <span className="text-white font-bold block mb-3 text-lg">5~10개 설치</span>
                        <p className="text-zinc-200 text-lg leading-relaxed text-balance">주제당 <span className="text-white font-bold">5~10개</span> 덫 투입. 반응 없으면 과감히 철수.</p>
                     <//>
                     <${Card} className="bg-zinc-950 border-zinc-800 p-8 text-center group hover:border-emerald-500/50 transition-colors">
                        <${LucideIcon} name="Stamp" size=${32} className="mx-auto text-emerald-500 mb-4" />
                        <span className="text-white font-bold block mb-3 text-lg">시그니처 목줄</span>
                        <p className="text-zinc-200 text-lg leading-relaxed text-balance">고정 키워드 + 나만의 문구/BGM 조합으로 시청자를 가둠.</p>
                     <//>
                  </div>
                  <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10"><${LucideIcon} name="Zap" size=${64} /></div>
                     <span className="text-emerald-400 font-bold block mb-3 text-2xl">💡 성공 모델: 변화형 (가장 추천)</span>
                     <p className="text-zinc-200 text-xl leading-relaxed">
                        주제 변경은 <span className="text-white font-bold">'여행'</span>과 같습니다. 큰 틀 안에서 세부 목적지를 바꾸는 것이지, 갑자기 뜬금없는 곳으로 가는 게 아닙니다.<br />
                        10번 시도 후 반응이 없으면 세부 주제를 과감히 개편하십시오.
                     </p>
                  </div>
               </div>
            <//>

            <${Section} id="channel_type">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-pink-600/10"><${LucideIcon} name="GitBranch" size=${36} className="text-pink-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 채널 유형별 생존법</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-pink-500/20 space-y-8">
                     <div className="flex items-center gap-3">
                        <span className="bg-pink-600 text-white text-lg font-black px-3 py-1 rounded">B-TYPE</span>
                        <h3 className="text-3xl font-black text-white italic">원조 맛집 (Original)</h3>
                     </div>
                     <p className="text-zinc-200 text-xl leading-relaxed">
                        아류(C)가 나타나도 <span className="text-pink-400 font-bold">절대 스타일을 바꾸지 마십시오.</span> 원조가 흔들리면 그 스타일은 아류의 것이 됩니다. 알고리즘은 잠깐 바람을 피울 뿐, <span className="text-white font-black">6개월</span>만 버티면 시청자는 원조로 돌아옵니다.
                     </p>
                     <div className="p-6 bg-zinc-950 rounded-xl border border-pink-900/30">
                        <span className="text-pink-400 text-lg font-bold block mb-2">정화 작용 대기</span>
                        <p className="text-zinc-200 text-lg">시청자가 아류의 피로감을 느낄 때까지의 숙성 기간 (최소 6개월)</p>
                     </div>
                  </div>

                  <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800 space-y-8">
                     <div className="flex items-center gap-3">
                        <span className="bg-zinc-700 text-white text-lg font-black px-3 py-1 rounded">C-TYPE</span>
                        <h3 className="text-3xl font-black text-white italic">아류 / 급등 / 변형</h3>
                     </div>
                     <ul className="text-zinc-200 text-lg space-y-6 text-left">
                        <li>
                           <span className="text-white font-bold block mb-2 text-xl">• 생산형 카피 공장</span>
                           원조보다 2~3배 더 많이 업로드하여 물리적으로 눈에 띄어야 함.
                        </li>
                        <li>
                           <span className="text-white font-bold block mb-2 text-xl">• 소재빨의 한계 극복</span>
                           조회수 급락 시, 대박 스타일을 믿고 <strong className="text-purple-400">최소 10~20개</strong> 더 투입해 시그니처를 고착화할 것.
                        </li>
                        <li className="p-4 bg-zinc-800 rounded-xl">
                           <span className="text-emerald-400 font-bold block mb-1">• 변형 채널 (Stable)</span>
                           가장 안정적. 성급히 시그니처를 바꾸지 말고, 안 터졌던 소재가 '노잼'이었는지 먼저 비교 분석하십시오.
                        </li>
                     </ul>
                  </div>
               </div>
            <//>

            <${Section} id="revive">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-yellow-600/10"><${LucideIcon} name="Zap" size=${36} className="text-yellow-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 심폐소생술 (Revive)</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-yellow-500/50 transition-colors col-span-1 md:col-span-2 border-l-4 border-l-yellow-500">
                     <span className="text-yellow-500 font-black text-2xl block mb-2 font-serif italic">0. 핫키워드 투입 (정석)</span>
                     <p className="text-zinc-200 text-lg">가장 빠른 노출 장벽 해결법. 기존 시그니처보다 <span className="text-white font-bold">새롭게 개선된 시그니처</span>로 신규 유입을 고정 시청자로 만드십시오.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-yellow-500/50 transition-colors">
                     <span className="text-yellow-500 font-black text-xl block mb-2 font-serif italic">1. 통합본 & 휴가</span>
                     <p className="text-zinc-200 text-lg">15분 ~ 1시간 <span className="text-white font-bold">'순삭 통합본'</span>으로 체류시간 확보 or 1~2달 공백 후 알고리즘 '복귀 버프' 활용.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-yellow-500/50 transition-colors">
                     <span className="text-yellow-500 font-black text-xl block mb-2 font-serif italic">2. 요소 전면 교체</span>
                     <p className="text-zinc-200 text-lg">배경음악 지겨움 해결이 1순위. 음악에 맞춰 <span className="text-white font-bold">목소리(TTS)</span>까지 교체하는 것이 가장 효율적.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-yellow-500/50 transition-colors">
                     <span className="text-yellow-500 font-black text-xl block mb-2 font-serif italic">3. 확률 위주 투입</span>
                     <p className="text-zinc-200 text-lg">평소 업로드 횟수를 줄이고, 채널 지수를 높여줄 <span className="text-white font-bold">필승 소재</span>만 골라서 투입.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-yellow-500/50 transition-colors border-l-2 border-l-red-500">
                     <span className="text-red-500 font-black text-xl block mb-2 font-serif italic">4. 대대적 주제 교체</span>
                     <p className="text-zinc-200 text-lg">수명이 다한 주제는 포기. 현재 가장 활발한 주제로 5~10회 시도 후 안 되면 깔끔히 <span className="text-red-400 font-black">새 채널 시작.</span></p>
                  <//>
               </div>
            <//>

            <${Section} id="tips">
               <${Card} className="bg-zinc-900/50 border-zinc-800 p-8 space-y-6">
                  <h4 className="text-xl font-black text-white flex items-center gap-2"><${LucideIcon} name="Lightbulb" className="text-purple-400" size=${28} /> 설계자의 필살기 Tips</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-200 text-lg leading-relaxed">
                     <li className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-white font-bold text-xl block mb-2">소통은 부수적</span>
                        주제 선정과 시그니처 발굴이 90%입니다. 영상이 재미없으면 소통도 없습니다.
                     </li>
                     <li className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-white font-bold text-xl block mb-2">인트로 최소화</span>
                        "구독 좋아요", 고정 인트로는 최대한 짧게. 본론으로 바로 꽂아 넣으십시오.
                     </li>
                     <li className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-white font-bold text-xl block mb-2">통합본의 힘</span>
                        알고리즘은 긴 체류시간에 반응합니다. 개별 영상보다 통합본이 더 터지는 경우가 많습니다.
                     </li>
                  </ul>
               <//>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-t from-purple-950 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group border-t border-purple-500/20">
                  <div className="absolute inset-0 bg-purple-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-purple-600/10 transition-colors" />
                  <div className="relative z-10 space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic opacity-40 leading-none uppercase">GAME CHANGER</h2>
                     <div className="space-y-8">
                        <p className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto font-normal leading-relaxed tracking-tight">
                           알고리즘을 이해한 당신은 이제<br />
                           운에 맡기는 플레이어가 아닌 <span className="text-purple-400 font-black underline underline-offset-8">설계자</span>입니다.
                        </p>
                     </div>
                     <button onClick=${() => onNextSeries('series9')} className="px-16 py-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-[3rem] font-bold text-xl transition-all shadow-lg border border-zinc-700">
                        시리즈 9: AI 활용 & 효율 200%
                     </button>
                  </div>
               </div>
            <//>
       </div >
         `;
   };

   // ==========================================
   // SERIES 9: 7년째 성공 중인 유튜버의 AI 활용법
   // ==========================================
   window.Contents.Series9 = ({ onNextSeries }) => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-20" >
         <div className="py-20 lg:py-32 relative">
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px]"></div>
             </div>
           <${Badge} color="indigo">공식 시리즈 09<//>
           <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
             AI 혁명과 생산성:<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 font-black">10배 빠른 성장 전략</span>
           </h1>
           <div className="text-xl md:text-2xl text-white leading-relaxed font-normal border-l-4 border-indigo-500 pl-6 lg:pl-8 space-y-4 max-w-4xl">
             <p>7년 차 유튜버가 검증한 <span className="text-indigo-400 font-black">11가지 AI 도구 & 실전 프롬프트.</span><br/>단순한 기술 소개가 아닙니다. <span className="text-violet-400 font-bold">제작 시간을 단축하고 경쟁자와의 격차</span>를 현실적으로 벌리는 무기입니다.</p>
           </div>
         </div>

         <${Section} id="intro">
            <${Card} className="p-10 lg:p-14 space-y-8 bg-zinc-900/80 border-l-4 border-indigo-500">
               <h2 className="text-3xl lg:text-4xl font-black text-white flex items-center gap-6">
                  <${LucideIcon} name="Cpu" size=${36} className="text-green-400" /> AI 활용의 본질
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-zinc-200">
                  <div className="space-y-4">
                     <span className="text-white font-black block text-lg uppercase tracking-widest text-zinc-200">The Purpose</span>
                     <p className="leading-relaxed text-xl text-zinc-200">
                        복잡한 노가다(누끼 따기, 화질 보정, 잡음 제거)는 AI에게 맡기고 당신은 <span className="text-indigo-400 font-bold underline underline-offset-4">소재 발굴과 킬링포인트 설계</span>에만 집중하십시오.
                     </p>
                  </div>
                  <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center flex flex-col justify-center">
                     <span className="text-zinc-200 text-lg font-bold mb-2 uppercase tracking-tighter">AI Efficiency</span>
                     <span className="text-white font-black text-5xl italic leading-none text-indigo-400">10X FASTER</span>
                  </div>
               </div>
            <//>
         <//>

            <${Section} id="chatgpt">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-green-600/10"><${LucideIcon} name="Bot" size=${36} className="text-green-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">1. 챗GPT: 소재 & 대본 혁명</h2>
               </div>

               <div className="space-y-12">
                  <div className="bg-zinc-900 p-8 lg:p-14 rounded-[4rem] border border-zinc-800 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform"><${LucideIcon} name="Zap" size=${150} /></div>
                     <h3 className="text-2xl lg:text-3xl font-black text-white mb-8 italic">🎯 킬링포인트 발굴 프롬프트 (50만 뷰 적중)</h3>
                     <div className="space-y-8">
                        <div className="bg-zinc-950 p-10 rounded-3xl border border-dashed border-green-700/50 font-mono text-lg leading-relaxed text-zinc-200 relative">
                           <span className="absolute -top-3 left-6 bg-green-600 text-white text-lg px-3 py-1 rounded font-black">PROMPT COPY</span>
                           <span className="text-green-500 font-bold"># 설정:</span> 핵심 키워드 [미국], 고정 문구 [작정하고], [벌어지는 일]<br /><br />
                           "미국 군사력 관련 내용 중, <span className="text-white font-bold">최소 50만 회 이상 조회수</span>가 나왔던 주제와 제목을 분석해줘.<br />
                           이를 기반으로 '[핵심키워드]가 [고정문구]하면 [벌어지는 일]' 형식의 <strong>제목 10개를 킬링포인트가 느껴지게 뽑아줘.</strong>"
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                           <${Card} className="flex-1 bg-zinc-950 border-zinc-800 p-8">
                              <h4 className="text-white font-bold mb-3 text-xl">대본의 '시장성'</h4>
                              <p className="text-zinc-200 text-lg leading-relaxed">대본은 떡상 비중이 낮습니다. AI가 교정해 준 '읽을 만한 수준'이면 충분합니다. 핵심은 <strong className="text-white">흥미로운 자료 조사</strong>입니다.</p>
                           <//>
                           <${Card} className="flex-1 bg-zinc-950 border-zinc-800 p-8 border-l-4 border-l-green-500">
                              <h4 className="text-white font-bold mb-3 text-xl">한 끗 차이 (Killer Point)</h4>
                              <p className="text-zinc-200 text-lg leading-relaxed">AI는 '감각'이 없습니다. 백만 뷰를 가르는 결정적 킬링포인트 문구는 <span className="text-green-400 font-bold">사람이 직접</span> 다듬어야 합니다.</p>
                           <//>
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="translation">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="Globe" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">2. 정보 수집 & 기획 도구</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-blue-500 transition-all group">
                     <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <${LucideIcon} name="Languages" size=${32} />
                     </div>
                     <h3 className="text-2xl font-black text-white mb-3">Immersive Translate</h3>
                     <p className="text-zinc-200 text-lg leading-relaxed mb-4">크롬 확장 프로그램 최강자. 웹페이지 및 유튜브 이중 언어 자막 지원.</p>
                     <span className="text-lg font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded">해외 벤치마킹 필수</span>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-blue-500 transition-all group">
                     <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <${LucideIcon} name="FileSearch" size=${32} />
                     </div>
                     <h3 className="text-2xl font-black text-white mb-3">Lilys AI</h3>
                     <p className="text-zinc-200 text-lg leading-relaxed mb-4">유튜브/PDF/음성 요약 전문. 긴 영상을 짧게 요약해 엑기스만 추출.</p>
                     <span className="text-lg font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded">시간 80% 단축</span>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 hover:border-blue-500 transition-all group">
                     <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <${LucideIcon} name="Network" size=${32} />
                     </div>
                     <h3 className="text-2xl font-black text-white mb-3">Whimsical</h3>
                     <p className="text-zinc-200 text-lg leading-relaxed mb-4">AI 마인드맵. 한글 호환성이 미로(Miro)보다 뛰어남. 꼬리에 꼬리를 무는 아이디어 확장.</p>
                     <span className="text-lg font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded">기획 체계화</span>
                  <//>
               </div>
            <//>

            <${Section} id="quality">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-pink-600/10"><${LucideIcon} name="Waves" size=${36} className="text-pink-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">3. 이미지 & 오디오 보정</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-zinc-900 p-10 rounded-[3rem] border border-zinc-800 space-y-8">
                     <h3 className="text-3xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Camera" size=${32} className="text-pink-500" /> 썸네일 고화질 매뉴얼</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                           <span className="text-pink-400 font-bold block mb-2 text-lg italic">누끼 & 지우개</span>
                           <p className="text-zinc-200 text-lg leading-tight">• <strong>remove.bg:</strong> 배경 자동 제거<br />• <strong>hama:</strong> 불필요한 물체 정밀 제거</p>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                           <span className="text-pink-400 font-bold block mb-2 text-lg italic">업스케일링</span>
                           <p className="text-zinc-200 text-lg leading-tight">• <strong>photoaid / Imglarger:</strong> 저화질 이미지를 고품질로 확대 (허접한 인상 방지)</p>
                        </div>
                     </div>
                  </div>
                  <div className="bg-zinc-900 p-10 rounded-[3rem] border border-zinc-800 space-y-8">
                     <h3 className="text-3xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Mic" size=${32} className="text-pink-500" /> 오디오 퀄리티업</h3>
                     <div className="space-y-4">
                        <${Card} className="bg-zinc-950 border-zinc-800 p-8">
                           <div className="flex justify-between items-start mb-2">
                              <span className="text-white font-bold text-xl">Moises App (보컬 분리)</span>
                              <span className="text-lg bg-pink-600 text-white px-3 py-1 rounded font-bold">강력 추천</span>
                           </div>
                           <p className="text-zinc-200 text-lg">배경음악 지우고 목소리만 추출. 4트랙 지원(드럼/베이스 등). 분리 퀄리티 No.1.</p>
                        <//>
                        <${Card} className="bg-zinc-950 border-zinc-800 p-8">
                           <div className="flex justify-between items-start mb-2">
                              <span className="text-white font-bold text-xl">Adobe Podcast (잡음 제거)</span>
                           </div>
                           <p className="text-zinc-200 text-lg">야외 녹음, 울림 심한 곳도 스튜디오급 보정. 무료로도 훌륭한 결과물.</p>
                        <//>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="video_ai">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-violet-600/10"><${LucideIcon} name="Video" size=${36} className="text-violet-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">4. 편집 & 아바타 혁명</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 text-center space-y-4">
                     <${LucideIcon} name="UserRound" size=${40} className="mx-auto text-violet-400" />
                     <h4 className="text-white font-bold text-xl">Unscreen</h4>
                     <p className="text-zinc-200 text-lg">영상 누끼 따기. GIF 지원. 파일 업로드만으로 인물 배경 즉시 분리.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 text-center space-y-4">
                     <${LucideIcon} name="Eye" size=${40} className="mx-auto text-violet-400" />
                     <h4 className="text-white font-bold text-xl">시선 보정</h4>
                     <p className="text-zinc-200 text-lg">캡컷(PC) → 동영상 → 기본 → <strong>시선 맞춤.</strong> 시청자 소통 몰입도 극대화.</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 text-center space-y-4">
                     <${LucideIcon} name="Smartphone" size=${40} className="mx-auto text-violet-400" />
                     <h4 className="text-white font-bold text-xl">AICO (쇼츠)</h4>
                     <p className="text-zinc-200 text-lg">유튜브 링크로 쇼츠 자동 생성. (서브 채널용 활용 추천)</p>
                  <//>
                  <${Card} className="bg-zinc-900 p-8 border-zinc-800 text-center space-y-4">
                     <${LucideIcon} name="UserPlus" size=${40} className="mx-auto text-violet-400" />
                     <h4 className="text-white font-bold text-xl">HeyGen</h4>
                     <p className="text-zinc-200 text-lg">이미지 한 장으로 다국어 립싱크 더빙. 얼굴 노출 부담 해결.</p>
                  <//>
               </div>

               <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 p-12 rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5"><${LucideIcon} name="Star" size=${100} /></div>
                  <h4 className="text-3xl font-black text-white mb-8 italic">전문가들이 몰래 쓰는 도구</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                     <div className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-violet-400 font-bold block text-xl">자메이크 (Jamake)</span>
                        <p className="text-zinc-200">국내 대형 채널 1위 번역 자막 서비스. 해외 시청자 공략 필수 단계.</p>
                     </div>
                     <div className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-violet-400 font-bold block text-xl">Suno (AI 음악)</span>
                        <p className="text-zinc-200">독보적인 인트로/BGM 제작. (추성훈 채널 마쵸맨 인트로곡 등)</p>
                     </div>
                     <div className="space-y-3 bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                        <span className="text-violet-400 font-bold block text-xl">Yarn.co / 후킹밈</span>
                        <p className="text-zinc-200">영상 중간에 삽입할 밈 영상, 후킹 소스 발굴 창고.</p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="tools">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-indigo-600/10"><${LucideIcon} name="Tool" size=${36} className="text-indigo-400" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter">5. 기타 필수 유틸리티</h2>
               </div>
               <div className="bg-zinc-900 p-12 rounded-[3rem] border border-zinc-800">
                  <p className="text-zinc-200 text-xl leading-relaxed text-center">
                     위에서 소개한 도구들 외에 <strong>캡컷(CapCut), 캔바(Canva), 픽셀(Pexels)</strong> 등은 이미 기본입니다.<br />
                     중요한 것은 도구의 개수가 아니라, 당신의 기획 의도를 얼마나 <strong className="text-white">정확히 구현해내느냐</strong>입니다.
                  </p>
               </div>
            <//>

            <${Section} id="outro">
               <div className="bg-gradient-to-t from-indigo-950 to-black p-12 lg:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group border-t border-indigo-500/20">
                  <div className="absolute inset-0 bg-indigo-600/5 opacity-50 blur-[200px] pointer-events-none group-hover:bg-indigo-600/10 transition-colors" />
                  <div className="relative z-10 space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic opacity-40 leading-none uppercase">EFFICIENCY</h2>
                     <div className="space-y-8">
                        <p className="text-2xl lg:text-4xl text-white max-w-5xl mx-auto font-normal leading-relaxed tracking-tight">
                           AI는 도구일 뿐입니다. 하지만 그 도구를 <span className="text-indigo-400 font-black underline underline-offset-8">완벽히 다루는 순간</span><br />
                           당신은 10인의 몫을 하니 1인 기업이 됩니다.
                        </p>
                        <button onClick=${() => onNextSeries('series10')} className="px-16 py-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-[3rem] font-bold text-xl transition-all shadow-lg border border-zinc-700">
                           마지막 시리즈 10: 1인 기업 & 법률 마스터
                        </button>
                     </div>
                  </div>
               </div>
            <//>
       </div >
         `;
   };
   // ==========================================
   // SERIES 10: 유튜브 채널을 돈 잘 버는 회사로 운영하는 노하우
   // ==========================================
   window.Contents.Series10 = () => {
      const html = getHtml();
      const { Section, LucideIcon, Highlight, Card, Badge } = window;

      return html`
         <div className="animate-fadeIn pb-24" >
            <${Section} id="intro">
               <div className="py-20 lg:py-32 relative">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                     <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]"></div>
                     <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[100px]"></div>
                  </div>
                  <${Badge} color="amber">공식 시리즈 10<//>
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-tight mt-6 mb-8 text-white">
                     유튜브 채널 경영:<br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 font-black">돈 잘 버는 회사로 키우기</span>
                  </h1>
                  <div className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-normal border-l-4 border-amber-500 pl-6 lg:pl-8 space-y-4 max-w-4xl">
                     <p>유튜브는 단순한 취미가 아니라 **"돈 잘 버는 회사"**여야 합니다.<br />피땀 흘린 수익을 지키는 <span className="text-amber-400 font-bold">세무, 법률, 시스템의 모든 노하우</span>를 공개합니다.</p>
                  </div>
               </div>
            <//>

            <${Section} id="biz_start">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-amber-600/10"><${LucideIcon} name="Coins" size=${36} className="text-amber-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">1. 사업자 등록 & W-8BEN</h2>
               </div>

               <div className="max-w-5xl mx-auto">
                  <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-8">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <h3 className="text-3xl font-black text-white flex items-center gap-3"><${LucideIcon} name="CheckCircle" size=${36} className="text-amber-500" /> 사업자 등록 골든타임</h3>
                        <div className="bg-zinc-950 px-6 py-3 rounded-xl border border-zinc-800 flex items-baseline gap-2">
                           <span className="text-zinc-200 text-lg font-bold">기준 소득</span>
                           <span className="text-4xl font-black text-amber-500">2,400<span className="text-lg ml-1 text-zinc-200">만원/年</span></span>
                        </div>
                     </div>

                     <p className="text-zinc-200 text-xl leading-relaxed border-l-4 border-zinc-700 pl-6">
                        연 소득 2,400만원 이상 시 사업자 등록 필수.<br />
                        이때부터가 단순 용돈 벌이가 아닌, <span className="text-white font-bold">경비 처리 및 세금 환급이 시작되는 진짜 사업</span>입니다.
                     </p>

                     <div className="bg-amber-950/20 p-8 rounded-3xl border border-amber-500/20 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <span className="text-zinc-200 font-bold block mb-1">미국 원천징수 (미제출 시)</span>
                           <div className="flex items-end gap-3">
                              <span className="text-red-500 font-black text-5xl">30%</span>
                              <span className="text-red-400 font-bold text-lg pb-1">압수</span>
                           </div>
                           <p className="text-zinc-200 text-base mt-2">1억 뷰 기준 약 <span className="text-zinc-200 font-bold">210만원 손해</span></p>
                        </div>
                        <div className="space-y-2 border-t md:border-t-0 md:border-l border-amber-500/20 pt-6 md:pt-0 md:pl-8">
                           <span className="text-zinc-200 font-bold block mb-1">조세 조약 (TIN 제출 시)</span>
                           <div className="flex items-end gap-3">
                              <span className="text-emerald-500 font-black text-5xl">10%</span>
                              <span className="text-emerald-400 font-bold text-lg pb-1">특례 적용</span>
                           </div>
                           <p className="text-zinc-200 text-base mt-2">반드시 <span className="text-white font-bold">W-8BEN</span> 제출 필수</p>
                        </div>
                     </div>
                  <//>
               </div>

               <${Section} id="biz_type">
                  <div className="flex items-center gap-4 mb-10">
                     <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-amber-600/10"><${LucideIcon} name="Scale" size=${36} className="text-amber-500" /></span>
                     <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">2. 사업자 유형 & 과세 선택</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-lg text-lg font-bold">921505</span>
                           <h3 className="text-2xl font-black text-white">미디어콘텐츠 창작업</h3>
                        </div>
                        <p className="text-zinc-200 text-lg leading-relaxed mb-6 flex-grow">인적/물적 시설 보유 (과세사업자). 부가세 환급 가능하며 경비 처리 범위가 넓음.</p>
                        <ul className="space-y-3 text-zinc-200 text-lg bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <li>• 일반과세 유리 (매입세액 공제)</li>
                           <li>• 연 매출 1.04억 이상 추천</li>
                        </ul>
                     <//>
                     <${Card} className="bg-zinc-900 border-zinc-800 p-8 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-lg text-lg font-bold">940306</span>
                           <h3 className="text-2xl font-black text-white">1인 미디어 콘텐츠</h3>
                        </div>
                        <p className="text-zinc-200 text-lg leading-relaxed mb-6 flex-grow">시설 없이 혼자 작업 (면세사업자). 부가세 신고 의무 없으나 환급 불가능.</p>
                        <ul className="space-y-3 text-zinc-200 text-lg bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
                           <li>• 간편한 세무 관리</li>
                           <li>• <strong className="text-amber-500">영세율 포기</strong> (해외 수익 부가세 환급 불가)</li>
                        </ul>
                     <//>
                  </div>
               <//>

               <${Section} id="tax_save">
                  <div className="flex items-center gap-4 mb-10">
                     <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-amber-600/10"><${LucideIcon} name="PiggyBank" size=${36} className="text-amber-500" /></span>
                     <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">3. 세금 감면의 모든 것</h2>
                  </div>

                  <${Card} className="bg-zinc-900 border-zinc-800 p-10 space-y-8 rounded-[3rem]">
                     <h3 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="ShieldCheck" size=${32} className="text-amber-500" /> 청년창업 세액감면 (최대 100%)</h3>
                     <p className="text-zinc-200 text-xl leading-relaxed">
                        <span className="text-white font-bold underline decoration-amber-500 underline-offset-4">미디어콘텐츠 창작업(921505)</span> 등록 시 5년간 소득세 파격 감면.<br />
                        만 15~34세 청년이라면 지역 불문 최소 50% 보장.
                     </p>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="bg-zinc-950 p-8 rounded-3xl text-center border border-zinc-800 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
                           <span className="text-amber-500 font-bold block text-lg mb-2">수도권 밖 (지방)</span>
                           <span className="text-white font-black text-6xl font-serif">100%</span>
                           <span className="block text-zinc-200 text-lg mt-2">법인세/소득세 전액 면제</span>
                        </div>
                        <div className="bg-zinc-950 p-8 rounded-3xl text-center border border-zinc-800 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-zinc-800/20 group-hover:bg-zinc-800/40 transition-colors"></div>
                           <span className="text-zinc-200 font-bold block text-lg mb-2">수도권 내</span>
                           <span className="text-white font-black text-6xl font-serif">50%</span>
                           <span className="block text-zinc-200 text-lg mt-2">반액 면제</span>
                        </div>
                     </div>
                     <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl flex items-start gap-6">
                        <${LucideIcon} name="AlertTriangle" className="text-red-500 shrink-0 mt-1" />
                        <p className="text-red-200 text-lg leading-relaxed">
                           <strong>🚨 2026년 개정 예고:</strong> 수도권 감면율 50% → <strong>25% 축소</strong> 예정.<br />
                           사업자 등록은 반드시 <span className="text-white font-bold border-b-2 border-red-500">2026년 이전</span>에 완료하십시오.
                        </p>
                     </div>
                  <//>
               </div>
            <//>


            <${Section} id="tax_tip">
               <div className="flex items-center gap-4 mb-10">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-amber-600/10"><${LucideIcon} name="Receipt" size=${36} className="text-amber-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">4. 필수 경비 & 세무 상식</h2>
               </div>
               <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] space-y-8">
                  <h3 className="text-2xl font-black text-white flex items-center gap-3"><${LucideIcon} name="Receipt" size=${32} className="text-amber-500" /> 처리 가능한 주요 경비</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center text-lg font-bold text-zinc-200 hover:text-white transition-colors">장비 구입비<br /><span className="text-lg font-normal text-zinc-200">카메라/PC</span></div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center text-lg font-bold text-zinc-200 hover:text-white transition-colors">임차료/공과금<br /><span className="text-lg font-normal text-zinc-200">사무실/전기</span></div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center text-lg font-bold text-zinc-200 hover:text-white transition-colors">마케팅 비용<br /><span className="text-lg font-normal text-zinc-200">광고/이벤트</span></div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-center text-lg font-bold text-zinc-200 hover:text-white transition-colors">차량/식대<br /><span className="text-lg font-normal text-zinc-200">업무용</span></div>
                  </div>
                  <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 flex items-start gap-6">
                     <${LucideIcon} name="Info" className="text-blue-500 shrink-0 mt-1" />
                     <p className="text-zinc-200 text-lg leading-relaxed">
                        <span className="text-white font-bold">영세율(0%) 적용:</span> 외화 입금 증명서만 있다면, 해외 수익(유튜브 정산금)은 부가세가 0%입니다.<br />
                        즉, 장비 구입 시 낸 <span className="text-amber-500 font-bold">부가세 10%를 전액 현금으로 환급</span>받습니다. (일반과세자 한정)
                     </p>
                  </div>
               </div>
            <//>

            <${Section} id="hiring">
               <div className="flex items-center gap-4 mb-10 mt-16">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-blue-600/10"><${LucideIcon} name="Users" size=${36} className="text-blue-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">5. 인력 채용 & 계약</h2>
               </div>

               <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                     <div className="space-y-4">
                        <span className="text-blue-500 font-bold flex items-center gap-2 text-xl"><${LucideIcon} name="Globe" size=${24} /> 구인 플랫폼</span>
                        <ul className="text-zinc-200 space-y-2">
                           <li>• <strong>편집몬:</strong> 유튜버 전용</li>
                           <li>• <strong>필름메이커스:</strong> 촬영/출연</li>
                           <li>• <strong>프로임:</strong> 한국어 능통 외국인 비서</li>
                        </ul>
                     </div>
                     <div className="space-y-4">
                        <span className="text-blue-500 font-bold flex items-center gap-2 text-xl"><${LucideIcon} name="TestTube" size=${24} /> 1분 테스트</span>
                        <p className="text-zinc-200 leading-relaxed">
                           원본 소스와 가이드를 주고 <span className="text-white font-bold">1분 분량</span> 테스트 진행.<br />
                           편집 프로그램 <strong>버전 일치</strong> 여부 확인 필수.
                        </p>
                     </div>
                     <div className="space-y-4">
                        <span className="text-blue-500 font-bold flex items-center gap-2 text-xl"><${LucideIcon} name="FileSignature" size=${24} /> 계약 필수</span>
                        <p className="text-zinc-200 leading-relaxed">
                           <strong>프리랜서 용역 계약서</strong> 작성 시 <span className="text-white font-bold">저작권/산출물 소유권 귀속</span> 조항 반드시 포함.
                        </p>
                     </div>
                  </div>

                  <div className="bg-zinc-950 p-8 rounded-2xl border border-blue-900/20 text-center">
                     <h4 className="text-white font-bold mb-4 text-xl">💡 작가 업무 분담 가이드</h4>
                     <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
                        <div className="text-zinc-200">
                           <span className="text-white font-black block mb-1">내 업무</span>
                           주제 선정, 썸네일, 목차 구성,<br />킬링포인트 위치 지정
                        </div>
                        <div className="hidden md:block w-px bg-zinc-800"></div>
                        <div className="text-zinc-200">
                           <span className="text-blue-400 font-black block mb-1">작가 업무</span>
                           세부 자료 조사, 스크립트 초안,<br />사실 관계 검증
                        </div>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="legal">
               <div className="flex items-center gap-4 mb-10 mt-16">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-red-600/10"><${LucideIcon} name="Gavel" size=${36} className="text-red-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">6. 법적 리스크 방어</h2>
               </div>

               <div className="grid grid-cols-1 gap-8">
                  <div className="bg-red-950/10 border border-red-500/20 p-10 rounded-3xl space-y-8">
                     <h3 className="text-2xl font-black text-white flex items-center gap-3 italic"><${LucideIcon} name="ShieldAlert" size=${32} className="text-red-500" /> 불법 도용 대응 프로토콜</h3>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-200 text-lg">
                        <li className="p-8 bg-zinc-950 rounded-2xl border border-zinc-800 h-full">
                           <span className="text-white font-bold block mb-4 text-2xl">FB / IG / TikTok 신고</span>
                           <p className="mb-4">반드시 <span className="text-red-400 font-bold">영어</span>로 신고하십시오. 한글보다 처리 속도가 압도적으로 빠릅니다.</p>
                           <ul className="text-base text-zinc-200 list-disc list-inside space-y-2">
                              <li>증빙: 유튜브 스튜디오 '일치 동영상' 캡처</li>
                              <li>틱톡: 1주일 미처리 시 <strong className="text-zinc-200">반복 신고 필수</strong></li>
                           </ul>
                        </li>
                        <li className="p-8 bg-zinc-950 rounded-2xl border border-zinc-800 h-full">
                           <span className="text-white font-bold block mb-4 text-2xl">민사 법률 비용 보험</span>
                           <p className="mb-4">개인 보험 특약에 <strong>'민사소송 법률 비용손해'</strong> 추가.</p>
                           <p className="text-base text-zinc-200">
                              적은 비용으로 변호사 선임비 지원.<br />
                              (연 1회 청구 가능, 가입 전 사건 불기)
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            <//>

            <${Section} id="profit">
               <div className="flex items-center gap-4 mb-10 mt-16">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-emerald-600/10"><${LucideIcon} name="TrendingUp" size=${36} className="text-emerald-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">7. 부가 수익 & 지원 사업</h2>
               </div>

               <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] space-y-10">
                  <h3 className="text-3xl font-black text-white flex items-center gap-4 italic"><${LucideIcon} name="Zap" size=${36} className="text-emerald-500" /> 캐시플로우 다변화 노하우</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-500/50 transition-colors h-full flex flex-col">
                        <span className="text-zinc-200 block mb-4 uppercase tracking-widest text-lg font-bold">브랜드 확장</span>
                        <span className="text-white text-2xl font-black block mb-4">공간 대여 비즈니스</span>
                        <p className="text-zinc-200 text-lg leading-relaxed mb-6 flex-grow">
                           촬영 없는 날 스튜디오를 대여하여 고정비 상쇄.<br />
                           <span className="text-emerald-500 font-bold">스페이스클라우드, 아워플레이스, 빌리오</span> 활용.
                        </p>
                     </div>
                     <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-500/50 transition-colors h-full flex flex-col">
                        <span className="text-zinc-200 block mb-4 uppercase tracking-widest text-lg font-bold">팬덤 비즈니스</span>
                        <span className="text-white text-2xl font-black block mb-4">굿즈 & 디지털 에셋</span>
                        <p className="text-zinc-200 text-lg leading-relaxed mb-6 flex-grow">
                           재고 부담 없는 위탁판매 및 디지털 파일 판매.<br />
                           <span className="text-emerald-500 font-bold">마플(의류), 크티(템플릿), 오즈의 제작소</span> 활용.
                        </p>
                     </div>
                     <div className="bg-emerald-950/20 p-8 rounded-3xl border border-emerald-500/20 h-full flex flex-col justify-center">
                        <h4 className="text-white text-xl font-bold mb-4 flex items-center gap-3"><${LucideIcon} name="Award" size=${28} className="text-emerald-500" /> 정부 지원 사업 (필수)</h4>
                        <p className="text-zinc-200 text-lg leading-relaxed">
                           **콘텐츠진흥원(KOCCA)**, 창업진흥원 등에서 매년 '1인 크리에이터 지원' 사업 공고.<br /><br />
                           <span className="text-white font-black text-2xl border-b-2 border-emerald-500">수천만 원 비상환 제작비</span>를 절대 놓치지 마십시오.
                        </p>
                     </div>
                  </div>
               </div>
            <//>

            <${Section} id="mindset">
               <div className="flex items-center gap-4 mb-10 mt-20">
                  <span className="p-3 bg-zinc-800 rounded-xl shadow-lg shadow-amber-600/10"><${LucideIcon} name="Target" size=${36} className="text-amber-500" /></span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase">8. 성공을 위한 마인드 셋</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] h-full flex flex-col group hover:border-amber-500/50 transition-colors">
                     <span className="text-amber-500 font-serif text-5xl italic opacity-50 mb-6 block group-hover:opacity-100 transition-opacity">01</span>
                     <h4 className="text-2xl font-black text-white mb-4">광기에 가까운 확신을 갖자</h4>
                     <p className="text-zinc-200 text-lg leading-relaxed flex-grow">
                        단순한 긍정이 아닌 강철 같은 믿음이 필요하며, 확신은 남들의 의심 속에서 본인 혼자 지켜내야 한다.<br /><br />
                        세상은 오래 버틴 확신에게 결국 기회를 내어준다.
                     </p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] h-full flex flex-col group hover:border-amber-500/50 transition-colors">
                     <span className="text-amber-500 font-serif text-5xl italic opacity-50 mb-6 block group-hover:opacity-100 transition-opacity">02</span>
                     <h4 className="text-2xl font-black text-white mb-4">속도는 내되 정도(正道)를 걷자</h4>
                     <p className="text-zinc-200 text-lg leading-relaxed flex-grow">
                        본질이 담겨 있다면 지름길이 아니어도 좋다.<br /><br />
                        '정도'를 걸어야 수명 짧은 시장에서 7년 이상의 성공을 유지할 수 있다.
                     </p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] h-full flex flex-col group hover:border-amber-500/50 transition-colors">
                     <span className="text-amber-500 font-serif text-5xl italic opacity-50 mb-6 block group-hover:opacity-100 transition-opacity">03</span>
                     <h4 className="text-2xl font-black text-white mb-4">집념은 감춰지지 않는다</h4>
                     <p className="text-zinc-200 text-lg leading-relaxed flex-grow">
                        버티고 견디는 것만으로는 충분하지 않으며, 그 이상의 **집념**이 필요하다.<br /><br />
                        집념이 녹은 결과물은 반드시 드러난다.
                     </p>
                  </div>
               </div>
            <//>

            <${Section} id="outro">
               <div className="mt-32 text-center space-y-12">
                  <div className="inline-block px-10 py-4 bg-zinc-900 border border-zinc-800 rounded-full">
                     <span className="text-zinc-200 font-bold tracking-widest uppercase text-base">축하합니다! 마스터 코스를 완주하셨습니다.</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic uppercase tracking-tighter leading-none mb-10">
                     가장 강력한<br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600">1인 기업이 되십시오</span>
                  </h2>
                  <p className="text-xl text-zinc-200 max-w-2xl mx-auto font-medium leading-relaxed">
                     이제 당신의 채널은 단순한 영상 저장소가 아닌<br />
                     수익과 시스템이 공존하는 <strong className="text-white">위대한 비즈니스</strong>입니다.
                  </p>
                  <div className="pt-10">
                     <button onClick=${() => window.location.reload()} className="px-16 py-8 bg-white text-black text-xl font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                        홈으로 돌아가기

                     </button>
                  </div>
               </div>
            <//>
       </div >
         `;
   };

})();








