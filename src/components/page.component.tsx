import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string;
}

export const Page: FC<Props> = ({ children, title }) => {
  return (
    <>
      <main>
        { title && <h1>{ title }</h1> }
        { children }
      </main>

      <footer>
        <p>Copyright &copy; 2023 por TepacheLabs</p>
      </footer>
    </>
  )
}
