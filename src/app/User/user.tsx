import { Dashboard } from "../components/Dashboard/dashboard";

export function User() {
    const userData = [{
        name: "Joãozinho da Silva",
        email: "joaozinho@gmail.com",
        agency: "1234",
        account: "987654321",
        gender: "Feminino",
        address: "Rua Exemplo, 123, Bairro, Cidade, Estado",
        balance: "R$ 1.234,56",
        manager: "Maria da Silva",
        img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    }];

    return (
        <Dashboard>
            <div className="grid gap-8 w-full">
                {userData.map((person, idx) => (
                    <div
                    key={idx}
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                    >
                    <a href="#">
                        <img
                        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                        src={person.img}
                        alt={`${person.name} Avatar`}
                        />
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                            <b className="font-bold">Nome:</b> <a href="#">{person.name}</a>
                        </h3>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                            <b className="font-bold">E-mail:</b> {person.email}
                        </p>
                        <span className="text-gray-500 dark:text-gray-400"><b className="font-bold">Agencia.:</b> {person.agency} - <b className="font-bold">Conta.:</b>{person.account}</span>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                        <b className="font-bold">Sexo:</b> {person.gender}
                        </p>
                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                        <b className="font-bold">Endereço:</b> {person.address}
                        </p>
                        <ul className="flex space-x-4 sm:mt-0">
                            <li>
                                <div className="w-full bg-green-400 p-5 rounded-2xl"> <b className="font-bold">Saldo:</b> { userData[0].balance }</div>
                            </li>
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        </Dashboard>
    );
}