import { Grid, Heading } from '@chakra-ui/react';
import CSSSvg from '../icons/skills/CSSSvg';
import GraphQLSvg from '../icons/skills/GraphQLSvg';
import HTMLSvg from '../icons/skills/HTMLSvg';
import JavaScriptSvg from '../icons/skills/JavascriptSvg';
import JestSvg from '../icons/skills/JestSvg';
import NextSvg from '../icons/skills/NextSvg';
import React from '../icons/skills/ReactSvg';
import TypeScriptSvg from '../icons/skills/TypeScriptSvg';

export default function Skills() {
  return (
    <section>
      <Heading as="h3">Skills</Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gridGap="3rem"
        justifyContent="center"
      >
        <HTMLSvg />
        <CSSSvg />
        <JavaScriptSvg />
        <TypeScriptSvg />
        <JestSvg />
        <React />
        <GraphQLSvg />
        <NextSvg />
      </Grid>
    </section>
  );
}
