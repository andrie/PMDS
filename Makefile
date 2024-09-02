# Makefile

# Phony target to prevent file name conflict
.PHONY: all anim quarto publish serve preview

PRES = pmds.qmd

# Default target
all: anim quarto publish

# Target for building animations
anim:
	npm run build
	npm --prefix ./animations run build


serve:
	npm --prefix ./animations run serve

quarto:
	quarto render $(PRES)

publish:
	quarto render $(PRES)
	quarto publish $(PRES) --no-prompt

preview:
	quarto preview $(PRES) --no-browser --port 4096