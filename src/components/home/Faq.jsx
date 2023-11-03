import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <Box py={20} bgColor={"#002333"}>
      <Box px={["3%", "7%", "10%", "15%"]}>
        <Heading
          textAlign={"center"}
          my={6}
          py={8}
          size={"2xl"}
          color={"white"}
        >
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple>
          <AccordionItem borderTop={"none"} borderBottom={"2px solid #00FF84"}>
            <h2 color="white">
              <AccordionButton py={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"xl"} color={"white"}>
                    What is Skillshare?
                  </Heading>
                </Box>
                <AccordionIcon fontSize={"40px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"20px"} color={"white"} pb={4}>
              Skillshare is an online learning community with thousands of
              classes for creative and curious people, on topics including
              illustration, design, photography, video, freelancing, and more.
              On Skillshare, you’ll find inspiration from hands-on classes and
              teachers at the top of their creative fields, so you can take the
              next step in your creative journey.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem borderTop={"none"} borderBottom={"2px solid #00FF84"}>
            <h2 color="white">
              <AccordionButton py={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"xl"} color={"white"}>
                    What is included in my Skillshare membership?
                  </Heading>
                </Box>
                <AccordionIcon fontSize={"40px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"20px"} color={"white"} pb={4}>
              As a Skillshare member, you’ll have unlimited access to all
              Skillshare classes to watch when and where you want, and
              additional features such as offline viewing, access to a vibrant
              community of lifelong learners, and so much more.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem borderTop={"none"} borderBottom={"2px solid #00FF84"}>
            <h2 color="white">
              <AccordionButton py={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"xl"} color={"white"}>
                    What can I learn from Skillshare?
                  </Heading>
                </Box>
                <AccordionIcon fontSize={"40px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"20px"} color={"white"} pb={4}>
              Skillshare has thousands of classes in everything from graphic
              design to cooking, productivity, filmmaking, content creation,
              UI/UX design, marketing, crafts, music, social media,
              entrepreneurship. If it's something creative, you can learn it on
              Skillshare.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem borderTop={"none"} borderBottom={"2px solid #00FF84"}>
            <h2 color="white">
              <AccordionButton py={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"xl"} color={"white"}>
                    What happens after my trial is over?
                  </Heading>
                </Box>
                <AccordionIcon fontSize={"40px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"20px"} color={"white"} pb={4}>
              After your trial ends, your annual Skillshare membership begins.
              You’ll be billed for the year in full, so you can enjoy continuous
              access to creative classes year-round.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem borderTop={"none"} borderBottom={"2px solid #00FF84"}>
            <h2 color="white">
              <AccordionButton py={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"xl"} color={"white"}>
                    Can I teach on Skillshare?
                  </Heading>
                </Box>
                <AccordionIcon fontSize={"40px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"20px"} color={"white"} pb={4}>
              Yes! Skillshare teachers are everyday creatives and professionals
              who want to share their passion, and the skills and experience
              they’ve gained in their creative disciplines with a community of
              eager learners. To learn more about teaching on Skillshare, visit
              our Help Center.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
