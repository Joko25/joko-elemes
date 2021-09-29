import { ReactNode } from "react";

interface sectionProp{
    children: ReactNode;
    sectionTitle: String;
    sectionDesc: String;
}

export default function Section(props: sectionProp){
    const {children, sectionTitle, sectionDesc} = props
    return (
        <div className="mb-8">
            <div className="text-4xl">{sectionTitle}</div>
            <div className="text-4xl text-primary">{sectionDesc}</div>
            <div>
                {children}
            </div>

        </div>
    )
}