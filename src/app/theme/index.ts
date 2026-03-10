import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "Inter, sans-serif"
    }
  },
  theme: {
    tokens: {
      colors: {
        gray: { value: "rgba(241, 241, 241, 1)"},
        borderGray: { value: "rgba(217, 225, 236, 1)"},
        black: { value: "rgba(28, 28, 28, 1)" },
        purple: { value: "rgba(240, 205, 250, 1)" },
        yellow: { value: "rgba(255, 235, 179, 1)" },
        green: { value: "rgba(162, 227, 164, 1)" },
      }
    },
    breakpoints: {
        md: "400px"
    },
    textStyles: {
      body: {},
    }
  }
})

const styleSystem = createSystem(defaultConfig, config)

export { styleSystem }