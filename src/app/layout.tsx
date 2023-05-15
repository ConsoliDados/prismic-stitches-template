import ServerSideStyles from './ServerSideStyles'

export const metadata = {
  title: 'B&L Solutions',
  description: 'Soluções corporativas em hardware e infraestrutura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ServerSideStyles>{children}</ServerSideStyles>
      </body>
    </html>
  )
}
