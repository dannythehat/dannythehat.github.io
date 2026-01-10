# Category Sections to Add to Index.tsx

Insert these sections after line 599 (after Featured Holidays section, before UK Stays Preview):

```tsx
        {/* Browse by Category Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body text-secondary">Explore by Interest</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
                Find Your Perfect Adventure
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                From vibrant festivals to wildlife encounters and ancient wonders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Festivals Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                <Link 
                  to="/festivals"
                  className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale shadow-2xl"
                >
                  <img 
                    src="https://ik.imagekit.io/apv2ynvjx/beyond-ordinary-adventures/holi-festival-india.jpg"
                    alt="Festivals & Celebrations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-body text-sm">Festivals</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                      Festivals & Celebrations
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                      Experience the world's most vibrant cultural celebrations
                    </p>
                    
                    <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="font-body text-sm">Explore Festivals</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Wildlife Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <Link 
                  to="/wildlife"
                  className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale shadow-2xl"
                >
                  <img 
                    src="https://ik.imagekit.io/apv2ynvjx/beyond-ordinary-adventures/serengeti-safari-tanzania.jpg"
                    alt="Wildlife Encounters"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <span className="font-body text-sm">Wildlife</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                      Wildlife Encounters
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                      Get up close with nature's most magnificent creatures
                    </p>
                    
                    <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="font-body text-sm">Explore Wildlife</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Seven Wonders Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  to="/seven-wonders"
                  className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale shadow-2xl"
                >
                  <img 
                    src="https://ik.imagekit.io/apv2ynvjx/beyond-ordinary-adventures/petra-jordan.jpg"
                    alt="Seven Wonders"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <span className="font-body text-sm">Wonders</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                      Seven Wonders
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                      Visit humanity's greatest architectural achievements
                    </p>
                    
                    <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="font-body text-sm">Explore Wonders</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
```

## Instructions:
1. Open `src/pages/Index.tsx`
2. Find line 599 (after the Featured Holidays section closing `</section>`)
3. Insert the above code BEFORE the `{/* UK Stays Preview Section */}` comment
4. The imports are already present (Sparkles, ArrowRight, Link, motion)
5. Save and commit