import { JSX, LazyExoticComponent, ReactNode, Suspense } from "react"

export const SuspenseLoadComponent = (props: {
  Component: LazyExoticComponent<() => JSX.Element | ReactNode>
}): ReactNode => {
  const { Component } = props

  return (
    <Suspense fallback={ <>loading...</> }>

      <Component />
    </Suspense>
  )
}
