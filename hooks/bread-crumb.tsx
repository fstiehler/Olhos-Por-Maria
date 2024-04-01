import { useEffect, useState } from 'react';
import type { ArticleCategory } from 'types/strapi-cms/category.types';
import { SingleEntity } from 'types/strapi-cms/strapi.types';

import type { CrumbsProps } from '~components/global/bread-crumb/bread-crumb-types';

interface UseBreadCrumbProps {
    language: string;
    title: string;
    primaryCategory: SingleEntity<ArticleCategory>;
}

export const useBreadCrumb = ({
    language,
    primaryCategory,
    title,
}: UseBreadCrumbProps) => {
    const [crumbs, setCrumbs] = useState<CrumbsProps[]>([]);

    const formatBreadCrumb = (
        category: SingleEntity<ArticleCategory>,
        pageTitle: string,
        breadCrumbData: CrumbsProps[] = []
    ) => {
        const categoryData = category?.data;
        let formattedData: CrumbsProps[] = [];

        if (categoryData) {
            formattedData = [
                {
                    language,
                    title: categoryData.attributes.title,
                    link: `${categoryData.attributes.slug}`,
                },
                ...breadCrumbData,
            ];
            return formatBreadCrumb(
                categoryData.attributes.parent,
                pageTitle,
                formattedData
            );
        }
        let crumbsWithLink: CrumbsProps[] = [];

        for (let index = 0; index < breadCrumbData.length; index++) {
            const lastLink =
                index > 0 ? `${breadCrumbData[index - 1].link}` : '';
            const link = `${lastLink ? `${lastLink}/` : ''}${
                breadCrumbData[index].link
            }`;
            crumbsWithLink = [
                ...crumbsWithLink,
                { language, title: breadCrumbData[index].title, link: link },
            ];
        }

        formattedData = [
            { language, title: 'home', link: '' },
            ...crumbsWithLink,
            { language, title: pageTitle, link: null },
        ];

        setCrumbs(formattedData);
    };

    useEffect(() => {
        if (primaryCategory) {
            formatBreadCrumb(primaryCategory, title);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [primaryCategory, title]);

    return crumbs;
};
