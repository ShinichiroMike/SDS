import React from "react";
import ReactDOM from "react-dom";

import { Annotation } from "../ui/atoms/annotation";
import { Box } from "../ui/atoms/box";
import { Container } from "../ui/atoms/container";
import { FlexItem } from "../ui/atoms/flex-item";
import { FadeInUpBox } from "../ui/atoms/fade-in-up-box";
import { FlexList } from "../ui/atoms/flex-list";
import { Heading } from "../ui/atoms/heading";
import { IntersectionObserver } from "../ui/atoms/intersection-observer";
import { Link } from "../ui/atoms/link";
import { Paragraph } from "../ui/atoms/paragraph";
import { ScaleBox } from "../ui/atoms/scale-box";
import { vs } from "../ui/media";

import "../ui/molecules/global-styles/global.css";

const paragraphsContent = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam esse inventore fugit laborum consectetur facilis ex ipsum nihil minus! Saepe, fugiat nesciunt libero dolorem deleniti sapiente similique incidunt ratione voluptates numquam itaque repellat, architecto a quos unde eos nobis quae accusantium debitis? Quibusdam et iste voluptatem ipsa excepturi ut!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem, neque iste officia repudiandae ipsa natus optio sequi culpa rerum error dolores explicabo maxime quam totam alias maiores quisquam. Eius, repudiandae. Odit ducimus incidunt voluptatibus odio quasi maxime et dicta aliquid eius fugiat illum magni fuga, ea voluptas obcaecati est! Consectetur molestiae, ipsam quo suscipit eos, repellendus hic eligendi exercitationem sequi deleniti temporibus beatae aspernatur excepturi harum. Ducimus, odit doloremque? Voluptatibus quasi iste corporis repellat adipisci debitis perferendis rerum possimus consequuntur modi quidem nisi culpa illo dolores, delectus laudantium eos sapiente natus veritatis optio, eligendi distinctio voluptatum voluptate? Doloremque odio suscipit dolorum earum et. Quasi qui, excepturi perspiciatis voluptatibus optio asperiores, consectetur ipsa impedit ut temporibus officiis eligendi quaerat ad.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consequatur placeat neque quas quisquam tempora in aliquam aspernatur accusantium nisi veniam, fugiat eum odit officiis reprehenderit quae incidunt repudiandae voluptatum labore pariatur totam. Earum eaque nam tempora maiores unde dolores voluptate esse, cum nemo minima harum tenetur accusantium sit sunt reprehenderit magnam temporibus! Doloremque itaque nobis, facere minus neque magnam exercitationem iure aspernatur ullam eos eaque delectus fugiat asperiores quia dolorum! Veritatis facilis magni quidem ratione sunt vitae neque ducimus repellat voluptates exercitationem placeat saepe necessitatibus, libero amet, atque unde nostrum sit aliquam. Rem quo qui cupiditate autem vel expedita?",
];

function App() {
  return (
    <Container>
      <Box textAlign="center">
        <Heading as="h2">Intersection Observer | Scale Box</Heading>
        <Paragraph>
          <Link href="https://github.com/streamich/react-use/blob/master/docs/useIntersection.md">
            react-use - useIntersection
          </Link>
        </Paragraph>
      </Box>
      <Box>
        <Paragraph display={vs.xs}>Mobile</Paragraph>
        <Paragraph display={vs.s}>Mobile2</Paragraph>
        <Paragraph display={vs.m}>Desktop</Paragraph>
        <Paragraph display={vs.l}>LG Desktop</Paragraph>
      </Box>
      <FlexList my={2}>
        {[...Array(6).keys()].map((item, key) => (
          <IntersectionObserver key={key}>
            <ScaleBox>
              <FlexItem bg={["bg200", "bg300", "bg400"]}>{item + 1}</FlexItem>
            </ScaleBox>
          </IntersectionObserver>
        ))}
      </FlexList>
      <Heading as="h3">ScaleBox props:</Heading>
      <Box>
        <Paragraph>
          delayOrder?
          <Annotation>order of appearance</Annotation>
        </Paragraph>
        <Paragraph>duration? = 0.4,</Paragraph>
        <Paragraph>
          easing? = [0.42, 0, 0.58, 1],
          <Annotation>
            [number, number, number, number] | "linear" | "easeIn" | "easeOut" |
            "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" |
            "backOut" | "backInOut" | "anticipate" | EasingFunction
          </Annotation>
        </Paragraph>
      </Box>
      <Heading as="h3">IntersectionObserver props:</Heading>
      <Box>
        <Paragraph>
          reset? = false
          <Annotation>
            if value set to true - observed element will reappear every time it
            shows up on the screen
          </Annotation>
        </Paragraph>
      </Box>
      <Box my={5}>
        {paragraphsContent.map((item, key) => (
          <IntersectionObserver key={key}>
            <FadeInUpBox>
              <Paragraph fontSize={4}>{item}</Paragraph>
            </FadeInUpBox>
          </IntersectionObserver>
        ))}
      </Box>
    </Container>
  );
}

export default App;
