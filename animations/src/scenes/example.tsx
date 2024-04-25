import { makeScene2D, Circle, Rect, Txt, Line, Node } from "@motion-canvas/2d";
import { createRef, all } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const quarto = createRef<Rect>();
  const mc = createRef<Rect>();
  const container = createRef<Rect>();

  const RECT_WIDTH = 400;
  const RECT_HEIGHT = 140;
  const RECT_FILL = "lightgrey";
  const TEXT_COLOR = "blue";

  view.add(
    <>
      <Rect ref={container} x={-100} y={50} opacity={0} size={[500, 400]}
      lineWidth={0} stroke="#f00">

        <Rect ref={quarto} x={-70} y={-50} width={RECT_WIDTH} height={140} 
          fill={RECT_FILL}stroke={TEXT_COLOR} lineWidth={3}>
          <Txt text="Quarto" fill={TEXT_COLOR} />
        </Rect>

        <Rect ref={mc} x={RECT_WIDTH + 50} y={-50} width={RECT_WIDTH} height={140} 
          fill={RECT_FILL}stroke={TEXT_COLOR} lineWidth={3}>
          <Txt text="Motion Canvas" fill={TEXT_COLOR} />
        </Rect>

        {/* <Line 
          stroke={'#f00'}
          lineWidth={8}
          points={[
            quarto().right(),
            mc().left(),
            
          ]}
        /> */}
      </Rect>

    </>


  );
  
  yield* all(
    container().opacity(1, 1)
  )

  yield* all(
    quarto().position([0, -80], 2),
    // mc().x(150, 2),
    container().position([0, -50], 2),
    mc().top(quarto().bottom().addY(-10), 2),
    mc().x(0, 2),
    // mc().top(quarto().bottom().addX(300), 2),
    // myCircle().fill("#e6a700", 1).back(1),
  );
  
  yield* all(
    container().lineWidth(10, 2)
  )

  yield* all(
    container().opacity(0, 1)
  )

});
