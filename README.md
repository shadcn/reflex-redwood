# Redwood + Reflex Components

https://reflexjs.org

## Step 1: Install dependencies

`yarn workspace web add @reflexjs/components @reflexjs/preset-base`

## Step 2: Wrap routes in a ThemeProvider

```js
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

// import './index.css'
import { ThemeProvider } from 'theme-ui'
import base from '@reflexjs/preset-base'

import Routes from 'src/Routes'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ThemeProvider theme={base}>
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
```

### Step 2: You can use Reflex components in pages.

```jsx
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
```
