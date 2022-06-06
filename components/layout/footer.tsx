import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center opacity-80">
            <div>
                <a href='https://github.com/Arza-lab/nexza' rel="noreferrer" target='_blank' title='Github' >
                    <GitHubIcon  className='mx-4 opacity-80 hover:(text-teal-700)' />
                </a>
            </div>
       </footer>
    )
}

export default Footer