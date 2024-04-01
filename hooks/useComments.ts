import { useEffect } from 'react';
import { useState } from 'react';

import {
    GetComments,
    PostComment,
    ReportComment,
} from './../pages/api/comments';

const usePostComments = (postId: number) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<any>(null);

    function handleError(error: unknown) {
        setError(error);
        console.error(error);
    }

    async function getComments() {
        try {
            setIsLoading(true);
            const dataRes = await GetComments(postId);
            setData(dataRes);
        } catch (e) {
            handleError(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getComments();
    }, []);

    const handleSuccess = () => {
        getComments();
    };

    const reportComment = async (...args: Parameters<typeof ReportComment>) => {
        try {
            setIsLoading(true);
            await ReportComment(...args);
            await handleSuccess();
        } catch (e) {
            handleError(e);
        } finally {
            setIsLoading(false);
        }
    };

    const postComment = async (...args: Parameters<typeof PostComment>) => {
        try {
            setIsLoading(true);
            await PostComment(...args);
            await handleSuccess();
        } catch (e) {
            handleError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, reportComment, postComment };
};

export default usePostComments;
