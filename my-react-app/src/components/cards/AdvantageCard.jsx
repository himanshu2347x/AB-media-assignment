// Custom SVG Icons to match the exact design
const TimeIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" stroke="#0891b2" strokeWidth="3" fill="none" />
        <path d="M32 12v20l14 8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const MoneyIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="20" width="48" height="30" rx="4" stroke="#0891b2" strokeWidth="3" fill="none" />
        <rect x="12" y="12" width="40" height="25" rx="4" stroke="#0891b2" strokeWidth="2" fill="none" />
        <circle cx="45" cy="28" r="3" fill="#f59e0b" />
        <rect x="16" y="24" width="3" height="8" fill="#f59e0b" />
        <rect x="21" y="26" width="3" height="6" fill="#f59e0b" />
        <rect x="26" y="24" width="3" height="8" fill="#f59e0b" />
    </svg>
);

const NetworkIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="16" width="40" height="32" rx="6" stroke="#0891b2" strokeWidth="3" fill="none" />
        <rect x="18" y="22" width="6" height="20" fill="#f59e0b" />
        <rect x="26" y="26" width="6" height="16" fill="#f59e0b" />
        <rect x="34" y="24" width="6" height="18" fill="#f59e0b" />
        <rect x="42" y="28" width="6" height="14" fill="#f59e0b" />
    </svg>
);

const BookIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <path d="M12 12v40l20-4 20 4V12l-20 4-20-4z" stroke="#0891b2" strokeWidth="3" fill="none" />
        <path d="M32 16v36M20 20h8M20 26h8M36 18h8M36 24h8" stroke="#0891b2" strokeWidth="2" />
        <rect x="16" y="20" width="2" height="2" fill="#f59e0b" />
        <rect x="16" y="26" width="2" height="2" fill="#f59e0b" />
        <rect x="36" y="18" width="2" height="2" fill="#f59e0b" />
    </svg>
);

// Icon mapping for the advantages
const iconMap = {
    'save-time': TimeIcon,
    'save-money': MoneyIcon,
    'trusted-network': NetworkIcon,
    'multiple-options': BookIcon
};

const AdvantageCard = ({ advantage }) => {
    const Icon = iconMap[advantage.id];

    return (
        <div className="flex flex-col items-center text-center bg-white rounded-full p-8 shadow-lg">
            <div className="bg-white rounded-full p-4 mb-4">
                {Icon && <Icon />}
            </div>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
                {advantage.title}
            </h3>
            <p className="text-sm text-gray-600">
                {advantage.description}
            </p>
        </div>
    );
};

export default AdvantageCard;