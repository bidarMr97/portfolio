export default function Skills() {
    return (
        <div className="flex flex-col   md:flex-col  md:gap-4 md:mb-8 lg:flex-row lg:justify-center lg:gap-x-10 lg:mt-[100px]">
            <section className="sm:text-center md:text-left ">
                <h4 className=" font-[michroma] text-[white] relative z-10 select-none dark:text-[red]">
                      &nbsp;&nbsp;&nbsp;Skills
                </h4>
                <span className="mt-[-20px] font-[michroma] blur-[1px] lg:mt-[-17px]  select-none lg:dark:mt-[-20px]">
                    &nbsp;&nbsp;&nbsp;Skills
                </span>
            </section>
            <div className="lg:w-[800px] lg:mt-[4px] dark:text-[white] p-[10px] md:p-[0px] w-full">
                
                    <section className=" grid grid-cols-2 gap-8 sm:text-center md:grid md:grid-cols-4 md:text-left md:ml-[25px] lg:grid lg:grid-cols-4 lg:gap-4 lg:text-sm">
                        
                        <div>
                            <h5 className="font-semibold mb-2">Languages</h5>
                            <ul className="space-y-1">
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>HTML</li>
                                <li>CSS/Sass</li>
                                <li>C#</li>

                            </ul>
                        </div>
                        <div>
                            <h5 className=" font-semibold mb-2 ">Frameworks</h5>
                            <ul className="space-y-1">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>

                            </ul>
                        </div>
                        <div>
                            <h5 className="  font-semibold mb-2">Tools</h5>
                            <ul className="space-y-1">
                                <li>Git & Github</li>
                                <li>Vs code</li>
                                <li>Chrome DevTools</li>
                                <li>EsLint</li>
                                <li>Docker</li>
                                <li>Vercel</li>
                                <li>TurboPack</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-2">The way to GO!</h5>
                            <ul className="space-y-1">
                                <li>ASP.net core</li>
                                <li>Mvc</li>
                                <li>SQL</li>
                                <li>Entity Framework</li>
                                <li>Azure</li>
                                <li>Razor pages</li>
                            </ul>
                        </div>
                    

                </section>
            </div>

        </div>
    )
}