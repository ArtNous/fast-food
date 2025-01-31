import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest'
import Page from './+page.svelte'

test('Component', () => {
    render(Page)
    screen.getByRole('heading', {
        name: /Welcome to SvelteKit/g
    })
})