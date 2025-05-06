import { HomeIcon, BanknotesIcon, UserIcon } from '@heroicons/react/24/outline';

export const Sidebar = ()=>(
  <div className="flex-1 bg-blue-500">
    <aside id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
                <li>
                    <span className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white group">
                        <div>
                            <UserIcon className="h-auto w-20 text-gray-500" aria-hidden="true" />
                        </div>
                        <div>
                            <span className="ml-3">Joãozinho</span>
                        </div>
                        <div>
                            <span className="ml-3">Ag.123</span>
                        </div>
                        <div>
                            <span className="ml-3">Cc.123456789</span>
                        </div>
                    </span>
                </li>                
            </ul>

            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <HomeIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />                    
                        <span className="ml-3">DioBank</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <BanknotesIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />                    
                        <span className="ml-3">Minha Conta</span>
                    </a>
                </li>

            </ul>
        </div>
    </aside>
</div>
)