import Image from 'next/image'
import styles from './page.module.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import 'primereact/resources/themes/lara-dark-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Panel } from 'primereact/panel'

export default function Home() {
  return (
    <PrimeReactProvider>
      <main>
        <Panel
          toggleable
          header={
            <h1 className={styles.title}>
              Example NextJs Typescript Application
            </h1>
          }
        >
          <div>test three</div>
          <div>maybe</div>
        </Panel>
      </main>
    </PrimeReactProvider>
  )
}
