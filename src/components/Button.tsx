type ButtonProps = {
    label: string; // Title of the button
    onClick: () => void; // Function to be called when the button is clicked
    variant?: 'primary' | 'secondary';
    className?: string;
    size?: 'sm' | 'lg';
};

function Button({ label, onClick, variant = 'primary', className, size }: ButtonProps) {
    const baseStyle = 'px-4 py-2 rounded-full w-';
}
