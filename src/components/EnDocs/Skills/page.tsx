export default function Skills() {
    return (
        <div className="flex justify-center ml-[150px] gap-x-10 lg:mt-[100px]">
            <div>
                <h1 className="font-[michroma] lg:text-[white] lg:relative z-10 select-none dark:text-[red]">
                    Skills
                </h1>
                <h1 className="font-[michroma] blur-[2px] lg:mt-[-10px] select-none dark:mt-[-20px]">
                    Skills
                </h1>
            </div>
            <div className="w-[800px] h-[400px] dark:text-[white]">
                <div>
                    <div className=" grid grid-cols-4 gap-4 text-sm">
                        <div>
                            <h1 className="font-semibold mb-2">Languages</h1>
                            <ul className="space-y-1">
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>HTML</li>
                                <li>CSS/Sass</li>
                                <li>C#</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2">Frameworks</h2>
                            <ul className="space-y-1">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2">Tools</h2>
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
                        <div className="ml-[30px]">
                            <h2 className="font-semibold mb-2">The way to GO!</h2>
                            <ul className="space-y-1">
                                <li>ASP.net core</li>
                                <li>Mvc</li>
                                <li>SQL</li>
                                <li>Entity Framework</li>
                                <li>Azure</li>
                                <li>Razor pages</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}