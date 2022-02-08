import React, { useState } from "react"
import Head from "next/head"
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    useColorMode
} from "@chakra-ui/react"
import { getAllFilesFrontMatter } from "../lib/mdx"

import Container from "../components/Container"
import BlogPost from "../components/BlogPost"

import { SearchIcon } from "@chakra-ui/icons"

export default function Blog({posts}) {
    const [searchValue, setSearchValue] = useState("")
    const { colorMode } = useColorMode()
    const colourBar = {
        light: "black",
        dark: "white"
    }
    const colorIcon = {
        light: "white",
        dark: "black"
    }
    const filteredPosts = posts.sort((a,b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))).filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))
    return(
        <>
            <Head>
                <title>Blog - whoami</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                           Blog # Posts: {filteredPosts.length}
                        </Heading>
                        <InputGroup mb={4} mr={4} w='100%'>
                            <Input
                                bgColor={colourBar[colorMode]}
                                textColor={colorIcon[colorMode]}
                                aria-label="Search"
                                placeholder="What are you looking for?"
                                onChange={(val) => setSearchValue(val.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon color={colorIcon[colorMode]}/>
                            </InputRightElement>
                        </InputGroup>
                        {!filteredPosts.length && "This space seems to be empty, check back later!"}
                        {filteredPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog")


    return { props: {posts} }
}