export default function Skills() {
    return (
        <div className="lg:flex flex lg:justify-center lg:ml-[150px] gap-x-10 lg:mt-[100px]">
            <div>
                <h1 className=" font-[michroma] text-[white] relative z-10 select-none dark:text-[red]">
                      &nbsp;&nbsp;&nbsp;Skills
                </h1>
                <h1 className="mt-[-20px] font-[michroma] blur-[1px] lg:mt-[-17px]  select-none lg:dark:mt-[-20px]">
                    &nbsp;&nbsp;&nbsp;Skills
                </h1>
            </div>
            <div className="lg:w-[800px] lg:mt-[4px] dark:text-[white]">
                <div>
                    <div className=" lg:grid lg:grid-cols-4 lg:gap-4 lg:text-sm">
                        
                        <div>
                            <h1 className="font-semibold mb-2">Languages</h1>
                            <ul className="space-y-1">
                                <li><span className="lg:hidden">_____</span>JavaScript (ES6+)</li>
                                <li><span className="lg:hidden">_______</span>TypeScript</li>
                                <li><span className="lg:hidden">_________</span>HTML</li>
                                <li><span className="lg:hidden">____________</span>CSS/Sass</li>
                                <li><span className="lg:hidden">______________</span>C#</li>

                            </ul>
                        </div>
                        <br className="lg:hidden"/>
                        <div>
                            <h2 className="lg:ml-[-1px] ml-[220px] font-semibold lg:mb-2 mb-2">Frameworks</h2>
                            <ul className="space-y-1">
                                <li><span className="lg:hidden">___________________________________</span>React</li>
                                <li><span className="lg:hidden">_____________________________________</span>Next.js</li>
                                <li><span className="lg:hidden">_______________________________________</span>Tailwind</li>
                                <li><span className="lg:hidden">_________________________________________</span>Bootstrap</li>
                                <li><span className="lg:hidden">___________________________________________</span>Material UI</li>

                            </ul>
                        </div>
                        <br className="lg:hidden"/>
                        <div>
                            <h2 className="lg:ml-[-1px] ml-[300px] font-semibold mb-3">Tools</h2>
                            <ul className="space-y-1">
                                <li><span className="lg:hidden">______________________________________</span>Git & Github</li>
                                <li><span className="lg:hidden">___________________________________</span>Vs code</li>
                                <li><span className="lg:hidden">________________________________</span>Chrome DevTools</li>
                                <li><span className="lg:hidden">____________________________</span>EsLint</li>
                                <li><span className="lg:hidden">________________________</span>Docker</li>
                                <li><span className="lg:hidden">______________________</span>Vercel</li>
                                <li><span className="lg:hidden">____________</span>TurboPack</li>
                            </ul>
                        </div>
                        <br className="lg:hidden"/>
                        <div>
                            <h2 className="font-semibold mb-2">The way to GO!</h2>
                            <ul className="space-y-1">
                                <li><span className="lg:hidden">___</span>ASP.net core</li>
                                <li><span className="lg:hidden">_____</span>Mvc</li>
                                <li><span className="lg:hidden">______</span>SQL</li>
                                <li><span className="lg:hidden">________</span>Entity Framework</li>
                                <li><span className="lg:hidden">___________</span>Azure</li>
                                <li><span className="lg:hidden">_____________</span>Razor pages</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}