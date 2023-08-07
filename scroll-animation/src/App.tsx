import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Sticky,
  MoveOut,
  ZoomIn,
  MoveIn,
} from "react-scroll-motion";

function App() {
  return (
    <>
      <h1 className="text-red-500">asdjai</h1>
      <ScrollContainer className="bg-red-500">
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveOut(0, -300))}>
            <h1 className="test1">test 1</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={batch(MoveIn(0, 200), Sticky(), MoveOut(0, -300))}
          >
            <h1>test 2</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), ZoomIn(), MoveOut(0, -500))}>
            <h1>test 2</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
