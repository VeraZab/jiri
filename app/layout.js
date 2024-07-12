import '/styles/reset.css';
import '/styles/global.css';
import Header from "./Header";


export const metadata = {
  title: 'Jiri Kilevnik',
  description: 'Portfolio website of Jiri Kilevnik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Jiri Kilevnik</title>
        {/* <link rel="icon" href="./ui/favicon.ico" type="image/x-icon" /> */}
      </head>

      <body>
        <div className='content-container'>
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
