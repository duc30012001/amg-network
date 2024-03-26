/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { PublicLayout } from '@/layouts';
import { NextPageWithLayout } from '@/utils/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {};

const PageError: NextPageWithLayout = ({}: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};

PageError.Layout = PublicLayout;

export default PageError;
