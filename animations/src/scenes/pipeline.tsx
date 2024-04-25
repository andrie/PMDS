import { makeScene2D, Circle, Rect, Txt, TxtProps, Line, Node, RectProps } from "@motion-canvas/2d";
import {CodeBlock, lines} from '@motion-canvas/2d/lib/components/CodeBlock';
import { createRef, makeRef, all, chain, loop, linear, experimentalLog, RefsProperty, waitFor, DEFAULT, createRefMap, sequence } from "@motion-canvas/core";
import {useLogger} from '@motion-canvas/core';
import { BaseFont } from "../styles";


export default makeScene2D(function* (view) {
  const quarto = createRef<Rect>();
  const containerLeft = createRef<Rect>();
  const containerRight = createRef<Rect>();

  const tr = createRefMap<Txt>();
  const cl = createRefMap<Line>();

  const cb = createRef<CodeBlock>();

  const logger = useLogger();
 
  

  const RECT_WIDTH = 400;
  const RECT_HEIGHT = 140;
  const RECT_FILL = "lightgrey";
  const TEXT_COLOR = "blue";

  // const view.size().x = 1980;
  // const view.size().y = 1080;
  // logger.info({object: {view.size().x:  view.size().x}});
  // logger.info({object: {view: view.size()}});

  const yPos = (n:number, t:number) => {
    return view.size().y/2 * n/(t+1);
  }

    
  const ConnectingLine = (refs:any) => {
    return (<Line 
      lineWidth={10}
      stroke={"#f00"}
      lineDash={[10, 10]}
      points={[
        refs["rx"].top,
        refs["ry"].bottom,
      ]}
      endArrow
      arrowSize={15}
      endOffset={10}
      startOffset={10}
      start={0}
      lineDashOffset={0}
      {...refs}
      />);
    };
    
  function Clock ({
    size = 100
  }: {size?: number}) {
    return (
      <Node  >
        <Circle size={size} stroke={'#00f'} lineWidth={5} >
        <Line stroke={'#00f'} lineWidth={5} points={[
            [0, 0], [0, -0.4 * size],
          ]} />
        </Circle>
      </Node>
    )
  }
  
  const ghaClock = createRef<Node>();
  
  const code_git = `
  git commit
  git push
  `
  
  const code_iframe = `
  <iframe src="https://andrie.quarto.pub/goes-paddling" />
  `


  function TxtRect({
    text,
    textFill="blue",
    ...props
  }: {
    text: string;
    textFill?: string;
  } & RectProps) {
    return (
      <Rect  radius={15} {...props} lineWidth={3} stroke={'green'} size={[500, 100]}>
        <Txt text={text} {...BaseFont} fill={textFill}/>
      </Rect>
    );
  }

  const mtr = createRef<Rect>();
  

  // const logger = useLogger();
        
  view.add(
    <>
      <Node position={[-view.size().x / 4, 0]} >
        {/* left side */}
        <Rect ref={containerLeft} position={[0,0]} opacity={1} 
          stroke="#f00" lineWidth={3} 
          size={[view.size().x * 0.45, view.size().y * 0.95]} >

          <Rect ref={quarto} x={-70} y={-50} fill={'#000'} 
          size={[600, 400]}
          lineWidth={3} stroke="#f00" >

            <CodeBlock ref={cb} position={[0, -100]}
              language="shell"
              code={code_git} />,
          </Rect>
        </Rect>


      </Node>
      
      <Node position={[view.size().x / 4, 0]} >
        {/* right side */}
        {/* <MyTxt fontFamily={"Open Sans"} fill={TEXT_COLOR} /> */}
        <Rect ref={containerRight} position={[0,0]} opacity={1} 
          size={[view.size().x * 0.45, view.size().y * 0.95]} lineWidth={3} stroke="#f00" >
        </Rect>
          <TxtRect text="HCC site"         ref={tr.hcc} y={yPos(-2, 2)} />
          <TxtRect text="QuartoPub"        ref={tr.quarto} y={yPos(-1, 2)} />
          <TxtRect text="Scheduled Action" ref={tr.gha} y={yPos(0, 2)} />
          <TxtRect text="Version Control"  ref={tr.gh} y={yPos(1, 2)} />
          <TxtRect text="IDE"              ref={tr.ide} y={yPos(2, 2)} />

          <ConnectingLine rx={tr.ide()} ry={tr.gh()}     ref={cl.ide_gh} />
          <ConnectingLine rx={tr.gh()} ry={tr.gha()}     ref={cl.gh_gha} />
          <ConnectingLine rx={tr.gha()} ry={tr.quarto()} ref={cl.gha_quarto} />
          <ConnectingLine rx={tr.quarto()} ry={tr.hcc()} ref={cl.quarto_hcc} />

        <Node ref={ghaClock} position={[-325, 0]}>
          <Clock size={80}/>
        </Node>
    
      </Node>


    </>


  );

  // yield* all(
    // cb().language("html", 1),
    // l1().lineDashOffset(-400, 10, linear),
    // l2().lineDashOffset(-400, 10, linear),
    // l3().lineDashOffset(-400, 10, linear),
    // l4().lineDashOffset(-400, 10, linear),
    // )

  // const code_r1 = 
  // `
  // x <- function(z) {
  //   z + 1
  // }`

  yield* all(
    ghaClock().rotation(360, 3, linear),
    chain(
      // mtr().fill("red", 1),
      // mtr().fill("green", 2)
    )
  )

  // // CodeBlock animation
  // yield* cb().selection(lines(1, 2), 1);
  // yield* cb().selection(DEFAULT, 0);
  // yield* cb().edit(1, false)``;
  // yield* cb().edit(1, false)`${code_r1}`;
  // yield* cb().selection(lines(2,2), 1);
  // yield* waitFor(1);
  // yield* cb().fontSize(0, 2)

  // yield* all(
  //   container().opacity(1, 1)
  // )

  // yield* all(
  //   quarto().position([0, -80], 2),
  //   // mc().x(150, 2),
  //   container().position([0, -50], 2),
  //   mc().top(quarto().bottom().addY(-10), 2),
  //   mc().x(0, 2),
  //   // mc().top(quarto().bottom().addX(300), 2),
  //   // myCircle().fill("#e6a700", 1).back(1),
  // );
  
  // yield* all(
  //   container().lineWidth(10, 2)
  // )

  // yield* all(
  //   container().opacity(0, 1)
  // )
  

});
