import { redirect } from 'next/navigation'

export default function HomePage() {
    redirect('/ai-projects')
    return (
        <div />
    );
}