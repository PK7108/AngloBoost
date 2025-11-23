// useDocumentMeta.jsx - poprawiona wersja
import { useEffect } from 'react'

export default function useDocumentMeta({ title, description, canonical, og }) {
    useEffect(() => {
        // Title
        if (title) {
            document.title = title
        }

        // Description
        const updateMeta = (name, content) => {
            if (!content) return

            let meta = document.querySelector(`meta[name="${name}"]`)
            if (meta) {
                meta.setAttribute('content', content)
            } else {
                meta = document.createElement('meta')
                meta.name = name
                meta.content = content
                document.head.appendChild(meta)
            }
        }

        updateMeta('description', description)

        // Canonical
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]')
            if (link) {
                link.setAttribute('href', canonical)
            } else {
                link = document.createElement('link')
                link.rel = 'canonical'
                link.href = canonical
                document.head.appendChild(link)
            }
        }

        // Open Graph
        if (og) {
            const setOG = (property, content) => {
                if (!content) return

                let meta = document.querySelector(`meta[property="${property}"]`)
                if (meta) {
                    meta.setAttribute('content', content)
                } else {
                    meta = document.createElement('meta')
                    meta.setAttribute('property', property)
                    meta.setAttribute('content', content)
                    document.head.appendChild(meta)
                }
            }

            setOG('og:title', og.title || title)
            setOG('og:description', og.description || description)
            setOG('og:image', og.image)
            setOG('og:url', og.url || window.location.href)
            setOG('og:type', 'website')
        }

    }, [title, description, canonical, og])
}