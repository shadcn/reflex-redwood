import {
  Section,
  Container,
  Grid,
  Flexbox,
  H1,
  P,
  Img,
  Button,
} from '@reflexjs/components'

const HomePage = () => {
  return (
    <Section py="8|12|16|24" bg="muted">
      <Container>
        <Grid col="1|2" gap="8|12|16" alignItems="center">
          <Img
            src="https://reflexjs.org/reflexjs-blocks.png"
            colStart="null|2"
            w="full"
            rounded="lg"
            overflow="hidden"
          />
          <Flexbox
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
          >
            <H1 m="0" fontWeight="extrabold" lineHeight="tight">
              Experiences that sell.
            </H1>
            <P fontSize="xl|2xl" mt="2">
              We connect you to the exclusive works from top artists around the
              world.
            </P>
            <Button variant="primary">Get Started</Button>
          </Flexbox>
        </Grid>
      </Container>
    </Section>
  )
}

export default HomePage
