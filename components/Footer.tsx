import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className=' flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center  gap-[10%] md:flex-row'>
          <Link href="/" className='mb-10'>
            <Image
            src="/hilink-logo.svg"
            alt='logo'
            width={74}
            height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((colums) => (
              <FooterColumn key={colums.title} title={colums.title}>
                <ul className=' gap-4 text-gray-30  regular-14 flex-col flex'>
                 {colums.links.map((link) => (
                  <Link key={link} href={link}>
                  {link}
                  </Link>
                 ))}
                </ul>
              </FooterColumn>
            ))}

            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link key={link.label} href={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                  </Link>
                ))}

              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                 {
                  SOCIALS.links.map((link) => (
                    <Link key={link} href={link}>
                      <Image
                      src={link}
                      alt='logo'
                      width={24}
                      height={24}
                      />
                    </Link>
                  ))
                 }
                </ul>

              </FooterColumn>

            </div>

          </div>

        </div>
        <div className='border bg-gray-20'/>
        <p className=' regular-14 w-full text-center text-gray-30'>&copy; {new Date().getFullYear()} divee project. All rights reserved.</p>
      </div>
     
    </footer>
  )
}
type FooterProps = {
  children: React.ReactNode;
  title: string
}
const FooterColumn = ({title, children}: FooterProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
   
  )
}
export default Footer
