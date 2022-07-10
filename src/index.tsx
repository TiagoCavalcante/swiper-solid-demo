import { render } from "solid-js/web";

import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/solid";

const App = () => (
  <Swiper
    modules={[Navigation, Pagination]}
    grabCursor
    navigation
    pagination
  >
    <SwiperSlide>
      Porting a React library to SolidJS
    </SwiperSlide>
    <SwiperSlide>
      Step 1. Replace all imports from React to SolidJS
    </SwiperSlide>
    <SwiperSlide>
      <div>
        Step 2. Replace <code>useState</code> with <code>createSignal</code>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div>
        Step 3. Identify which <code>useEffect</code>s should be <code>createEffect</code>s and which should be <code>onMount</code>s
      </div>
    </SwiperSlide>
    <SwiperSlide>
      Step 4. Simplify the code (ProTip: it is really hard to make bad code with SolidJS)
    </SwiperSlide>
    <SwiperSlide>
      <div>
        Change this:
      </div>
      <pre>
        {/* HTML generated using hilite.me */}
        <div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:5px;padding:.6em .6em;border-radius:10px;"><pre style="margin: 0; line-height: 125%">
          <span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">[</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">setCount</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">useState</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span>{"\n"}
          <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">doubleCount</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">useMemo</span><span style="color: #f8f8f2">(()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #a6e22e">count</span> <span style="color: #f92672">*</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">[</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">])</span>{"\n"}
          <span style="color: #a6e22e">useEffect</span><span style="color: #f8f8f2">(()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{"{"}</span>{"\n"}
          {"  "}<span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">count</span> <span style="color: #f92672">&lt;</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{"{"}</span>{"\n"}
          {"    "}<span style="color: #a6e22e">setCount</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span>{"\n"}
          {"  "}<span style="color: #f8f8f2">{"}"}</span>{"\n"}
          <span style="color: #f8f8f2">{"}"},</span> <span style="color: #f8f8f2">[</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">])</span>{"\n"}
          <span style="color: #a6e22e">useEffect</span><span style="color: #f8f8f2">(()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{"{"}</span>{"\n"}
          {"  "}<span style="color: #a6e22e">ref</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">innerText</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">doubleCount</span>{"\n"}
          <span style="color: #f8f8f2">{"}"},</span> <span style="color: #f8f8f2">[</span><span style="color: #a6e22e">doubleCount</span><span style="color: #f8f8f2">])</span>
        </pre></div>
      </pre>
    </SwiperSlide>
    <SwiperSlide>
      <div>
        To this:
      </div>
      <pre>
        {/* HTML generated using hilite.me */}
        <div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:5px;padding:.6em .6em;border-radius:10px;"><pre style="margin: 0; line-height: 125%">
          <span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">[</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">setCount</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">createSignal</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span>{"\n"}
          <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">doubleCount</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #a6e22e">count</span><span style="color: #f8f8f2">()</span> <span style="color: #f92672">*</span> <span style="color: #ae81ff">2</span>{"\n"}
          <span style="color: #a6e22e">createEffect</span><span style="color: #f8f8f2">(()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{"{"}</span>{"\n"}
          {"  "}<span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">()</span> <span style="color: #f92672">&lt;</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{"{"}</span>{"\n"}
          {"    "}<span style="color: #a6e22e">setCount</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span>{"\n"}
          {"  "}<span style="color: #f8f8f2">{"}"}</span>{"\n"}
          {"  "}<span style="color: #a6e22e">ref</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">innerText</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">doubleCount</span><span style="color: #f8f8f2">()</span>{"\n"}
          <span style="color: #f8f8f2">{"}"})</span>
        </pre></div>
      </pre>
    </SwiperSlide>
    <SwiperSlide>
      <div>
        90% of the work is already done, now you only need to deal with the <code>cloneElement</code>s
      </div>
    </SwiperSlide>
  </Swiper>
);

render(App, document.getElementById("app")!);