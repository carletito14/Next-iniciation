import { useRouter } from 'next/dist/client/router';

const Desc = () => {
    const router = useRouter();
    console.log({router});
    return (
        <div>
            <p>
                Descripción de pokemon
            </p>
        </div>
    )
}

export default Desc
